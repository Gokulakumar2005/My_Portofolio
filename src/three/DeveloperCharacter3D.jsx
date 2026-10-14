import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural texture for the primary curved developer monitor
const createPrimaryScreenTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const update = (time) => {
    // Cyber IDE Editor Background
    ctx.fillStyle = '#080d22';
    ctx.fillRect(0, 0, 512, 256);

    // Top Bar
    ctx.fillStyle = '#0f1738';
    ctx.fillRect(0, 0, 512, 30);

    // Window controls
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(16, 15, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(30, 15, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(44, 15, 4, 0, Math.PI * 2);
    ctx.fill();

    // Editor tab
    ctx.fillStyle = '#1e2954';
    ctx.fillRect(60, 4, 140, 26);
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText('Server.jsx - Active', 72, 21);

    // Syntax highlighted code lines
    const code = [
      { num: '1', t: 'const { app, io } = require("./server");', c: '#00f0ff' },
      { num: '2', t: 'io.on("connection", (socket) => {', c: '#a855f7' },
      { num: '3', t: '  console.log("Developer connected: 100+ users");', c: '#10b981' },
      { num: '4', t: '  socket.emit("status", { code: 200, role: "MERN" });', c: '#f59e0b' },
      { num: '5', t: '  socket.on("code:execute", async (job) => {', c: '#ec4899' },
      { num: '6', t: '    await nodeCron.triggerDynamicPricing();', c: '#00f0ff' },
      { num: '7', t: '  });', c: '#a855f7' },
      { num: '8', t: '});', c: '#a855f7' },
    ];

    ctx.font = '11px "JetBrains Mono", monospace';
    code.forEach((item, idx) => {
      const y = 52 + idx * 23;
      ctx.fillStyle = '#475569';
      ctx.fillText(item.num, 12, y);

      ctx.fillStyle = item.c;
      ctx.fillText(item.t, 32, y);

      // Blinking typing cursor on line 6
      if (idx === 5 && Math.sin(time * 6) > 0) {
        ctx.fillStyle = '#00f0ff';
        const textWidth = ctx.measureText(item.t).width;
        ctx.fillRect(34 + textWidth, y - 11, 7, 13);
      }
    });

    // Glowing screen border
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3;
    ctx.strokeRect(1, 1, 510, 254);
  };

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return { texture, update };
};

// Procedural texture for secondary portrait telemetry monitor
const createPortraitScreenTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 384;
  const ctx = canvas.getContext('2d');

  const update = (time) => {
    ctx.fillStyle = '#050a18';
    ctx.fillRect(0, 0, 256, 384);

    // Title
    ctx.fillStyle = '#0e1832';
    ctx.fillRect(0, 0, 256, 28);
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    ctx.fillText('bash - telemetry: ~', 12, 18);

    const logs = [
      '>> MERN Cluster: Online',
      '>> Socket.IO: 100+ active',
      '>> MongoDB: Connected',
      '>> JWT Auth: Verified',
      '>> Dynamic Tariff: OK',
      '>> Build status: 200 OK',
      '>> Latency: 4ms',
      '>> CPU: 24% | RAM: 1.2GB',
      '>> Next.js 15: Ready',
    ];

    ctx.font = '10px "JetBrains Mono", monospace';
    logs.forEach((log, idx) => {
      const y = 50 + idx * 24;
      ctx.fillStyle = idx % 2 === 0 ? '#00f0ff' : '#10b981';
      ctx.fillText(log, 12, y);
    });

    // Dynamic wave monitor at bottom
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < 240; x += 6) {
      const y = 320 + Math.sin(time * 4 + x * 0.08) * 18;
      if (x === 0) ctx.moveTo(10 + x, y);
      else ctx.lineTo(10 + x, y);
    }
    ctx.stroke();

    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, 254, 382);
  };

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return { texture, update };
};

const STATIC_PRIMARY_SCREEN = createPrimaryScreenTexture();
const STATIC_PORTRAIT_SCREEN = createPortraitScreenTexture();

