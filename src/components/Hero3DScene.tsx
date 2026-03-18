import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sparkles, Environment, RoundedBox } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

function FloatingCube({ position, color, speed = 1, scale = 1 }: { position: [number, number, number]; color: string; speed?: number; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    meshRef.current.rotation.y += 0.005 * speed;
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.2} floatingRange={[-0.3, 0.3]}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <roundedBoxGeometry args={[1, 1, 1, 4, 0.1]} />
        <MeshDistortMaterial color={color} speed={2} distort={0.15} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, color, speed = 1, scale = 1 }: { position: [number, number, number]; color: string; speed?: number; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.5 + Math.PI * 0.3;
    meshRef.current.rotation.z += 0.008 * speed;
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <torusGeometry args={[0.8, 0.25, 16, 48]} />
        <MeshWobbleMaterial color={color} speed={1} factor={0.2} roughness={0.1} metalness={0.9} />
      </mesh>
    </Float>
  );
}

function FloatingSphere({ position, color, speed = 1, scale = 1 }: { position: [number, number, number]; color: string; speed?: number; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <icosahedronGeometry args={[0.7, 1]} />
        <MeshDistortMaterial color={color} speed={3} distort={0.25} roughness={0.15} metalness={0.85} envMapIntensity={1.5} />
      </mesh>
    </Float>
  );
}

function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.8 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Glow sphere */}
      <mesh ref={glowRef} scale={1.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#CB6CE6" transparent opacity={0.05} />
      </mesh>
      
      {/* Main orb */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#9b40b8"
            speed={1.5}
            distort={0.3}
            roughness={0.1}
            metalness={0.95}
            envMapIntensity={2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      angle: (i / 8) * Math.PI * 2,
      radius: 2.5 + Math.random() * 0.5,
      speed: 0.15 + Math.random() * 0.1,
      y: (Math.random() - 0.5) * 1.5,
      scale: 0.06 + Math.random() * 0.06,
    })), []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.002;
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      const t = state.clock.elapsedTime * p.speed + p.angle;
      child.position.x = Math.cos(t) * p.radius;
      child.position.z = Math.sin(t) * p.radius;
      child.position.y = p.y + Math.sin(t * 2) * 0.3;
    });
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} scale={p.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#CB6CE6" emissive="#CB6CE6" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" castShadow />
      <pointLight position={[-3, 2, -2]} intensity={0.5} color="#CB6CE6" />
      <pointLight position={[3, -2, 3]} intensity={0.3} color="#9b40b8" />

      <CentralOrb />
      <OrbitingParticles />

      {/* Floating geometric shapes around the orb */}
      <FloatingCube position={[-2.2, 1.3, -1]} color="#CB6CE6" speed={0.8} scale={0.5} />
      <FloatingCube position={[2.5, -0.8, 0.5]} color="#a855f7" speed={1.2} scale={0.35} />
      <FloatingRing position={[1.8, 1.5, -0.5]} color="#CB6CE6" speed={0.6} scale={0.55} />
      <FloatingRing position={[-1.5, -1.2, 1]} color="#9b40b8" speed={0.9} scale={0.4} />
      <FloatingSphere position={[-2, -0.5, 1.5]} color="#d946ef" speed={1.1} scale={0.45} />
      <FloatingSphere position={[2, 0.8, 1.2]} color="#c084fc" speed={0.7} scale={0.38} />

      {/* Sparkle particles */}
      <Sparkles count={60} scale={7} size={2} speed={0.4} color="#CB6CE6" opacity={0.6} />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 animate-pulse" />
    </div>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
