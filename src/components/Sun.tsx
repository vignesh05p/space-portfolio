import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Sun() {
  const sunRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sunRef.current) {
      sunRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = -clock.getElapsedTime() * 0.1;
      glowRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group position={[20, 10, -20]}>
      <pointLight
        intensity={1}
        distance={100}
        decay={2}
        color="#FDB813"
      />
      <mesh ref={sunRef}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color("#FDB813")}
        />
      </mesh>
      <mesh ref={glowRef} scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color("#FF6B00")}
          transparent={true}
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}