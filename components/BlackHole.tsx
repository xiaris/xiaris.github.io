
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const MIN_RADIUS = 2.5;
const MAX_RADIUS = 10.2; 
const PARTICLE_COUNT = 9600; 

// Inner component for the particle system
const AccretionDisk: React.FC = () => {
  const points = useRef<THREE.Points>(null);

  // Pre-calculate all static properties and the velocity factor (Keplerian)
  const { positions, colors, radii, angles, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const rads = new Float32Array(PARTICLE_COUNT);
    const angs = new Float32Array(PARTICLE_COUNT);
    const vels = new Float32Array(PARTICLE_COUNT);

    const colorCore = new THREE.Color('#0ea5e9'); // Cosmic Blue
    const colorMid = new THREE.Color('#f59e0b'); // Event Orange
    const colorEdge = new THREE.Color('#dc2626'); // Event Red

    // Speed constant for Keplerian motion (omega = k * r^-1.5)
    const K = 1.5; 

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = MIN_RADIUS + Math.pow(Math.random(), 2) * (MAX_RADIUS - MIN_RADIUS);
      const theta = Math.random() * Math.PI * 2;
      const spread = 0.05 + (r - MIN_RADIUS) * 0.08; 
      const y = (Math.random() - 0.5) * spread;

      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);

      pos.set([x, y, z], i * 3);
      rads[i] = r;
      angs[i] = theta;
      
      // Velocity is units/second thanks to useFrame delta
      vels[i] = K * Math.pow(r, -1.5);

      const t = (r - MIN_RADIUS) / (MAX_RADIUS - MIN_RADIUS);
      let color = new THREE.Color();
      if (t < 0.2) {
        color.lerpColors(colorCore, colorMid, t / 0.2);
      } else {
        color.lerpColors(colorMid, colorEdge, (t - 0.2) / 0.8);
      }
      const brightness = 0.5 + Math.random() * 1.5;
      color.multiplyScalar(brightness);

      col.set([color.r, color.g, color.b], i * 3);
    }

    return { 
      positions: pos, 
      colors: col, 
      radii: rads, 
      angles: angs, 
      velocities: vels 
    };
  }, []);

  useFrame((_state, delta) => {
    if (points.current) {
      const positionAttr = points.current.geometry.attributes.position;
      const posArray = positionAttr.array as Float32Array;
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const r = radii[i];
        // delta is the time since last frame in seconds. 
        // Multiplying by delta ensures frame-rate independence.
        angles[i] -= velocities[i] * delta;
        posArray[i * 3] = r * Math.cos(angles[i]);
        posArray[i * 3 + 2] = r * Math.sin(angles[i]);
      }
      positionAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
};

// Component to handle the relativistic precession of the entire disk system
const PrecessingSystem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      /** 
       * Precession: The rotation of the orbital plane itself.
       * state.clock.getElapsedTime() is time-dependent.
       */
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef} rotation={[-Math.PI / 12, 0, Math.PI / 10]} scale={0.8}>
      {children}
    </group>
  );
};

const EventHorizon: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
};

const BlackHole: React.FC = () => {
  return (
    <div className="w-[138%] h-full min-h-[400px]">
      <Canvas 
        camera={{ position: [0, 6, 14], fov: 35 }} 
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        
        <PrecessingSystem>
          <AccretionDisk />
          <EventHorizon />
        </PrecessingSystem>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.8}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default BlackHole;
