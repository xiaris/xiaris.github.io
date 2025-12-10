import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Add type declarations for React Three Fiber elements
// Augment 'react' module for React 18+ setups where JSX is namespaced under React
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      group: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      mesh: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      ringGeometry: any;
    }
  }
}

// Augment global scope for setups where JSX is in the global namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      group: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      mesh: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      ringGeometry: any;
    }
  }
}

const MIN_RADIUS = 2.5;
const MAX_RADIUS = 10.2; // Increased by 20% (was 8.5)
const PARTICLE_COUNT = 9600; // Increased by 20% (was 8000)

// Inner component for the particle system
const AccretionDisk: React.FC = () => {
  const points = useRef<THREE.Points>(null);

  // Generate geometry data once
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    const colorCore = new THREE.Color('#0ea5e9'); // Cosmic Blue (Hotter)
    const colorMid = new THREE.Color('#f59e0b'); // Event Orange
    const colorEdge = new THREE.Color('#dc2626'); // Event Red (Cooler)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Radius: Distribute more particles closer to the center for intensity
      const r = MIN_RADIUS + Math.pow(Math.random(), 2) * (MAX_RADIUS - MIN_RADIUS);
      
      // Angle: Full circle
      const theta = Math.random() * Math.PI * 2;
      
      // Thickness: Thinner near event horizon, flaring out slightly at edges
      // Standard deviation grows with radius
      const spread = 0.05 + (r - MIN_RADIUS) * 0.08; 
      const y = (Math.random() - 0.5) * spread;

      // Polar to Cartesian conversion
      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);

      positions.set([x, y, z], i * 3);

      // Color logic based on distance from center (temperature gradient)
      // Normalize r to 0..1 range between MIN and MAX
      const t = (r - MIN_RADIUS) / (MAX_RADIUS - MIN_RADIUS);
      
      let color = new THREE.Color();
      // Transition from Blue -> Orange -> Red
      if (t < 0.2) {
        color.lerpColors(colorCore, colorMid, t / 0.2);
      } else {
        color.lerpColors(colorMid, colorEdge, (t - 0.2) / 0.8);
      }
      
      // Randomize brightness for "sparkle"
      const brightness = 0.5 + Math.random() * 1.5;
      color.multiplyScalar(brightness);

      colors.set([color.r, color.g, color.b], i * 3);
    }

    return { positions, colors };
  }, []);

  // Animation Loop
  useFrame((state) => {
    if (points.current) {
      // Differential rotation could be done in shader, but simple rotation is fine here
      points.current.rotation.y -= 0.003;
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

// The Event Horizon: Pure void
const EventHorizon: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
};

// Main Component
const BlackHole: React.FC = () => {
  return (
    // Width set to 138% so that the center (50% of container) aligns with 69% of the viewport width.
    <div className="w-[138%] h-full min-h-[400px]">
      <Canvas 
        camera={{ position: [0, 5, 12], fov: 35 }} 
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Support high DPI screens
      >
        <ambientLight intensity={0.1} />
        
        {/* Centered Group at Origin */}
        <group rotation={[Math.PI / 12, 0, Math.PI / 8]} scale={0.8} position={[0, 0, 0]}>
          <AccretionDisk />
          <EventHorizon />
        </group>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5} 
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          target={[0, 0, 0]} /* Orbit around the origin */
        />
      </Canvas>
    </div>
  );
};

export default BlackHole;