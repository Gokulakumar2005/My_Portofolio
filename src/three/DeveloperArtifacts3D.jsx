import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

// 1. React 3D Orbital Atom
const ReactAtom3D = ({ position = [2.2, 1.4, -1.5] }) => {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const core = useRef();

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (ring1.current) ring1.current.rotation.z += delta * 1.2;
    if (ring2.current) ring2.current.rotation.z += delta * 1.5;
    if (ring3.current) ring3.current.rotation.z += delta * 1.3;
    if (core.current) {
      const pulse = 1 + Math.sin(time * 3) * 0.15;
      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={position}>
      {/* Central Nucleus */}
      <mesh ref={core}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={3}
          roughness={0.1}
        />
      </mesh>

      {/* Ring 1 */}
      <group ref={ring1} rotation={[0, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.85, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      {/* Ring 2 */}
      <group ref={ring2} rotation={[Math.PI / 3, 0, Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[0.85, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      {/* Ring 3 */}
      <group ref={ring3} rotation={[-Math.PI / 3, 0, -Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[0.85, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2.5}
          />
        </mesh>
      </group>

      <Text position={[0, -1.15, 0]} fontSize={0.22} color="#00f0ff" anchorX="center" anchorY="middle">
        REACT 19
      </Text>
    </group>
  );
};

// 2. JavaScript 3D Golden Cube
const JSCube3D = ({ position = [3.8, 0.2, -2.5] }) => {
  const cubeRef = useRef();

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.7;
      cubeRef.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <group ref={cubeRef} position={position}>
      <mesh>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.7}
          roughness={0.2}
          emissive="#f59e0b"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[0.92, 0.92, 0.92]} />
        <meshBasicMaterial wireframe color="#fef08a" />
      </mesh>
      <Text position={[0, 0, 0.47]} fontSize={0.42} color="#05070f" anchorX="center" anchorY="middle">
        JS
      </Text>
    </group>
  );
};

// 3. Node.js 3D Hexagonal Prism
const NodeHex3D = ({ position = [-3.8, -1.8, -2.2] }) => {
  const hexRef = useRef();

  useFrame((_, delta) => {
    if (hexRef.current) {
      hexRef.current.rotation.y += delta * 0.6;
      hexRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={hexRef} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.4, 6]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={1.2}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.42, 6]} />
        <meshBasicMaterial wireframe color="#a7f3d0" />
      </mesh>
      <Text position={[0, 0, 0.23]} fontSize={0.24} color="#05070f" anchorX="center" anchorY="middle">
        NODE
      </Text>
    </group>
  );
};

// 4. MongoDB 3-Tier Database Stack
const DatabaseStack3D = ({ position = [-3.5, 1.8, -2.8] }) => {
  const dbRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (dbRef.current) {
      dbRef.current.position.y = 1.8 + Math.sin(time * 0.9) * 0.1;
      dbRef.current.rotation.y = time * 0.4;
    }
  });

  return (
    <group ref={dbRef} position={position}>
      {/* 3 stacked database platters */}
      {[0.5, 0, -0.5].map((y, idx) => (
        <group key={idx} position={[0, y, 0]}>
          <mesh>
            <cylinderGeometry args={[0.65, 0.65, 0.3, 24]} />
            <meshStandardMaterial
              color="#0d1b2a"
              metalness={0.9}
              roughness={0.2}
              emissive="#10b981"
              emissiveIntensity={0.25}
            />
          </mesh>
          <mesh position={[0, 0, 0.66]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={idx === 1 ? '#00f0ff' : '#10b981'} />
          </mesh>
          <mesh position={[0.2, 0, 0.63]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
      ))}
      <Text position={[0, -0.85, 0]} fontSize={0.2} color="#10b981" anchorX="center" anchorY="middle">
        MONGODB
      </Text>
    </group>
  );
};

// 5. Floating Glowing Code Glyphs
const STATIC_GLYPHS = [
  { text: '{ }', pos: [1.2, 2.5, -3], color: '#00f0ff', size: 0.5 },
  { text: '</>', pos: [-2.2, 2.8, -3.5], color: '#ec4899', size: 0.48 },
  { text: '=>', pos: [-1.4, -2.4, -2.5], color: '#f59e0b', size: 0.45 },
  { text: '( )', pos: [3.2, -0.8, -2], color: '#a855f7', size: 0.45 },
  { text: '[ ]', pos: [-4.2, 0.2, -3.2], color: '#10b981', size: 0.42 },
  { text: '0 1', pos: [0.2, -2.8, -4], color: '#00f0ff', size: 0.35 },
  { text: '===', pos: [4.2, 2.0, -3.5], color: '#ec4899', size: 0.38 },
];

const FloatingGlyphs = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (!groupRef.current) return;

    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(time + i * 1.5) * 0.0025;
      child.rotation.z = Math.sin(time * 0.5 + i) * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {STATIC_GLYPHS.map((g, idx) => (
        <group key={idx} position={g.pos}>
          <Text
            fontSize={g.size}
            color={g.color}
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.85}
          >
            {g.text}
          </Text>
        </group>
      ))}
    </group>
  );
};

export const DeveloperArtifacts3D = ({ mouse }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = mouse.current.x * 0.4;
      groupRef.current.position.y = mouse.current.y * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <ReactAtom3D />
      <JSCube3D />
      <NodeHex3D />
      <DatabaseStack3D />
      <FloatingGlyphs />
    </group>
  );
};
