import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAPScrollTrigger() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const sections = gsap.utils.toArray<HTMLElement>('[data-section]')

    sections.forEach((section) => {
      const content = section.querySelector('.section-content')
      if (!content) return

      gsap.fromTo(
        content,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    gsap.utils.toArray<HTMLElement>('.stagger-item').forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
