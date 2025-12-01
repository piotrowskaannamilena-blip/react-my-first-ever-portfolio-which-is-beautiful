import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/DotGrid.css";

function hexToRgb(hex) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

const DotGrid = ({ dotSize = 2, gap = 6, baseColor = "#ffd670" , activeColor = "#bb00fff1", proximity = 78 }) => {
  // "#ffd670" "#bb00fff1"
  
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;
    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;
    const extraX = width - gridW;
    const extraY = height - gridH;
    const startX = extraX / 2 + dotSize / 2;
    const startY = extraY / 2 + dotSize / 2;

    const dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const cx = startX + x * cell;
        const cy = startY + y * cell;
        dots.push({ cx, cy, offsetX: 0, offsetY: 0 });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    buildGrid();
    const ro = "ResizeObserver" in window ? new ResizeObserver(buildGrid) : null;
    if (ro) wrapperRef.current && ro.observe(wrapperRef.current);
    else window.addEventListener("resize", buildGrid);
    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", buildGrid);
    };
  }, [buildGrid]);

  useEffect(() => {
    let raf = 0;
    const proxSq = proximity * proximity;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();
      // use last mouse stored on canvas element
      const mx = canvas._mx || -9999;
      const my = canvas._my || -9999;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.offsetX;
        const oy = dot.cy + dot.offsetY;
        const dx = dot.cx - mx;
        const dy = dot.cy - my;
        const dsq = dx * dx + dy * dy;
        let style = `rgb(${baseRgb.r},${baseRgb.g},${baseRgb.b})`;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }
        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.beginPath();
        ctx.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [proximity, baseRgb, activeRgb, dotSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      canvas._mx = e.clientX - rect.left;
      canvas._my = e.clientY - rect.top;
      // small "pulse" offset for dots near mouse
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - canvas._mx, dot.cy - canvas._my);
        if (dist < 120) {
          gsap.to(dot, { offsetX: (dot.cx - canvas._mx) * 0.02, offsetY: (dot.cy - canvas._my) * 0.02, duration: 0.4, ease: "power2.out" });
          gsap.to(dot, { offsetX: 0, offsetY: 0, duration: 0.9, delay: 0.3, ease: "elastic.out(1, .8)" });
        }
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onMove);
    };
  }, []);

  return (
    <section className="dot-grid">
      <div ref={wrapperRef} className="dot-grid__wrap">
        <canvas ref={canvasRef} className="dot-grid__canvas" />
      </div>
    </section>
  );
};

export default DotGrid;