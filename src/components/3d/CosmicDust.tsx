import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CosmicDustProps {
  scrollProgress: number
}

export function CosmicDust({ scrollProgress }: CosmicDustProps) {
  const dustRef = useRef<THREE.Points>(null)
  const dustCount = 2000

  const [positions, originalPositions] = useMemo(() => {
    const positions = new Float32Array(dustCount * 3)
    const originalPositions = new Float32Array(dustCount * 3)

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3
      const angle = Math.random() * Math.PI * 2
      const radius = 5 + Math.random() * 50
      const height = Math.random() * 80 - 10

      positions[i3] = Math.cos(angle) * radius
      positions[i3 + 1] = height
      positions[i3 + 2] = Math.sin(angle) * radius

      originalPositions[i3] = positions[i3]
      originalPositions[i3 + 1] = positions[i3 + 1]
      originalPositions[i3 + 2] = positions[i3 + 2]
    }

    return [positions, originalPositions]
  }, [])

  useFrame((state) => {
    if (!dustRef.current) return

    const positionAttribute = dustRef.current.geometry.attributes.position
    const posArray = positionAttribute.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < dustCount; i++) {
      const i3 = i * 3
      const originalX = originalPositions[i3]
      const originalZ = originalPositions[i3 + 2]

      const angle = time * 0.05 + i * 0.001
      const radius = Math.sqrt(originalX * originalX + originalZ * originalZ)

      posArray[i3] = Math.cos(angle) * radius + Math.sin(time * 0.2 + i) * 0.5
      posArray[i3 + 1] = originalPositions[i3 + 1] + Math.sin(time + i) * 0.3
      posArray[i3 + 2] = Math.sin(angle) * radius + Math.cos(time * 0.2 + i) * 0.5
    }

    positionAttribute.needsUpdate = true
  })

  const dustColor = useMemo(() => {
    if (scrollProgress < 0.25) return '#00d4ff'
    if (scrollProgress < 0.5) return '#4ecdc4'
    if (scrollProgress < 0.75) return '#ff6b35'
    return '#9d4edd'
  }, [scrollProgress])

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dustCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={dustColor}
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
