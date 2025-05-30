'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  useTexture, 
  OrbitControls, 
  PerspectiveCamera, 
  Stars 
} from '@react-three/drei';
import * as THREE from 'three';
import styles from '../styles/components/OrbitCanvas.module.scss';

// Scroll tracking component
function ScrollTracker({ setScrollProgress }: { setScrollProgress: (value: number) => void }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollY / height, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);

  return null;
}

// Planet component within the canvas
function Planet({ 
  position = [0, 0, 0], 
  scale = 2.5,
  scrollProgress = 0 
}: { 
  position?: number[], 
  scale?: number,
  scrollProgress?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Load textures from reliable sources
  const textures = useTexture({
    map: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/planets/earth_atmos_2048.jpg',
    bumpMap: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/planets/earth_normal_2048.jpg',
    specularMap: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/planets/earth_specular_2048.jpg',
    // Use a solid material if no cloud texture is available
  });

  // Animation for rotation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      
      // Scroll-based zoom and rotation effect
      if (groupRef.current) {
        // Scale based on scroll progress (zoom in as user scrolls)
        const baseScale = scale * (1 + scrollProgress * 0.3);
        groupRef.current.scale.set(baseScale, baseScale, baseScale);
        
        // Tilt based on scroll progress
        groupRef.current.rotation.x = scrollProgress * 0.2;
        groupRef.current.rotation.y = clock.getElapsedTime() * 0.05 + scrollProgress * Math.PI;
        
        // Slight position adjustment based on scroll
        groupRef.current.position.z = scrollProgress * -2;
      }
    }
  });

  return (
    <group ref={groupRef} position={new THREE.Vector3(...position)}>
      {/* Main planet */}
      <mesh ref={meshRef} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={textures.map}
          bumpMap={textures.bumpMap}
          bumpScale={0.2}
          specularMap={textures.specularMap}
          shininess={10}
        />
      </mesh>
      
      {/* Cloud layer - using simplified approach without texture */}
      <mesh scale={scale * 1.01}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
      
      {/* Outer glow / halo */}
      <mesh scale={scale * 1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color={new THREE.Color('#4287f5')}
          transparent
          opacity={0.04 + scrollProgress * 0.1} // Increase glow with scroll
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={scale * 1.5}>
        <ringGeometry args={[1.5, 1.55, 64]} />
        <meshBasicMaterial 
          color={new THREE.Color('#7b33e1')} 
          opacity={0.3 + scrollProgress * 0.4} // Increase opacity with scroll
          transparent 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Star field component
function StarField({ scrollProgress = 0 }) {
  return (
    <Stars
      radius={100 - scrollProgress * 20} // Stars get closer as you scroll
      depth={50}
      count={5000}
      factor={4 + scrollProgress * 2} // Increase brightness with scroll
      saturation={scrollProgress * 0.5} // Increase color with scroll
      fade
      speed={1 + scrollProgress * 0.5} // Speed up with scroll
    />
  );
}

// Main component
export default function OrbitCanvas() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollTracker setScrollProgress={setScrollProgress} />
      <div className={`${styles.canvasContainer} ${loading ? styles.loading : ''}`}>
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight 
            position={[10, 5, 5]} 
            intensity={2} 
            castShadow 
            shadow-mapSize-width={1024} 
            shadow-mapSize-height={1024}
          />
          
          <Planet scrollProgress={scrollProgress} />
          <StarField scrollProgress={scrollProgress} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>
      
      <div className={`${styles.loadingOverlay} ${loading ? '' : styles.hidden}`}>
        <div className={styles.loader}></div>
      </div>
    </>
  );
} 