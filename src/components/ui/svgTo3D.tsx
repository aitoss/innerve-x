"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";


function ImagePlane() {
  const texture = useTexture("/imaged.png");
  
  return (
    <mesh>
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function SvgTo3D() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <ambientLight intensity={0.5} />
        <ImagePlane />
        <OrbitControls />
      </Canvas>
    </div>
  );
}