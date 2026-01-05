import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface StarFieldProps {
  scrollProgress: number
}

export function StarField({ scrollProgress }: StarFieldProps) {
  const starsRef = useRef<THREE.Points>(null)
  const starCount = 3000

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      const radius = 50 + Math.random() * 100
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) - 20 + Math.random() * 80
      positions[i3 + 2] = radius * Math.cos(phi)

      const colorChoice = Math.random()
      if (colorChoice < 0.3) {
        colors[i3] = 0.4
        colors[i3 + 1] = 0.8
        colors[i3 + 2] = 1.0
      } else if (colorChoice < 0.5) {
        colors[i3] = 1.0
        colors[i3 + 1] = 0.6
        colors[i3 + 2] = 0.3
      } else {
        colors[i3] = 1.0
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 1.0
      }

      sizes[i] = Math.random() * 2 + 0.5
    }

    return [positions, colors, sizes]
  }, [])

  useFrame((state) => {
    if (!starsRef.current) return

    starsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    starsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.1

    const material = starsRef.current.material as THREE.PointsMaterial
    material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  const opacity = scrollProgress < 0.1 ? 1 : Math.max(0.3, 1 - scrollProgress * 0.5)

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={starCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.5}
        vertexColors
        transparent
        opacity={opacity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
