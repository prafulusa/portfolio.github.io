import { useState, useEffect, useCallback } from 'react'

interface UseTypingEffectOptions {
  strings: string[]
  typeSpeed?: number
  deleteSpeed?: number
  delayBetween?: number
}

export function useTypingEffect({
  strings,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentString = strings[currentIndex]

    if (!isDeleting) {
      if (displayText.length < currentString.length) {
        setDisplayText(currentString.slice(0, displayText.length + 1))
      } else {
        setTimeout(() => setIsDeleting(true), delayBetween)
        return
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1))
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % strings.length)
      }
    }
  }, [displayText, currentIndex, isDeleting, strings, delayBetween])

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typeSpeed, deleteSpeed])

  return displayText
}
