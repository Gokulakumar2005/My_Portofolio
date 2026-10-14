import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const createTechTexture = (tech) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Background circle with glow ring
  ctx.fillStyle = '#080c18';
  ctx.beginPath();
  ctx.arc(128, 128, 116, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = tech.color;
  ctx.lineWidth = 6;
  ctx.shadowColor = tech.color;
  ctx.shadowBlur = 18;
  ctx.stroke();

  // Content Icon
  ctx.fillStyle = tech.color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (tech.name === 'React') {
    // React Atom
    ctx.lineWidth = 4;
    ctx.save();
    ctx.translate(128, 128);
    // Draw 3 ellipses
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(0, 0, 72, 24, (i * Math.PI) / 3, 0, Math.PI * 2);
      ctx.stroke();
    }
    // Nucleus
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  } else if (tech.name === 'Node.js') {
    ctx.font = 'bold 44px "Space Grotesk", sans-serif';
    ctx.fillText('NODE', 128, 110);
    ctx.font = '24px "JetBrains Mono", monospace';
    ctx.fillText('.JS', 128, 155);
  } else if (tech.name === 'MongoDB') {
    ctx.font = 'bold 36px "Space Grotesk", sans-serif';
    ctx.fillText('MONGO', 128, 115);
    ctx.font = 'bold 22px "JetBrains Mono", monospace';
    ctx.fillText('DB', 128, 155);
  } else if (tech.name === 'Express') {
    ctx.font = 'bold 40px "Space Grotesk", sans-serif';
    ctx.fillText('express', 128, 128);
  } else if (tech.name === 'JS') {
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(56, 56, 144, 144);
    ctx.fillStyle = '#05070f';
    ctx.font = '900 84px "Space Grotesk", sans-serif';
    ctx.fillText('JS', 128, 136);
  } else if (tech.name === 'Git') {
    ctx.font = 'bold 48px "Space Grotesk", sans-serif';
    ctx.fillText('GIT', 128, 115);
    // Little branch dot
    ctx.beginPath();
    ctx.arc(128, 160, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  return texture;
};

export const OrbitingTechLogos = () => {
  const groupRef = useRef();

  const techList = useMemo(
    () => [
      { name: 'React', color: '#00e5ff', radius: 4.8, speed: 0.38, phase: 0 },
      { name: 'Node.js', color: '#22c55e', radius: 4.8, speed: 0.38, phase: (Math.PI * 1) / 3 },
      { name: 'MongoDB', color: '#10b981', radius: 4.8, speed: 0.38, phase: (Math.PI * 2) / 3 },
      { name: 'Express', color: '#e2e8f0', radius: 4.8, speed: 0.38, phase: (Math.PI * 3) / 3 },
      { name: 'JS', color: '#f59e0b', radius: 4.8, speed: 0.38, phase: (Math.PI * 4) / 3 },
      { name: 'Git', color: '#f97316', radius: 4.8, speed: 0.38, phase: (Math.PI * 5) / 3 },
    ],
    []
  );

  const textures = useMemo(() => {
    return techList.map((t) => createTechTexture(t));
  }, [techList]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.children.forEach((mesh, idx) => {
      const tech = techList[idx];
      const angle = time * tech.speed + tech.phase;

      // Inclined elliptical orbit around the NetworkGlobe
      const x = Math.cos(angle) * tech.radius + 1.8;
      const z = Math.sin(angle) * tech.radius - 1.0;
      const y = Math.sin(angle * 1.5) * 0.9 - 0.2;

      mesh.position.set(x, y, z);
      // Billboard facing camera
      mesh.quaternion.copy(state.camera.quaternion);
    });
  });

  return (
    <group ref={groupRef}>
      {techList.map((tech, idx) => (
        <mesh key={tech.name}>
          <planeGeometry args={[0.9, 0.9]} />
          <meshBasicMaterial
            map={textures[idx]}
            transparent
            opacity={0.88}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};
