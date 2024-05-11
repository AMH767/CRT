import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    // Анимация вращения
    meshRef.current.rotation.x = time / 10;
    meshRef.current.rotation.y = time / 10;

    // Анимация шейдера
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        uniforms={{
          time: { value: 0 },
          colorA: { value: new THREE.Color('#8dffac') },
          colorB: { value: new THREE.Color('#8dffac') },
          borderColor: { value: new THREE.Color('#8dffac') }, 
          borderWidth: { value: 1.1 } 
        }}
        vertexShader={`
          uniform float time;
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vPosition = position;
            float amplitude = 0.7;
            float frequency = 7.0;
            float distortion = sin(time + position.x * frequency) * amplitude;
            vec3 pos = position + normalize(position) * distortion;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 colorA;
          uniform vec3 colorB;
          uniform vec3 borderColor; // Добавили uniform для цвета контура
          uniform float borderWidth; // Добавили uniform для ширины контура
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            float distanceFromCenter = length(vPosition) / 2.0;
            vec3 color = mix(colorA, colorB, distanceFromCenter);
            
            // Добавили код для отрисовки контура
            float alpha = smoothstep(1.1 - borderWidth, 1.1, distanceFromCenter);
            gl_FragColor = vec4(mix(borderColor, color, alpha), 1.0);
          }
        `}
      />
    </mesh>
  );
};

const Animation = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={10} />
      <pointLight position={[-10, -10, -10]} />
      <AnimatedSphere />
    </Canvas>
  );
};

export default Animation;