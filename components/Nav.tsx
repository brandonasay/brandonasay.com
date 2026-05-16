"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-sm border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
      </div>
    </nav>
  );
}
