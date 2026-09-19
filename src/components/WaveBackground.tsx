import { useEffect, useRef } from "react";

interface Vertex {
  x: number;
  y: number;
  z: number;
}

interface Projected {
  x: number;
  y: number;
  scale: number;
}

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, isActive: true };
    };
    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const GRID_SIZE = 20;
    const PERSPECTIVE = 800;

    const project = (vertex: Vertex, centerX: number, centerY: number): Projected => {
      const scale = PERSPECTIVE / (PERSPECTIVE + vertex.z);
      return {
        x: (vertex.x - centerX) * scale + centerX,
        y: (vertex.y - centerY) * scale + centerY,
        scale,
      };
    };

    const computeZ = (x: number, y: number, time: number): number => {
      const wavePhase = y * 0.008 + time * 1.5;
      let z = Math.sin(wavePhase) * 180;

      const depthFactor = (x / canvas.width) * 2;
      z *= 0.5 + depthFactor;

      z += Math.sin(y * 0.012 - time * 1.2) * 100 * (0.3 + depthFactor);

      const swellProgress = (time * 30 + y) % (canvas.height * 1.5);
      const distanceFromSwell = Math.abs(swellProgress - y);
      const swellInfluence = Math.max(0, 1 - distanceFromSwell / 600);
      z += Math.sin(y * 0.005 + time * 0.8) * 250 * swellInfluence * depthFactor;

      z += Math.sin(y * 0.02 + x * 0.01 + time * 2) * 40;

      const mouse = mouseRef.current;
      if (mouse.isActive) {
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = Math.max(0, 1 - distanceToMouse / 300);
        if (mouseInfluence > 0) {
          const rippleStrength = Math.sin(distanceToMouse * 0.05 - time * 5) * 80;
          z += rippleStrength * mouseInfluence;
        }
      }

      return z;
    };

    const animate = () => {
      time += 0.01;
      const { width, height } = canvas;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Build vertex grid
      const cols = Math.ceil(width / GRID_SIZE) + 1;
      const rows = Math.ceil(height / GRID_SIZE) + 1;

      const vertices: Vertex[][] = [];
      for (let row = 0; row < rows; row++) {
        const rowVertices: Vertex[] = [];
        const y = row * GRID_SIZE;
        for (let col = 0; col < cols; col++) {
          const x = col * GRID_SIZE;
          rowVertices.push({ x, y, z: computeZ(x, y, time) });
        }
        vertices.push(rowVertices);
      }

      const projected: Projected[][] = vertices.map((row) =>
        row.map((v) => project(v, centerX, centerY)),
      );

      const depthOpacity = (z: number) => {
        const t = Math.max(0, Math.min(1, (z + 250) / 500));
        return 0.3 + t * 0.7;
      };

      // Wireframe is tinted toward the brand accent (rgb 150,159,255 ~=
      // oklch(74% 0.15 278)) so it reads as one system with the gradient
      // wash layered on top, in both Hero and Contact.
      const LINE_RGB = "150,159,255";

      // Vertical lines (wavy — follow wave shape)
      for (let col = 0; col < cols; col++) {
        ctx.beginPath();
        for (let row = 0; row < rows; row++) {
          const p = projected[row][col];
          if (row === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        const midRow = Math.floor(rows / 2);
        const opacity = depthOpacity(vertices[midRow][col].z);
        ctx.strokeStyle = `rgba(${LINE_RGB},${0.1 * opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Horizontal lines (straight — connect columns)
      for (let row = 0; row < rows; row++) {
        ctx.beginPath();
        for (let col = 0; col < cols; col++) {
          const p = projected[row][col];
          if (col === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        const midCol = Math.floor(cols / 2);
        const opacity = depthOpacity(vertices[row][midCol].z);
        ctx.strokeStyle = `rgba(${LINE_RGB},${0.1 * opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Diagonal lines (split squares into triangles)
      ctx.lineWidth = 1.5;
      for (let row = 0; row < rows - 1; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const a = projected[row][col];
          const d = projected[row + 1][col + 1];
          const opacity = depthOpacity(vertices[row][col].z);
          ctx.strokeStyle = `rgba(${LINE_RGB},${0.1 * opacity})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(d.x, d.y);
          ctx.stroke();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
