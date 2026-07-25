"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles, Float } from "@react-three/drei";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.15 + state.pointer.x * 0.4;
    ref.current.rotation.x = state.pointer.y * 0.25;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.5, 16]} />
        <MeshDistortMaterial
          color="#22122e"
          emissive="#4a1038"
          emissiveIntensity={0.55}
          roughness={0.2}
          metalness={0.7}
          distort={0.38}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

/** 3D hero core — lit by indigo/magenta/amber point lights for a brand-gradient sheen. */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 2, 4]} color="#c42f86" intensity={70} />
      <pointLight position={[-4, -2, 3]} color="#4b4acf" intensity={60} />
      <pointLight position={[0, 3, -2]} color="#ffd34e" intensity={45} />
      <Blob />
      <Sparkles count={45} scale={7} size={2.2} speed={0.4} color="#d9b8ff" opacity={0.7} />
    </Canvas>
  );
}
