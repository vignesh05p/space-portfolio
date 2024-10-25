import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function OrbitingText() {
  const textRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      const t = clock.getElapsedTime();
      textRef.current.position.x = Math.cos(t * 0.3) * 5;
      textRef.current.position.z = Math.sin(t * 0.3) * 5;
      textRef.current.rotation.y = -t * 0.3;
    }
  });

  const achievements = [
    "BE Computer Science Engineering",
    "CGPA: 7.2",
    "Python Developer @ YBI Foundation",
    "HackWave'23 Winner",
    "EG AI Innovation Runner-Up"
  ];
  
  return (
    <group ref={textRef}>
      {achievements.map((achievement, i) => (
        <Text
          key={achievement}
          fontSize={0.4}
          position={[0, i * 0.8 - 1.6, 0]}
          rotation={[0, Math.PI / 2, 0]}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
          textAlign="center"
        >
          {achievement}
        </Text>
      ))}
    </group>
  );
}