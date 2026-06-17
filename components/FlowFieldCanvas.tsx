"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/lib/shaders";

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, size } = useThree();
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const targetMouseRef = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uResolution.value.set(size.width, size.height);

    // Lerp mouse
    targetMouseRef.current.set(state.pointer.x * 0.5 + 0.5, state.pointer.y * 0.5 + 0.5);
    mouseRef.current.lerp(targetMouseRef.current, 0.03);
    uniforms.uMouse.value.copy(mouseRef.current);
  });

  const handlePointerMove = useCallback((e: { clientX: number; clientY: number }) => {
    targetMouseRef.current.set(
      e.clientX / window.innerWidth,
      e.clientY / window.innerHeight
    );
  }, []);

  return (
    <mesh ref={meshRef} onPointerMove={handlePointerMove}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function FlowFieldCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 0, 1], fov: 50 }}
        dpr={[1, 1.5]}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
