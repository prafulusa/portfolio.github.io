import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface CameraControllerProps {
  scrollProgress: number
}

const cameraPath = [
  { position: [0, 0, 10], lookAt: [0, 0, 0] },
  { position: [0, 5, 8], lookAt: [0, 2, 0] },
  { position: [3, 8, 5], lookAt: [0, 5, 0] },
  { position: [0, 15, 3], lookAt: [0, 12, 0] },
  { position: [-3, 22, 5], lookAt: [0, 20, 0] },
  { position: [0, 30, 8], lookAt: [0, 28, 0] },
  { position: [2, 38, 6], lookAt: [0, 36, 0] },
  { position: [0, 50, 10], lookAt: [0, 48, 0] },
]

function interpolatePath(progress: number) {
  const numSegments = cameraPath.length - 1
  const segment = Math.min(Math.floor(progress * numSegments), numSegments - 1)
  const t = (progress * numSegments) % 1

  const current = cameraPath[segment]
  const next = cameraPath[Math.min(segment + 1, numSegments)]

  const smoothT = t * t * (3 - 2 * t)

  return {
    position: current.position.map((v, i) =>
      v + (next.position[i] - v) * smoothT
    ) as [number, number, number],
    lookAt: current.lookAt.map((v, i) =>
      v + (next.lookAt[i] - v) * smoothT
    ) as [number, number, number],
  }
}

export function CameraController({ scrollProgress }: CameraControllerProps) {
  const { camera } = useThree()
  const targetPosition = useRef(new THREE.Vector3())
  const targetLookAt = useRef(new THREE.Vector3())
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0))

  useFrame(() => {
    const { position, lookAt } = interpolatePath(scrollProgress)

    targetPosition.current.set(...position)
    targetLookAt.current.set(...lookAt)

    camera.position.lerp(targetPosition.current, 0.05)
    currentLookAt.current.lerp(targetLookAt.current, 0.05)
    camera.lookAt(currentLookAt.current)
  })

  return null
}
