import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface AuroraLightsProps {
  scrollProgress: number
}

export function AuroraLights({ scrollProgress }: AuroraLightsProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uOpacity: { value: 0.3 },
      uColor1: { value: new THREE.Color('#00d4ff') },
      uColor2: { value: new THREE.Color('#ff6b35') },
    }),
    []
  )

  useFrame((state) => {
    if (!meshRef.current) return
    uniforms.uTime.value = state.clock.elapsedTime

    const targetOpacity = scrollProgress > 0.3 && scrollProgress < 0.7 ? 0.4 : 0.1
    uniforms.uOpacity.value += (targetOpacity - uniforms.uOpacity.value) * 0.05
  })

  const vertexShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float uTime;

    void main() {
      vUv = uv;
      vec3 pos = position;
      float elevation = sin(pos.x * 2.0 + uTime * 0.5) * sin(pos.z * 2.0 + uTime * 0.3) * 2.0;
      pos.y += elevation;
      vElevation = elevation;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform float uOpacity;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float mixStrength = (vElevation + 2.0) / 4.0;
      mixStrength += sin(vUv.x * 10.0 + uTime) * 0.1;
      vec3 color = mix(uColor1, uColor2, mixStrength);

      float alpha = uOpacity * (1.0 - vUv.y) * (0.5 + sin(vUv.x * 20.0 + uTime * 2.0) * 0.3);
      alpha *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);

      gl_FragColor = vec4(color, alpha);
    }
  `

  return (
    <mesh ref={meshRef} position={[0, 25, -30]} rotation={[-Math.PI * 0.3, 0, 0]}>
      <planeGeometry args={[100, 40, 64, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}
