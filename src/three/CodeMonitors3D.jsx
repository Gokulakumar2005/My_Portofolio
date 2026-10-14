import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural HTML5 canvas texture rendering an animated VS Code editor in vibrant colors
const createEditorTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 340;
  const ctx = canvas.getContext('2d');

  const update = (time) => {
    // Editor Background
    ctx.fillStyle = '#0a0f1e';
    ctx.fillRect(0, 0, 512, 340);

    // Title bar
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 36);

    // Window controls
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(20, 18, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(36, 18, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(52, 18, 5, 0, Math.PI * 2);
    ctx.fill();

    // Tab
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(70, 6, 160, 30);
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 12px "JetBrains Mono", monospace';
    ctx.fillText('App.jsx - React 19', 85, 25);

    // Sidebar line
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(35, 36);
    ctx.lineTo(35, 340);
    ctx.stroke();

    // Code lines with line numbers & colorful syntax highlighting
    const codeLines = [
      { num: '1', tokens: [{ t: 'import', c: '#a855f7' }, { t: ' React, { useState } ', c: '#f8fafc' }, { t: 'from', c: '#a855f7' }, { t: " 'react';", c: '#10b981' }] },
      { num: '2', tokens: [{ t: 'import', c: '#a855f7' }, { t: ' { connectDB } ', c: '#f8fafc' }, { t: 'from', c: '#a855f7' }, { t: " './config/db';", c: '#10b981' }] },
      { num: '3', tokens: [{ t: '', c: '#f8fafc' }] },
      { num: '4', tokens: [{ t: 'export', c: '#a855f7' }, { t: ' const ', c: '#00f0ff' }, { t: 'initAPI', c: '#f59e0b' }, { t: ' = ', c: '#f8fafc' }, { t: 'async', c: '#00f0ff' }, { t: ' () => {', c: '#f8fafc' }] },
      { num: '5', tokens: [{ t: '  const', c: '#00f0ff' }, { t: ' db = ', c: '#f8fafc' }, { t: 'await', c: '#a855f7' }, { t: ' connectDB();', c: '#f59e0b' }] },
      { num: '6', tokens: [{ t: '  const', c: '#00f0ff' }, { t: ' cluster = ', c: '#f8fafc' }, { t: '"MERN-BLR-01"', c: '#10b981' }, { t: ';', c: '#f8fafc' }] },
      { num: '7', tokens: [{ t: '  console.', c: '#f8fafc' }, { t: 'log', c: '#f59e0b' }, { t: '(`Online: ${cluster}`);', c: '#10b981' }] },
      { num: '8', tokens: [{ t: '  return', c: '#ec4899' }, { t: ' { status: ', c: '#f8fafc' }, { t: '200', c: '#f59e0b' }, { t: ', active: ', c: '#f8fafc' }, { t: 'true', c: '#00f0ff' }, { t: ' };', c: '#f8fafc' }] },
      { num: '9', tokens: [{ t: '};', c: '#f8fafc' }] },
    ];

    ctx.font = '12px "JetBrains Mono", monospace';
    const yStart = 62;
    const lineHeight = 24;

    codeLines.forEach((line, index) => {
      const y = yStart + index * lineHeight;
      // Line number
      ctx.fillStyle = '#475569';
      ctx.fillText(line.num, 14, y);

      // Tokens
      let x = 48;
      line.tokens.forEach((token) => {
        ctx.fillStyle = token.c;
        ctx.fillText(token.t, x, y);
        x += ctx.measureText(token.t).width;
      });

      // Animated cursor on line 8
      if (index === 7) {
        if (Math.sin(time * 5) > 0) {
          ctx.fillStyle = '#00f0ff';
          ctx.fillRect(x + 4, y - 12, 7, 15);
        }
      }
    });

    // Glowing border around editor
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3;
    ctx.strokeRect(1, 1, 510, 338);
  };

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return { texture, update };
};