export const DeveloperCharacter3D = ({ mouse }) => {
  const rootGroupRef = useRef();
  const leftHandRef = useRef();
  const rightHandRef = useRef();
  const headRef = useRef();
  const keyboardGlowRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Update screen textures
    STATIC_PRIMARY_SCREEN.update(time);
    STATIC_PRIMARY_SCREEN.texture.needsUpdate = true;

    STATIC_PORTRAIT_SCREEN.update(time);
    STATIC_PORTRAIT_SCREEN.texture.needsUpdate = true;

    // Subtle breathing / posture movement
    if (rootGroupRef.current) {
      rootGroupRef.current.position.y = -1.2 + Math.sin(time * 1.2) * 0.03;
      rootGroupRef.current.rotation.y = (mouse.current.x * 0.15);
    }

    // Natural head nodding & tracking
    if (headRef.current) {
      headRef.current.rotation.y = (mouse.current.x * 0.25);
      headRef.current.rotation.x = -0.15 + (mouse.current.y * 0.1) + Math.sin(time * 2.5) * 0.03;
    }

    // Active typing animations on keyboard
    if (leftHandRef.current) {
      leftHandRef.current.position.y = -0.1 + Math.sin(time * 16) * 0.025;
      leftHandRef.current.position.x = -0.28 + Math.cos(time * 12) * 0.015;
    }
    if (rightHandRef.current) {
      rightHandRef.current.position.y = -0.1 + Math.sin(time * 18 + 1) * 0.025;
      rightHandRef.current.position.x = 0.28 + Math.cos(time * 14) * 0.015;
    }

    // Keyboard RGB backlight wave
    if (keyboardGlowRef.current) {
      keyboardGlowRef.current.intensity = 1.2 + Math.sin(time * 5) * 0.4;
    }
  });

  return (
    <group ref={rootGroupRef} position={[0, -1.2, -1.8]}>
      {/* ============================================================== */}
      {/* 1. FUTURISTIC ERGONOMIC CHAIR                                  */}
      {/* ============================================================== */}
      <group position={[0, 0, 0.4]}>
        {/* Star Base & Casters */}
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.06, 5]} />
          <meshStandardMaterial color="#0c1228" metalness={0.9} roughness={0.3} />
        </mesh>
        {/* Central hydraulic lift pole */}
        <mesh position={[0, -0.55, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.65, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.1} />
        </mesh>
        {/* Seat Cushion */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.85, 0.12, 0.85]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Backrest with ergonomic curve */}
        <mesh position={[0, 0.4, 0.38]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.75, 1.05, 0.12]} />
          <meshStandardMaterial color="#0c1328" roughness={0.5} />
        </mesh>
        {/* Glowing cyber stripe down chair back */}
        <mesh position={[0, 0.4, 0.45]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.1, 0.95, 0.02]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
        {/* Headrest */}
        <mesh position={[0, 1.02, 0.45]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.42, 0.22, 0.1]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
        {/* Left & Right Armrests */}
        <mesh position={[-0.45, 0.08, 0.1]}>
          <boxGeometry args={[0.1, 0.35, 0.5]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.45, 0.08, 0.1]}>
          <boxGeometry args={[0.1, 0.35, 0.5]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* ============================================================== */}
      {/* 2. DEVELOPER CHARACTER (TORSO, HEAD, HEADSET, ARMS & HANDS)     */}
      {/* ============================================================== */}
      <group position={[0, 0, 0.35]}>
        {/* Torso / Developer Hoodie */}
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.68, 0.72, 0.45]} />
          <meshStandardMaterial
            color="#141a33"
            roughness={0.8}
            emissive="#00f0ff"
            emissiveIntensity={0.06}
          />
        </mesh>

        {/* Hoodie Glowing Cyan Seam Line */}
        <mesh position={[0, 0.22, -0.23]}>
          <boxGeometry args={[0.04, 0.65, 0.02]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* Head with Headset */}
        <group ref={headRef} position={[0, 0.78, 0]}>
          {/* Head */}
          <mesh>
            <sphereGeometry args={[0.23, 24, 24]} />
            <meshStandardMaterial color="#334155" roughness={0.6} />
          </mesh>

          {/* Glowing Visor / Glasses */}
          <mesh position={[0, 0.04, -0.2]}>
            <boxGeometry args={[0.32, 0.1, 0.08]} />
            <meshStandardMaterial
              color="#00f0ff"
              emissive="#00f0ff"
              emissiveIntensity={2.5}
              roughness={0.1}
            />
          </mesh>

          {/* Developer Headset / Headphones Band */}
          <mesh position={[0, 0.16, 0]}>
            <torusGeometry args={[0.26, 0.035, 12, 32, Math.PI]} />
            <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Headset Earcups (Left & Right Glowing RGB) */}
          <mesh position={[-0.26, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.07, 16]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.8} />
          </mesh>
          <mesh position={[0.26, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.07, 16]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.8} />
          </mesh>
        </group>

        {/* Shoulders & Upper Arms */}
        {/* Left Arm */}
        <mesh position={[-0.42, 0.2, -0.1]} rotation={[0.55, 0.1, -0.2]}>
          <cylinderGeometry args={[0.08, 0.07, 0.48, 12]} />
          <meshStandardMaterial color="#141a33" roughness={0.8} />
        </mesh>
        {/* Right Arm */}
        <mesh position={[0.42, 0.2, -0.1]} rotation={[0.55, -0.1, 0.2]}>
          <cylinderGeometry args={[0.08, 0.07, 0.48, 12]} />
          <meshStandardMaterial color="#141a33" roughness={0.8} />
        </mesh>

        {/* Forearms pointing towards keyboard */}
        <mesh position={[-0.32, -0.02, -0.32]} rotation={[1.1, 0.3, -0.2]}>
          <cylinderGeometry args={[0.065, 0.06, 0.42, 12]} />
          <meshStandardMaterial color="#141a33" roughness={0.8} />
        </mesh>
        <mesh position={[0.32, -0.02, -0.32]} rotation={[1.1, -0.3, 0.2]}>
          <cylinderGeometry args={[0.065, 0.06, 0.42, 12]} />
          <meshStandardMaterial color="#141a33" roughness={0.8} />
        </mesh>

        {/* Animated Hands on Keyboard */}
        <group ref={leftHandRef} position={[-0.26, -0.1, -0.56]}>
          <mesh>
            <boxGeometry args={[0.13, 0.05, 0.14]} />
            <meshStandardMaterial color="#334155" roughness={0.7} />
          </mesh>
        </group>
        <group ref={rightHandRef} position={[0.26, -0.1, -0.56]}>
          <mesh>
            <boxGeometry args={[0.13, 0.05, 0.14]} />
            <meshStandardMaterial color="#334155" roughness={0.7} />
          </mesh>
        </group>
      </group>

      {/* ============================================================== */}
      {/* 3. FUTURISTIC DEVELOPER DESK & RGB HARDWARE                    */}
      {/* ============================================================== */}
      <group position={[0, -0.18, -0.65]}>
        {/* Desk Surface (Curved front) */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.08, 1.1]} />
          <meshStandardMaterial
            color="#0b1026"
            metalness={0.7}
            roughness={0.25}
            emissive="#00f0ff"
            emissiveIntensity={0.08}
          />
        </mesh>
        {/* Glowing RGB Edge on Front of Desk */}
        <mesh position={[0, 0, 0.55]}>
          <boxGeometry args={[2.52, 0.04, 0.03]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>

        {/* Desk Sturdy Metal Frame / Legs */}
        <mesh position={[-1.15, -0.45, 0]}>
          <boxGeometry args={[0.08, 0.85, 0.9]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[1.15, -0.45, 0]}>
          <boxGeometry args={[0.08, 0.85, 0.9]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Large Cyber Desk Mat */}
        <mesh position={[0, 0.045, 0.08]}>
          <boxGeometry args={[1.5, 0.01, 0.65]} />
          <meshStandardMaterial color="#070b1a" roughness={0.9} />
        </mesh>

        {/* Mechanical RGB Keyboard */}
        <mesh position={[0, 0.065, 0.12]}>
          <boxGeometry args={[0.82, 0.03, 0.28]} />
          <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Animated Keyboard Keycaps with RGB Underglow */}
        <mesh position={[0, 0.085, 0.12]}>
          <boxGeometry args={[0.78, 0.018, 0.24]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={1.4}
            roughness={0.2}
          />
        </mesh>
        <pointLight
          ref={keyboardGlowRef}
          position={[0, 0.2, 0.12]}
          color="#00f0ff"
          intensity={1.2}
          distance={1.2}
        />

        {/* Gaming Mouse & Mousepad */}
        <mesh position={[0.55, 0.065, 0.12]}>
          <boxGeometry args={[0.1, 0.04, 0.16]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#a855f7"
            emissiveIntensity={0.8}
            metalness={0.6}
          />
        </mesh>

        {/* Developer Cyber Coffee Mug with Steam */}
        <group position={[-0.9, 0.12, 0.15]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.08, 0.16, 16]} />
            <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
          </mesh>
          {/* Neon Logo on Mug */}
          <mesh position={[0, 0, 0.085]}>
            <planeGeometry args={[0.08, 0.08]} />
            <meshBasicMaterial color="#10b981" />
          </mesh>
        </group>
      </group>

      {/* ============================================================== */}
      {/* 4. DUAL CURVED HIGH-TECH CODING MONITORS                       */}
      {/* ============================================================== */}
      <group position={[0, 0.52, -1.1]}>
        {/* Central Ultrawide Screen Stand */}
        <mesh position={[0, -0.4, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.75, 0]}>
          <boxGeometry args={[0.45, 0.03, 0.35]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* PRIMARY ULTRAWIDE MONITOR (CENTER) */}
        <group position={[0, 0.2, 0]} rotation={[0.05, 0, 0]}>
          {/* Monitor Casing */}
          <mesh position={[0, 0, -0.03]}>
            <boxGeometry args={[2.0, 1.05, 0.06]} />
            <meshStandardMaterial color="#070c1e" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Screen Display */}
          <mesh>
            <planeGeometry args={[1.96, 1.01]} />
            <meshBasicMaterial map={STATIC_PRIMARY_SCREEN.texture} side={THREE.DoubleSide} />
          </mesh>
          {/* Ambient Screen Light Illuminating the Developer */}
          <pointLight position={[0, 0, 0.3]} color="#00f0ff" intensity={1.8} distance={2.5} />
        </group>

        {/* SECONDARY PORTRAIT TERMINAL MONITOR (ANGLED LEFT) */}
        <group position={[-1.28, 0.25, 0.18]} rotation={[0.05, 0.45, 0]}>
          <mesh position={[0, 0, -0.03]}>
            <boxGeometry args={[0.78, 1.15, 0.06]} />
            <meshStandardMaterial color="#070c1e" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh>
            <planeGeometry args={[0.74, 1.11]} />
            <meshBasicMaterial map={STATIC_PORTRAIT_SCREEN.texture} side={THREE.DoubleSide} />
          </mesh>
          <pointLight position={[0, 0, 0.2]} color="#a855f7" intensity={1.5} distance={2.0} />
        </group>
      </group>
    </group>
  );
};

export default DeveloperCharacter3D;
