import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const GLYPHS = ['{ }', '</>', '( )', '=>', ';', '[ ]', '0', '1', 'async', 'return', 'const', '===', '&&', 'git push'];

// Deterministic PRNG to ensure strict React 19 render purity
const seededRandom = (s) => {
  const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// Pre-compute floating glyph items statically outside component
const GLYPH_ITEMS = Array.from({ length: 26 }, (_, i) => {
  const text = GLYPHS[i % GLYPHS.length];
  const isBinary = text === '0' || text === '1';
  const r1 = seededRandom(i * 1);
  const r2 = seededRandom(i * 2 + 1);
  const r3 = seededRandom(i * 3 + 2);
  const r4 = seededRandom(i * 4 + 3);
  const r5 = seededRandom(i * 5 + 4);
  const r6 = seededRandom(i * 6 + 5);

  return {
    text,
    pos: [
      (r1 - 0.5) * 16,
      (r2 - 0.5) * 12,
      -2 - r3 * 8,
    ],
    speedY: 0.15 + r4 * 0.25,
    rotSpeed: (r5 - 0.5) * 0.3,
    scale: isBinary ? 0.32 : 0.42 + r6 * 0.25,
    color:
      i % 4 === 0
        ? '#00e5ff' // cyan
        : i % 4 === 1
        ? '#8b5cf6' // violet
        : i % 4 === 2
        ? '#22c55e' // terminal green
        : '#94a3b8', // subtle slate
    opacity: 0.25 + r1 * 0.45,
    seed: r2 * 100,
  };
});

export const FloatingCodeGlyphs = ({ mouse }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;

    groupRef.current.children.forEach((child, i) => {
      const item = GLYPH_ITEMS[i];
      if (!item) return;

      // Gentle vertical floating and subtle oscillation
      child.position.y += Math.sin(time + item.seed) * 0.003 * item.speedY;
      child.position.x += Math.cos(time * 0.5 + item.seed) * 0.002;
      child.rotation.z += item.rotSpeed * delta * 0.2;
    });

    // Parallax reaction to mouse
    groupRef.current.position.x = mouse.current.x * 0.5;
    groupRef.current.position.y = mouse.current.y * 0.4;
  });

  return (
    <group ref={groupRef}>
      {GLYPH_ITEMS.map((item, idx) => (
        <group key={idx} position={item.pos}>
          <Text
            fontSize={item.scale}
            color={item.color}
            anchorX="center"
            anchorY="middle"
            fillOpacity={item.opacity}
            outlineWidth={0.015}
            outlineColor="#05070f"
          >
            {item.text}
          </Text>
        </group>
      ))}
    </group>
  );
};
