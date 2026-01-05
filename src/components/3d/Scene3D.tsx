import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from './Environment'
import { CameraController } from './CameraController'
import { Preload } from '@react-three/drei'

interface Scene3DProps {
  scrollProgress: number
}

export function Scene3D({ scrollProgress }: Scene3DProps) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <CameraController scrollProgress={scrollProgress} />
          <Environment scrollProgress={scrollProgress} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