// Procedural HTML5 canvas texture rendering an animated Terminal console
const createTerminalTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 440;
  canvas.height = 280;
  const ctx = canvas.getContext('2d');

  const update = (time) => {
    ctx.fillStyle = '#060a16';
    ctx.fillRect(0, 0, 440, 280);

    // Header
    ctx.fillStyle = '#0e1628';
    ctx.fillRect(0, 0, 440, 32);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText('bash - terminal@gokul-portfolio: ~', 16, 21);

    const logs = [
      { prompt: '$', text: ' node server.js', color: '#f8fafc' },
      { prompt: '>', text: ' [MERN Stack] Environment: Production', color: '#00f0ff' },
      { prompt: '>', text: ' [MongoDB] Connected to cluster: 2.4ms', color: '#10b981' },
      { prompt: '>', text: ' [JWT] Auth Guard enabled: 256-bit', color: '#a855f7' },
      { prompt: '>', text: ' [Express] REST API listening on :5000', color: '#f59e0b' },
      { prompt: '>', text: ' [Vite 8] HMR connected: ready', color: '#ec4899' },
    ];

    const yStart = 60;
    const lineHeight = 28;

    logs.forEach((log, index) => {
      const y = yStart + index * lineHeight;
      ctx.fillStyle = '#00f0ff';
      ctx.fillText(log.prompt, 16, y);
      ctx.fillStyle = log.color;
      ctx.fillText(log.text, 32, y);
    });

    // Blinking prompt
    const curY = yStart + logs.length * lineHeight;
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('$', 16, curY);
    if (Math.sin(time * 6) > 0) {
      ctx.fillStyle = '#10b981';
      ctx.fillRect(32, curY - 11, 8, 14);
    }

    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, 438, 278);
  };

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  return { texture, update };
};

// Module-level static texture instances (clean separation from React component lifecycle)
const STATIC_EDITOR = createEditorTexture();
const STATIC_TERMINAL = createTerminalTexture();

export const CodeMonitors3D = ({ mouse }) => {
  const editorGroupRef = useRef();
  const terminalGroupRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Update static canvas textures
    STATIC_EDITOR.update(time);
    STATIC_EDITOR.texture.needsUpdate = true;

    STATIC_TERMINAL.update(time);
    STATIC_TERMINAL.texture.needsUpdate = true;

    // Gentle floating oscillations
    if (editorGroupRef.current) {
      editorGroupRef.current.position.y = 0.5 + Math.sin(time * 0.8) * 0.12;
      editorGroupRef.current.rotation.y = -0.25 + (mouse.current.x * 0.15);
      editorGroupRef.current.rotation.x = Math.sin(time * 0.5) * 0.05 + (mouse.current.y * 0.1);
    }

    if (terminalGroupRef.current) {
      terminalGroupRef.current.position.y = -1.6 + Math.cos(time * 0.7) * 0.12;
      terminalGroupRef.current.rotation.y = 0.35 + (mouse.current.x * 0.15);
      terminalGroupRef.current.rotation.x = -Math.cos(time * 0.5) * 0.05 + (mouse.current.y * 0.1);
    }
  });

  return (
    <group>
      {/* Primary Code Editor 3D Display (Angled Left/Center) */}
      <group ref={editorGroupRef} position={[-2.4, 0.5, -2]}>
        {/* Screen Stand & Backplate */}
        <mesh position={[0, 0, -0.06]}>
          <boxGeometry args={[4.2, 2.8, 0.08]} />
          <meshStandardMaterial
            color="#080e1c"
            metalness={0.8}
            roughness={0.2}
            emissive="#00f0ff"
            emissiveIntensity={0.15}
          />
        </mesh>
        {/* Live Screen Surface */}
        <mesh>
          <planeGeometry args={[4.1, 2.7]} />
          <meshBasicMaterial map={STATIC_EDITOR.texture} side={THREE.DoubleSide} />
        </mesh>
      </group>

      {/* Secondary Terminal 3D Display (Angled Right/Down) */}
      <group ref={terminalGroupRef} position={[2.6, -1.6, -2.5]}>
        {/* Terminal Stand & Backplate */}
        <mesh position={[0, 0, -0.06]}>
          <boxGeometry args={[3.6, 2.4, 0.08]} />
          <meshStandardMaterial
            color="#080e1c"
            metalness={0.8}
            roughness={0.2}
            emissive="#a855f7"
            emissiveIntensity={0.15}
          />
        </mesh>
        {/* Live Screen Surface */}
        <mesh>
          <planeGeometry args={[3.5, 2.3]} />
          <meshBasicMaterial map={STATIC_TERMINAL.texture} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};
