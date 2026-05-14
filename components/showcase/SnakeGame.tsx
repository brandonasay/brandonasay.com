"use client";

import { useEffect, useRef, useState } from "react";

const COLS = 20;
const ROWS = 20;
const CELL = 20;

type Point = { x: number; y: number };

function randomFood(snake: Point[]): Point {
  let food: Point;
  do {
    food = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}

function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
  ctx.fill();
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    snake: [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ],
    dir: { dx: 1, dy: 0 },
    nextDir: { dx: 1, dy: 0 },
    food: { x: 15, y: 10 },
    score: 0,
    running: false,
    gameOver: false,
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, COLS * CELL, ROWS * CELL);

    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * CELL, 0);
      ctx.lineTo(x * CELL, ROWS * CELL);
      ctx.stroke();
    }
    for (let y = 0; y <= ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * CELL);
      ctx.lineTo(COLS * CELL, y * CELL);
      ctx.stroke();
    }

    ctx.fillStyle = "#f87171";
    ctx.beginPath();
    ctx.arc(
      s.food.x * CELL + CELL / 2,
      s.food.y * CELL + CELL / 2,
      CELL / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    s.snake.forEach((seg, i) => {
      ctx.fillStyle = i === 0 ? "#8aaf9f" : "#6b9a89";
      drawRoundRect(ctx, seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, 3);
    });
  };

  const tick = () => {
    const s = stateRef.current;
    if (!s.running) return;

    s.dir = s.nextDir;
    const head = s.snake[0];
    const newHead = { x: head.x + s.dir.dx, y: head.y + s.dir.dy };

    if (
      newHead.x < 0 ||
      newHead.x >= COLS ||
      newHead.y < 0 ||
      newHead.y >= ROWS ||
      s.snake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
    ) {
      s.running = false;
      s.gameOver = true;
      setGameOver(true);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const ate = newHead.x === s.food.x && newHead.y === s.food.y;
    if (ate) {
      s.snake = [newHead, ...s.snake];
      s.food = randomFood(s.snake);
      s.score += 10;
      setScore(s.score);
    } else {
      s.snake = [newHead, ...s.snake.slice(0, -1)];
    }

    draw();
  };

  const start = () => {
    const s = stateRef.current;
    s.snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    s.dir = { dx: 1, dy: 0 };
    s.nextDir = { dx: 1, dy: 0 };
    s.food = randomFood(s.snake);
    s.score = 0;
    s.running = true;
    s.gameOver = false;
    setScore(0);
    setGameOver(false);
    setStarted(true);

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(tick, 130);
    draw();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const s = stateRef.current;
      if (!s.running) return;
      const d = s.dir;
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (d.dy !== 1) s.nextDir = { dx: 0, dy: -1 };
          e.preventDefault();
          break;
        case "ArrowDown":
        case "s":
          if (d.dy !== -1) s.nextDir = { dx: 0, dy: 1 };
          e.preventDefault();
          break;
        case "ArrowLeft":
        case "a":
          if (d.dx !== 1) s.nextDir = { dx: -1, dy: 0 };
          e.preventDefault();
          break;
        case "ArrowRight":
        case "d":
          if (d.dx !== -1) s.nextDir = { dx: 1, dy: 0 };
          e.preventDefault();
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    draw();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mobileMove = (dx: number, dy: number) => {
    const s = stateRef.current;
    if (!s.running) return;
    if (dx !== 0 && s.dir.dx === -dx) return;
    if (dy !== 0 && s.dir.dy === -dy) return;
    s.nextDir = { dx, dy };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full max-w-[400px]">
        <p className="text-zinc-400 text-sm">
          Score:{" "}
          <span className="text-[#8aaf9f] font-mono font-bold">{score}</span>
        </p>
        <p className="text-zinc-500 text-xs hidden sm:block">
          Arrow keys / WASD
        </p>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={COLS * CELL}
          height={ROWS * CELL}
          className="rounded-lg border border-white/10"
        />

        {(!started || gameOver) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/80">
            {gameOver && (
              <p className="text-white text-2xl font-bold mb-1">Game Over</p>
            )}
            {gameOver && (
              <p className="text-zinc-400 text-sm mb-6">Score: {score}</p>
            )}
            <button
              onClick={start}
              className="px-6 py-2.5 rounded-full bg-[#8aaf9f] text-[#091a10] font-semibold hover:bg-[#9bbfb0] transition-colors"
            >
              {gameOver ? "Play Again" : "Start Game"}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 sm:hidden">
        <button
          onClick={() => mobileMove(0, -1)}
          className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white"
        >
          ↑
        </button>
        <div className="flex gap-1">
          <button
            onClick={() => mobileMove(-1, 0)}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white"
          >
            ←
          </button>
          <button
            onClick={() => mobileMove(0, 1)}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white"
          >
            ↓
          </button>
          <button
            onClick={() => mobileMove(1, 0)}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
