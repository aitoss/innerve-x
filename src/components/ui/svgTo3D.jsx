"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import dragon from "../../assets/svg/dragon-1.svg"

function Svg3DModel({ path, color = "#ffcc00" }) {
  const group = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = new SVGLoader();
    loader.load(path, (data) => {
      const paths = data.paths;
      const material = new THREE.MeshStandardMaterial({
        color,
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.5,
      });

      paths.forEach((svgPath) => {
        const shapes = SVGLoader.createShapes(svgPath);
        shapes.forEach((shape) => {
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 5,
            bevelEnabled: true,
            bevelThickness: 0.3,
            bevelSize: 0.2,
            bevelSegments: 1,
          });
          const mesh = new THREE.Mesh(geometry, material);
          group.current.add(mesh);
        });
      });

      setLoaded(true);
    });
  }, [path, color]);

  // Slow rotation
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={group} scale={0.02} rotation={[0, Math.PI, 0]}>
      {!loaded && (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      )}
    </group>
  );
}

export default function SvgTo3D() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Svg3DModel path="/dragon.svg" color="#FFB300" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}