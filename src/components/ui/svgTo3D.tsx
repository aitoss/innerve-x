"use client";

// This component has been disabled as @react-three/fiber dependencies were removed
// for performance optimization. If you need 3D functionality, reinstall:
// npm install three @react-three/fiber @react-three/drei

export default function SvgTo3D() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h2 className="text-2xl mb-4">3D Component Disabled</h2>
        <p className="text-gray-400">
          Three.js dependencies removed for optimization.
          <br />
          Reinstall if 3D features are needed.
        </p>
      </div>
    </div>
  );
}