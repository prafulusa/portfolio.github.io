import { useState, useEffect, useCallback } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = scrollTop / docHeight

    setProgress(scrollProgress)

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setCurrentSection(index)
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { progress, currentSection }
}
