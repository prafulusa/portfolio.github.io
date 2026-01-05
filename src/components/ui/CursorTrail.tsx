import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Trail {
  id: number
  x: number
  y: number
}

export function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.matchMedia('(min-width: 1024px)').matches)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newTrail: Trail = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    }

    setTrails((prev) => [...prev.slice(-12), newTrail])
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    let frameId: number
    let lastTime = 0
    const throttleMs = 30

    const throttledHandler = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastTime >= throttleMs) {
        lastTime = now
        handleMouseMove(e)
      }
    }

    window.addEventListener('mousemove', throttledHandler)

    const cleanup = () => {
      cancelAnimationFrame(frameId)
    }

    return () => {
      window.removeEventListener('mousemove', throttledHandler)
      cleanup()
    }
  }, [isDesktop, handleMouseMove])

  useEffect(() => {
    if (trails.length === 0) return

    const timer = setTimeout(() => {
      setTrails((prev) => prev.slice(1))
    }, 200)

    return () => clearTimeout(timer)
  }, [trails])

  if (!isDesktop) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: trail.x - 6,
              top: trail.y - 6,
              background: `linear-gradient(135deg, rgba(0, 212, 255, ${0.3 + index * 0.05}), rgba(255, 107, 53, ${0.3 + index * 0.05}))`,
              boxShadow: `0 0 ${10 + index * 2}px rgba(0, 212, 255, 0.3)`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
