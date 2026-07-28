import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Canvas Texture for Animated Code on Laptop Screen
function createCodeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#060a12';
  ctx.fillRect(0, 0, 512, 320);

  // Terminal header bar
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 512, 32);
  ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(20, 16, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(36, 16, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(52, 16, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#94a3b8'; ctx.font = '12px "JetBrains Mono", monospace';
  ctx.fillText('App.jsx — Gokulakumar Portfolio', 70, 20);

  // Code lines
  const lines = [
    'const developer = {',
    '  name: "Gokulakumar",',
    '  role: "Full-Stack MERN Developer",',
    '  stack: ["React", "Node.js", "Express", "MongoDB"],',
    '  location: "Bangalore, India",',
    '  status: "Building Scalable Products",',
    '};',
    '',
    'async function deploy() {',
    '  await database.connect();',
    '  return console.log("🚀 Live on Vercel!");',
    '}',
  ];

  ctx.font = '13px "JetBrains Mono", monospace';
  lines.forEach((line, i) => {
    if (line.includes('const') || line.includes('function') || line.includes('return') || line.includes('await')) {
      ctx.fillStyle = '#34d399';
    } else if (line.includes('"')) {
      ctx.fillStyle = '#38bdf8';
    } else if (line.includes('//') || line.includes('🚀')) {
      ctx.fillStyle = '#a7f3d0';
    } else {
      ctx.fillStyle = '#e2e8f0';
    }
    ctx.fillText(line, 24, 60 + i * 20);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const CodeLaptop = ({ mouse }) => {
  const groupRef = useRef();
  const screenTexture = useMemo(() => createCodeTexture(), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Mouse parallax tracking + gentle float rotation
    const targetX = (mouse.current[0] * Math.PI) / 12;
    const targetY = (mouse.current[1] * Math.PI) / 12;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX + Math.sin(state.clock.elapsedTime * 0.5) * 0.08, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY + Math.cos(state.clock.elapsedTime * 0.4) * 0.05, 0.05);
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.15, 1.15, 1.15]}>
      {/* Base / Keyboard body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.14, 2.2]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Keyboard trackpad area */}
      <mesh position={[0, 0.08, 0.4]}>
        <boxGeometry args={[1.0, 0.02, 0.7]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Keyboard keys area */}
      <mesh position={[0, 0.08, -0.3]}>
        <boxGeometry args={[2.8, 0.02, 1.1]} />
        <meshStandardMaterial color="#0b1120" metalness={0.9} roughness={0.4} />
      </mesh>

      {/* Screen Lid (hinged back at z = -1.1) */}
      <group position={[0, 0.07, -1.1]} rotation={[0.2, 0, 0]}>
        {/* Outer Lid shell */}
        <mesh position={[0, 1.05, 0]}>
          <boxGeometry args={[3.2, 2.1, 0.1]} />
          <meshStandardMaterial color="#0f172a" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Display Screen mesh */}
        <mesh position={[0, 1.05, 0.06]}>
          <planeGeometry args={[3.0, 1.9]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>

        {/* Glowing Screen Rim Light */}
        <pointLight position={[0, 1.05, 0.5]} intensity={1.5} color="#10b981" distance={3} />
      </group>
    </group>
  );
};

// Ambient Orbiting Node / Particle Ring
const FloatingRing = () => {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
      ringRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
      <mesh>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <MeshWobbleMaterial color="#34d399" factor={0.2} speed={1.5} wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

export default function Hero3DCanvas() {
  const mouse = useRef([0, 0]);

  const handlePointerMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouse.current = [
      (e.clientX / innerWidth) * 2 - 1,
      -(e.clientY / innerHeight) * 2 + 1,
    ];
  };

  return (
    <div
      className="relative h-[380px] w-full sm:h-[460px] lg:h-[520px]"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 1, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, -2, -2]} intensity={1.8} color="#10b981" />
        <pointLight position={[4, 4, 2]} intensity={1.5} color="#06b6d4" />

        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
          <CodeLaptop mouse={mouse} />
          <FloatingRing />
        </Float>

        <ContactShadows position={[0, -1.6, 0]} opacity={0.5} scale={8} blur={2.5} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}
