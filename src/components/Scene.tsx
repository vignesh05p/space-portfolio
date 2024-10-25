import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Preload } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';
import Earth from './Earth';
import Sun from './Sun';
import OrbitingText from './OrbitingText';

export default function Scene() {
  return (
    <ErrorBoundary>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: '#000020' }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
          depth: true
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} />
        <Stars 
          radius={300} 
          depth={50} 
          count={5000} 
          factor={4} 
          fade 
          speed={1}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={20}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Suspense fallback={null}>
          <Earth />
          <Sun />
          <OrbitingText />
          <Preload all />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
}