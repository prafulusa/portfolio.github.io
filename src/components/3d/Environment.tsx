import { useMemo } from 'react'
import { StarField } from './StarField'
import { CloudLayer } from './CloudLayer'
import { FloatingParticles } from './FloatingParticles'
import { AuroraLights } from './AuroraLights'
import { CosmicDust } from './CosmicDust'

interface EnvironmentProps {
  scrollProgress: number
}

export function Environment({ scrollProgress }: EnvironmentProps) {
  const atmosphereColor = useMemo(() => {
    if (scrollProgress < 0.2) return '#0a0a1a'
    if (scrollProgress < 0.4) return '#0d1b2a'
    if (scrollProgress < 0.6) return '#1b263b'
    if (scrollProgress < 0.8) return '#0a192f'
    return '#0a0a0f'
  }, [scrollProgress])

  return (
    <>
      <color attach="background" args={[atmosphereColor]} />
      <fog attach="fog" args={[atmosphereColor, 10, 80]} />

      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#ff6b35" />

      <StarField scrollProgress={scrollProgress} />
      <CloudLayer scrollProgress={scrollProgress} />
      <FloatingParticles scrollProgress={scrollProgress} />
      <AuroraLights scrollProgress={scrollProgress} />
      <CosmicDust scrollProgress={scrollProgress} />
    </>
  )
}
