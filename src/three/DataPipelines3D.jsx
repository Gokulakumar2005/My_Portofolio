import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PIPELINE_CURVES = [
  // Editor to React Atom
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.4, 0.5, -2),
    new THREE.Vector3(0, 1.8, -1.8),
    new THREE.Vector3(2.2, 1.4, -1.5),
  ]),
  // Terminal to Node Hex
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(2.6, -1.6, -2.5),
    new THREE.Vector3(0, -2.2, -2.3),
    new THREE.Vector3(-3.8, -1.8, -2.2),
  ]),
  // Editor to MongoDB Stack
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.4, 0.5, -2),
    new THREE.Vector3(-2.8, 1.5, -2.4),
    new THREE.Vector3(-3.5, 1.8, -2.8),
  ]),
  // React Atom to JS Cube
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(2.2, 1.4, -1.5),
    new THREE.Vector3(3.0, 0.8, -2.0),
    new THREE.Vector3(3.8, 0.2, -2.5),
  ]),
];

const PACKET_COUNT = 16;
const STATIC_PULSES = Array.from({ length: PACKET_COUNT }, (_, i) => ({
  curveIndex: i % PIPELINE_CURVES.length,
  progress: (i / PACKET_COUNT),
  speed: 0.18 + (i % 3) * 0.08,
  color: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#10b981' : '#a855f7',
}));

export const DataPipelines3D = () => {
  const packetsRef = useRef();

  const activePulses = useMemo(() => {
    return STATIC_PULSES.map((p) => ({ ...p }));
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((_, delta) => {
    if (!packetsRef.current) return;

    activePulses.forEach((pulse, i) => {
      pulse.progress = (pulse.progress + delta * pulse.speed) % 1;
      const curve = PIPELINE_CURVES[pulse.curveIndex];
      const point = curve.getPointAt(pulse.progress);

      dummy.position.copy(point);
      dummy.scale.setScalar(1 + Math.sin(pulse.progress * Math.PI) * 0.6);
      dummy.updateMatrix();
      packetsRef.current.setMatrixAt(i, dummy.matrix);
    });

    packetsRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      {/* Fiber-Optic Curved Lines */}
      {PIPELINE_CURVES.map((curve, idx) => {
        const points = curve.getPoints(40);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const color = idx % 2 === 0 ? '#00f0ff' : '#a855f7';

        return (
          <line key={idx} geometry={geometry}>
            <lineBasicMaterial
              color={color}
              transparent
              opacity={0.25}
              linewidth={1}
            />
          </line>
        );
      })}

      {/* Real-time Streaming Data Packets */}
      <instancedMesh ref={packetsRef} args={[null, null, PACKET_COUNT]}>
        <sphereGeometry args={[0.065, 8, 8]} />
        <meshBasicMaterial color="#00f0ff" />
      </instancedMesh>
    </group>
  );
};
