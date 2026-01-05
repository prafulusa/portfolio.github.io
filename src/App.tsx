import { useState, useEffect } from 'react'
import { Scene3D } from './components/3d/Scene3D'
import { Navigation } from './components/ui/Navigation'
import { ProgressIndicator } from './components/ui/ProgressIndicator'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { CursorTrail } from './components/ui/CursorTrail'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { EducationSection } from './components/sections/EducationSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { ContactSection } from './components/sections/ContactSection'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useGSAPScrollTrigger } from './hooks/useGSAPScrollTrigger'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const { progress } = useScrollProgress()

  useGSAPScrollTrigger()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' })
      } else if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (e.key === 'End') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <Scene3D scrollProgress={progress} />
      <Navigation />
      <ProgressIndicator progress={progress} />
      <CursorTrail />

      <main className="relative z-10" role="main" style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <a
        href="#hero"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 glass rounded-full flex items-center justify-center text-lunar/60 hover:text-aurora hover:bg-white/10 transition-all opacity-0 pointer-events-none"
        style={{
          opacity: progress > 0.1 ? 1 : 0,
          pointerEvents: progress > 0.1 ? 'auto' : 'none',
        }}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </>
  )
}
