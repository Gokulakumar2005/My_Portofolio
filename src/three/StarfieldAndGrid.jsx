import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Deterministic PRNG for React 19 render purity
const seededRandom = (s) => {
  const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// Generate static starfield positions & colors outside render
const PARTICLE_COUNT = 350;
const STATIC_POSITIONS = new Float32Array(PARTICLE_COUNT * 3);
const STATIC_COLORS = new Float32Array(PARTICLE_COUNT * 3);

const PALETTE = [
  new THREE.Color('#00e5ff'), // cyan
  new THREE.Color('#8b5cf6'), // violet
  new THREE.Color('#22c55e'), // terminal green
  new THREE.Color('#94a3b8'), // slate
];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const r1 = seededRandom(i * 3);
  const r2 = seededRandom(i * 3 + 1);
  const r3 = seededRandom(i * 3 + 2);
  const r4 = seededRandom(i * 3 + 3);

  STATIC_POSITIONS[i * 3] = (r1 - 0.5) * 36;
  STATIC_POSITIONS[i * 3 + 1] = (r2 - 0.5) * 28;
  STATIC_POSITIONS[i * 3 + 2] = -15 + r3 * 22;

  const chosenColor = PALETTE[Math.floor(r4 * PALETTE.length)];
  STATIC_COLORS[i * 3] = chosenColor.r;
  STATIC_COLORS[i * 3 + 1] = chosenColor.g;
  STATIC_COLORS[i * 3 + 2] = chosenColor.b;
}

export const StarfieldAndGrid = () => {
  const pointsRef = useRef();
  const gridRef = useRef();

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
    if (gridRef.current) {
      // Endless grid drift
      gridRef.current.position.z = (gridRef.current.position.z + delta * 0.8) % 2;
    }
  });

  return (
    <group>
      {/* Code-Colored Starfield Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[STATIC_POSITIONS, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[STATIC_COLORS, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Cyber Digital Grid Floor */}
      <group position={[0, -5, -4]} rotation={[-Math.PI / 2.3, 0, 0]}>
        <gridHelper
          ref={gridRef}
          args={[60, 40, '#00e5ff', '#141d36']}
          position={[0, 0, 0]}
        >
          <lineBasicMaterial
            attach="material"
            color="#00e5ff"
            transparent
            opacity={0.15}
          />
        </gridHelper>
      </group>
    </group>
  );
};
