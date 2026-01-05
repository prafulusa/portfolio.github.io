import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingParticlesProps {
  scrollProgress: number
}

export function FloatingParticles({ scrollProgress }: FloatingParticlesProps) {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 500

  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 40
      positions[i3 + 1] = Math.random() * 60
      positions[i3 + 2] = (Math.random() - 0.5) * 40

      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = Math.random() * 0.02 + 0.01
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
    }

    return [positions, velocities]
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return

    const positionAttribute = particlesRef.current.geometry.attributes.position
    const posArray = positionAttribute.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      posArray[i3] += velocities[i3] + Math.sin(state.clock.elapsedTime + i) * 0.002
      posArray[i3 + 1] += velocities[i3 + 1]
      posArray[i3 + 2] += velocities[i3 + 2]

      if (posArray[i3 + 1] > 70) {
        posArray[i3 + 1] = -10
      }
    }

    positionAttribute.needsUpdate = true
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  const getColor = () => {
    if (scrollProgress < 0.3) return '#00d4ff'
    if (scrollProgress < 0.5) return '#4ecdc4'
    if (scrollProgress < 0.7) return '#ff6b35'
    return '#00d4ff'
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color={getColor()}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
