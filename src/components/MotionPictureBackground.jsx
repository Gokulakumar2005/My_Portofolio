import { useEffect, useRef } from 'react';

// Software developer syntax tokens & binary packets for the 4K cascading streams
const CODE_TOKENS = [
  'const { io } = require("socket.io");',
  'await connectMongoDB("cluster-0");',
  'export default function App() {',
  'io.on("connection", (socket) => {',
  'const [state, setState] = useState();',
  'const token = jwt.sign({ id, role });',
  'router.post("/api/bookings", auth);',
  'nodeCron.schedule("*/5 * * * *");',
  'return res.status(200).json({ ok });',
  'ReduxThunk.dispatch(fetchData());',
  'const { lat, lng } = coordinates;',
  '<React.Suspense fallback={null}>',
  '01001101 01000101 01010010 01001110',
  'npm run build:production',
  'status: 200 OK [Latency: 4ms]',
  '{ id: 101, peakPricing: 1.45 }',
  'git push origin main --force-with-lease',
  'const verified = jwt.verify(token);',
  'db.collection("users").aggregate();',
  'cluster.isPrimary ? fork() : worker();',
];

const PALETTE = [
  '#00f0ff', // Vivid Electric Cyan
  '#a855f7', // Electric Violet
  '#10b981', // Terminal Emerald Green
  '#ec4899', // Cyber Pink
  '#38bdf8', // Neon Sky Blue
  '#f59e0b', // Amber Gold
];

export const MotionPictureBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 1. Vertical Code Waterfall Columns
    const colStep = 36;
    const columnCount = Math.floor(width / colStep) + 1;
    const columns = Array.from({ length: columnCount }, (_, i) => ({
      x: i * colStep + 8,
      y: Math.random() * -height * 1.5,
      speed: 1.5 + Math.random() * 2.8,
      tokens: Array.from({ length: 16 }, () => CODE_TOKENS[Math.floor(Math.random() * CODE_TOKENS.length)]),
      color: PALETTE[i % PALETTE.length],
      brightness: 0.65 + Math.random() * 0.35,
    }));

    // 2. Floating Cyber Network Nodes (Connected Nodes)
    const nodeCount = 38;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: 2.5 + Math.random() * 3,
      pulse: Math.random() * Math.PI * 2,
      color: PALETTE[i % PALETTE.length],
    }));

    // 3. Holographic HUD Rings in Background
    let hudRotation = 0;

    let time = 0;

    const render = () => {
      time += 0.016;
      hudRotation += 0.003;

      // Clean transparent clear for vibrant multi-color overlays
      ctx.clearRect(0, 0, width, height);

      // ==============================================================
      // A. HOLOGRAPHIC ROTATING CYBER HUD RINGS (Subtle Developer HUD)
      // ==============================================================
      ctx.save();
      const hudCenterX = width * 0.72;
      const hudCenterY = height * 0.38;
      ctx.translate(hudCenterX, hudCenterY);

      // Outer dashed ring
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, 220, hudRotation, hudRotation + Math.PI * 2);
      ctx.stroke();

      // Middle counter-rotating ring
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
      ctx.lineWidth = 2;
      ctx.setLineDash([20, 8, 4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, 160, -hudRotation * 1.5, -hudRotation * 1.5 + Math.PI * 1.7);
      ctx.stroke();

      // Inner glowing ring
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, 100, hudRotation * 2, hudRotation * 2 + Math.PI * 2);
      ctx.stroke();

      // Telemetry crosshairs
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
      ctx.beginPath();
      ctx.moveTo(-240, 0);
      ctx.lineTo(240, 0);
      ctx.moveTo(0, -240);
      ctx.lineTo(0, 240);
      ctx.stroke();

      // HUD text
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.fillText('CORE: MERN_DEV_ONLINE', 110, -110);
      ctx.fillStyle = 'rgba(168, 85, 247, 0.6)';
      ctx.fillText('SOCKET.IO // 100+ CONN', 110, -95);
      ctx.restore();

      // ==============================================================
      // B. 3D PERSPECTIVE CYBER HORIZON GRID FLOOR (Moving forward)
      // ==============================================================
      const gridY = height * 0.72;
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
      ctx.lineWidth = 1.2;

      // Receding horizontal lines (accelerating towards bottom)
      const gridOffset = (time * 40) % 35;
      for (let i = 0; i < 9; i++) {
        const factor = Math.pow((i + gridOffset / 35) / 9, 2.2);
        const y = gridY + factor * (height - gridY);
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 + factor * 0.28})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Vanishing perspective rays from center horizon
      const horizonCenterX = width * 0.5;
      for (let x = -width * 0.5; x <= width * 1.5; x += 80) {
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.16)';
        ctx.beginPath();
        ctx.moveTo(horizonCenterX, gridY);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.restore();

      // ==============================================================
      // C. CONNECTED CYBER NETWORK NODES & PULSING DATA BEAMS
      // ==============================================================
      // Glowing lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.35;
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Render glowing nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse += 0.05;
        const currentRadius = node.radius + Math.sin(node.pulse) * 1.8;

        // Glowing Aura
        const radGrad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentRadius * 4
        );
        radGrad.addColorStop(0, `${node.color}90`);
        radGrad.addColorStop(1, `${node.color}00`);
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core Point
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // ==============================================================
      // D. VIBRANT MULTI-COLOR 4K CODE CASCADE (RAINBOW DEVELOPER RAIN)
      // ==============================================================
      ctx.font = '12px "JetBrains Mono", monospace';
      columns.forEach((col) => {
        col.y += col.speed;
        if (col.y > height + 300) {
          col.y = -250;
        }

        col.tokens.forEach((token, index) => {
          const charY = col.y - index * 20;
          if (charY > -20 && charY < height + 20) {
            const isHead = index === 0;

            if (isHead) {
              ctx.fillStyle = '#ffffff';
              ctx.shadowColor = col.color;
              ctx.shadowBlur = 12;
              ctx.globalAlpha = 1.0;
            } else {
              ctx.fillStyle = col.color;
              ctx.shadowBlur = 0;
              const fade = Math.max(0.12, (1 - index / col.tokens.length) * col.brightness);
              ctx.globalAlpha = fade;
            }

            ctx.fillText(token, col.x, charY);
          }
        });
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden bg-[#070b22]">
      {/* 4K Procedural Continuous Developer Motion Canvas (Syntax Rain & HUD) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />

      {/* RADIANT MULTI-COLOR VOLUMETRIC AURORAS (VIVID & GLOWING, NEVER PITCH BLACK!) */}
      <div className="absolute -top-32 left-1/4 h-[700px] w-[700px] rounded-full bg-cyan-500/25 blur-[160px] animate-pulse-slow mix-blend-screen" />
      <div className="absolute top-1/3 -right-24 h-[650px] w-[650px] rounded-full bg-purple-600/30 blur-[180px] animate-pulse-slow mix-blend-screen" />
      <div className="absolute -bottom-24 left-1/3 h-[600px] w-[600px] rounded-full bg-emerald-500/25 blur-[160px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-pink-500/25 blur-[160px] mix-blend-screen" />
      <div className="absolute top-1/2 left-10 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[150px] mix-blend-screen" />

      {/* Gentle Non-Intrusive Gradient for Crisp Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06091e]/85 via-transparent to-[#070b22]/70" />
    </div>
  );
};

export default MotionPictureBackground;
