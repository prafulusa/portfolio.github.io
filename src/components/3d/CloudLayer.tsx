import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CloudLayerProps {
  scrollProgress: number
}

function Cloud({ position, scale, opacity }: { position: [number, number, number]; scale: number; opacity: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.1 + position[1]) * 0.002
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.02
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#ffffff"
        transparent
        opacity={opacity * 0.15}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

export function CloudLayer({ scrollProgress }: CloudLayerProps) {
  const clouds = useMemo(() => {
    const cloudData: { position: [number, number, number]; scale: number }[] = []
    for (let i = 0; i < 40; i++) {
      cloudData.push({
        position: [
          (Math.random() - 0.5) * 60,
          2 + Math.random() * 15,
          (Math.random() - 0.5) * 40 - 10,
        ],
        scale: 2 + Math.random() * 4,
      })
    }
    return cloudData
  }, [])

  const cloudOpacity = scrollProgress > 0.1 && scrollProgress < 0.4
    ? Math.min(1, (scrollProgress - 0.1) * 5) * Math.min(1, (0.4 - scrollProgress) * 5)
    : 0

  if (cloudOpacity < 0.01) return null

  return (
    <group>
      {clouds.map((cloud, i) => (
        <Cloud
          key={i}
          position={cloud.position}
          scale={cloud.scale}
          opacity={cloudOpacity}
        />
      ))}
    </group>
  )
}
