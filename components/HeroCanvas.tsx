"use client";

import { useEffect, useRef } from "react";

// --- Noise utilities ---

function hash(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function vnoise(x: number, seed: number): number {
  const i = Math.floor(x);
  const f = x - i;
  const t = f * f * (3 - 2 * f); // smoothstep
  return hash(i + seed * 57) * (1 - t) + hash(i + 1 + seed * 57) * t;
}

// Fractional Brownian Motion: combines noise at multiple scales
function fbm(x: number, seed: number, oct = 7): number {
  let v = 0, a = 0.5, f = 1, s = 0;
  for (let i = 0; i < oct; i++) {
    v += vnoise(x * f, seed + i) * a;
    s += a;
    a *= 0.5;
    f *= 2.1;
  }
  return v / s;
}

// --- Tree renderer ---
// Draws a tiered Douglas-fir silhouette: narrow tip, drooping branch layers
function drawFir(
  ctx: CanvasRenderingContext2D,
  cx: number,
  by: number,
  h: number,
  w: number
) {
  const tiers = 7;
  ctx.beginPath();
  ctx.moveTo(cx, by - h); // apex
  for (let i = 1; i <= tiers; i++) {
    const t = i / tiers;
    const ty = by - h + h * t * 0.88;
    const bw = w * Math.pow(t, 0.65);
    // Branch tip droops below its connection point
    ctx.lineTo(cx + bw, ty + (h / tiers) * 0.32);
    // Notch: step inward and slightly up before next tier
    ctx.lineTo(cx + bw * 0.4, ty + (h / tiers) * 0.62);
  }
  ctx.lineTo(cx + w * 0.06, by); // trunk right
  ctx.lineTo(cx - w * 0.06, by); // trunk left
  for (let i = tiers; i >= 1; i--) {
    const t = i / tiers;
    const ty = by - h + h * t * 0.88;
    const bw = w * Math.pow(t, 0.65);
    ctx.lineTo(cx - bw * 0.4, ty + (h / tiers) * 0.62);
    ctx.lineTo(cx - bw, ty + (h / tiers) * 0.32);
  }
  ctx.closePath();
  ctx.fill();
}

// --- Static scene: mountains + trees (rendered once to offscreen canvas) ---
function drawScene(ctx: CanvasRenderingContext2D, W: number, H: number) {
  // Sky: deep midnight navy to a slight warm-green at the horizon
  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, "#07111c");
  sky.addColorStop(0.3, "#0d1e2e");
  sky.addColorStop(0.62, "#152a38");
  sky.addColorStop(0.82, "#1a2e3c");
  sky.addColorStop(1, "#1d3532");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  // Stars in the upper sky
  for (let i = 0; i < 90; i++) {
    const sx = hash(i * 2.31 + 31) * W;
    const sy = hash(i * 4.73 + 13) * H * 0.42;
    const sr = hash(i * 6.11 + 77) * 1.1 + 0.3;
    const sa = 0.3 + hash(i * 8.9 + 55) * 0.5;
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220,235,240,${sa})`;
    ctx.fill();
  }

  // --- Mountain layer 1: far Cascades, blurred + hazy (atmospheric perspective) ---
  ctx.save();
  ctx.filter = "blur(5px)";
  ctx.beginPath();
  for (let x = -20; x <= W + 20; x++) {
    const n = fbm(x * 0.0028, 1, 7);
    const y = H * 0.50 - n * H * 0.27;
    x === -20 ? ctx.moveTo(x, H + 20) : ctx.lineTo(x, y);
  }
  ctx.lineTo(W + 20, H + 20);
  ctx.closePath();
  {
    // Lighter peak color: haze makes distant snow appear to bleed into sky
    const g = ctx.createLinearGradient(0, H * 0.15, 0, H * 0.54);
    g.addColorStop(0, "#36526c");
    g.addColorStop(0.4, "#263f56");
    g.addColorStop(1, "#182e42");
    ctx.fillStyle = g;
  }
  ctx.fill();
  ctx.restore();

  // --- Mountain layer 2: mid-range ridge, slight blur ---
  ctx.save();
  ctx.filter = "blur(2px)";
  ctx.beginPath();
  for (let x = -8; x <= W + 8; x++) {
    const n = fbm(x * 0.0038, 500, 7);
    const y = H * 0.62 - n * H * 0.19;
    x === -8 ? ctx.moveTo(x, H + 8) : ctx.lineTo(x, y);
  }
  ctx.lineTo(W + 8, H + 8);
  ctx.closePath();
  {
    const g = ctx.createLinearGradient(0, H * 0.40, 0, H * 0.65);
    g.addColorStop(0, "#234838");
    g.addColorStop(1, "#132c1e");
    ctx.fillStyle = g;
  }
  ctx.fill();
  ctx.restore();

  // --- Mountain layer 3: near ridge, sharp ---
  ctx.beginPath();
  for (let x = -4; x <= W + 4; x++) {
    const n = fbm(x * 0.0055, 900, 6);
    const y = H * 0.72 - n * H * 0.14;
    x === -4 ? ctx.moveTo(x, H + 4) : ctx.lineTo(x, y);
  }
  ctx.lineTo(W + 4, H + 4);
  ctx.closePath();
  {
    const g = ctx.createLinearGradient(0, H * 0.56, 0, H * 0.75);
    g.addColorStop(0, "#1d3c28");
    g.addColorStop(1, "#0e2015");
    ctx.fillStyle = g;
  }
  ctx.fill();

  // --- Background tree layer ---
  ctx.fillStyle = "#0d1e12";
  const bgCount = Math.floor(W / 44);
  for (let i = 0; i < bgCount; i++) {
    const r1 = hash(i * 3.71 + 22);
    const r2 = hash(i * 5.13 + 44);
    const r3 = hash(i * 7.31 + 66);
    const tx = (i + r1 * 0.55 + 0.2) * (W / bgCount);
    const th = H * (0.10 + r2 * 0.07);
    const tw = th * (0.25 + r3 * 0.12);
    drawFir(ctx, tx, H * 0.77, th, tw);
  }

  // --- Foreground tree layer (taller, darker) ---
  ctx.fillStyle = "#091410";
  const fgCount = Math.floor(W / 60);
  for (let i = 0; i < fgCount; i++) {
    const r1 = hash(i * 4.13 + 77);
    const r2 = hash(i * 6.37 + 99);
    const r3 = hash(i * 8.71 + 121);
    const tx = (i + r1 * 0.65 + 0.15) * (W / fgCount);
    const th = H * (0.14 + r2 * 0.09);
    const tw = th * (0.28 + r3 * 0.14);
    drawFir(ctx, tx, H * 0.84, th, tw);
  }
}

// --- Animated fog: soft horizontal gradient bands that drift slowly ---
function drawFog(ctx: CanvasRenderingContext2D, W: number, H: number, t: number) {
  const bands = [
    { cy: 0.595, bh: 0.075, spd: 0.000055, ph: 0.0, alpha: 0.22 },
    { cy: 0.655, bh: 0.060, spd: -0.000038, ph: 2.1, alpha: 0.17 },
    { cy: 0.715, bh: 0.050, spd: 0.000048, ph: 4.2, alpha: 0.14 },
  ];

  for (const b of bands) {
    const drift = Math.sin(t * b.spd + b.ph) * W * 0.07;
    const pulse = 0.72 + 0.28 * Math.sin(t * b.spd * 0.4 + b.ph + 1);
    const a = b.alpha * pulse;
    const bandY = b.cy * H;
    const bandH = b.bh * H;

    const grad = ctx.createLinearGradient(0, bandY - bandH, 0, bandY + bandH);
    grad.addColorStop(0, `rgba(188,214,206,0)`);
    grad.addColorStop(0.35, `rgba(188,214,206,${a})`);
    grad.addColorStop(0.65, `rgba(188,214,206,${a})`);
    grad.addColorStop(1, `rgba(188,214,206,0)`);

    ctx.fillStyle = grad;
    // Extend rect to cover drift movement without edge gap
    ctx.fillRect(drift - W * 0.15, bandY - bandH, W * 1.3, bandH * 2);
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const build = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      sizeRef.current = { w, h };

      // Render heavy static content to an offscreen canvas once
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      drawScene(off.getContext("2d")!, w, h);
      offRef.current = off;
    };

    const frame = (t: number) => {
      const { w, h } = sizeRef.current;
      if (offRef.current) {
        ctx.drawImage(offRef.current, 0, 0); // fast blit
        drawFog(ctx, w, h, t);               // lightweight overlay
      }
      rafRef.current = requestAnimationFrame(frame);
    };

    build();
    rafRef.current = requestAnimationFrame(frame);
    window.addEventListener("resize", build);

    return () => {
      window.removeEventListener("resize", build);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
