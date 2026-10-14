import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Deterministic PRNG for React 19 render purity
const seededRandom = (s) => {
  const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// Generate static geometry vertices & edges outside render
const geo = new THREE.IcosahedronGeometry(2.8, 1);
const pos = geo.attributes.position;
const STATIC_VERTICES = [];
const STATIC_EDGES = [];

for (let i = 0; i < pos.count; i++) {
  const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
  if (!STATIC_VERTICES.some((existing) => existing.distanceTo(v) < 0.1)) {
    STATIC_VERTICES.push(v);
  }
}

for (let i = 0; i < STATIC_VERTICES.length; i++) {
  for (let j = i + 1; j < STATIC_VERTICES.length; j++) {
    if (STATIC_VERTICES[i].distanceTo(STATIC_VERTICES[j]) < 2.2) {
      STATIC_EDGES.push({ start: STATIC_VERTICES[i], end: STATIC_VERTICES[j] });
    }
  }
}

const PACKET_COUNT = 14;
const STATIC_PACKETS = Array.from({ length: PACKET_COUNT }, (_, i) => {
  const r1 = seededRandom(i * 1.7);
  const r2 = seededRandom(i * 2.3 + 1);
  const r3 = seededRandom(i * 3.1 + 2);
  const r4 = seededRandom(i * 4.9 + 3);

  return {
    edgeIndex: Math.floor(r1 * (STATIC_EDGES.length || 1)),
    progress: r2,
    speed: 0.15 + r3 * 0.25,
    color: r4 > 0.5 ? '#00e5ff' : '#8b5cf6',
  };
});

export const NetworkGlobe = ({ mouse, scrollOffset }) => {
  const groupRef = useRef();
  const innerRef = useRef();
  const packetsRef = useRef();

  // Create mutable packet states for frame-by-frame updates
  const activePackets = useMemo(() => {
    return STATIC_PACKETS.map((p) => ({ ...p }));
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Base rotation + scroll-influenced velocity
    const scrollFactor = scrollOffset.current || 0;
    groupRef.current.rotation.y += delta * 0.22 + scrollFactor * 0.005;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + (mouse.current.y * 0.2);
    groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1 + (mouse.current.x * 0.2);

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.35;
      innerRef.current.rotation.x -= delta * 0.15;
    }

    // Update travelling packets along edge vectors
    if (packetsRef.current && STATIC_EDGES.length > 0) {
      activePackets.forEach((pkt, i) => {
        pkt.progress += delta * pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          pkt.edgeIndex = (pkt.edgeIndex + 3) % STATIC_EDGES.length;
        }

        const edge = STATIC_EDGES[pkt.edgeIndex];
        if (edge) {
          dummy.position.lerpVectors(edge.start, edge.end, pkt.progress);
          dummy.scale.setScalar(1 + Math.sin(pkt.progress * Math.PI) * 0.5);
          dummy.updateMatrix();
          packetsRef.current.setMatrixAt(i, dummy.matrix);
        }
      });
      packetsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[1.8, -0.2, -1]}>
      {/* Outer Wireframe Mesh */}
      <mesh>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshBasicMaterial
          wireframe
          color="#00e5ff"
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* Outer Glow Halo Sphere */}
      <mesh>
        <sphereGeometry args={[2.7, 16, 16]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Network Nodes at Vertices */}
      {STATIC_VERTICES.map((v, i) => (
        <group key={i} position={v}>
          <mesh>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? '#8b5cf6' : i % 2 === 0 ? '#00e5ff' : '#22c55e'}
              emissive={i % 3 === 0 ? '#8b5cf6' : i % 2 === 0 ? '#00e5ff' : '#22c55e'}
              emissiveIntensity={2.5}
              roughness={0.2}
            />
          </mesh>
          {/* Subtle pulse ring on key vertices */}
          {i % 4 === 0 && (
            <mesh>
              <ringGeometry args={[0.09, 0.13, 16]} />
              <meshBasicMaterial
                color="#00e5ff"
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Travelling Data Packets Instanced Mesh */}
      <instancedMesh ref={packetsRef} args={[null, null, PACKET_COUNT]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#00e5ff" />
      </instancedMesh>

      {/* Inner Server Core: Dodecahedron */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial
          wireframe
          color="#8b5cf6"
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Central Pulsing Heart Node */}
      <mesh>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={3}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};
