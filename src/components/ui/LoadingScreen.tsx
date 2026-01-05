import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [showCursor1, setShowCursor1] = useState(true)
  const [showCursor2, setShowCursor2] = useState(false)

  const fullText1 = "import { useState, useEffect } from 'react'"
  const fullText2 = "import { motion } from 'framer-motion'"

  useEffect(() => {
    let currentIndex1 = 0
    let currentIndex2 = 0
    let timeoutId: any

    const typeLine1 = () => {
      if (currentIndex1 <= fullText1.length) {
        setText1(fullText1.slice(0, currentIndex1))
        currentIndex1++
        timeoutId = setTimeout(typeLine1, 30 + Math.random() * 20)
      } else {
        setShowCursor1(false)
        setShowCursor2(true)
        timeoutId = setTimeout(typeLine2, 300)
      }
    }

    const typeLine2 = () => {
      if (currentIndex2 <= fullText2.length) {
        setText2(fullText2.slice(0, currentIndex2))
        currentIndex2++
        timeoutId = setTimeout(typeLine2, 30 + Math.random() * 20)
      }
    }

    timeoutId = setTimeout(typeLine1, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        const increment = Math.random() * 1.5 + 0.5
        return Math.min(prev + increment, 100)
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center font-mono perspective-[1000px]"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (progress >= 100) onComplete()
      }}
    >
      <motion.div
        className="w-full max-w-[600px] p-8 bg-[#0a0a0f] border border-white/5 rounded-xl shadow-2xl relative overflow-hidden"
        initial={{ rotateX: 5, rotateY: 0, scale: 0.95, opacity: 0 }}
        animate={{ 
          rotateX: [5, 0, 5],
          rotateY: [-2, 2, -2],
          scale: 1, 
          opacity: 1 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          opacity: { duration: 0.5 }
        }}
        style={{ 
          transformStyle: "preserve-3d",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
        }}
      >
        <div className="flex items-center gap-2 mb-6 text-sm opacity-20 select-none">
          <span className="text-green-400">$</span>
          <span className="text-lunar">npm run dev</span>
          <span className="animate-pulse">...</span>
        </div>

        <div className="space-y-3 font-mono text-sm md:text-base leading-relaxed relative z-10 min-h-[120px]">
          <div className="text-lunar/20 italic select-none">// Building portfolio...</div>
          
          <div className="text-lunar/80 h-6 flex items-center whitespace-nowrap">
            {text1}
            {showCursor1 && <span className="animate-pulse ml-1 w-2 h-4 bg-aurora inline-block" />}
          </div>

          <div className="text-lunar/80 h-6 flex items-center whitespace-nowrap">
            {text2}
            {showCursor2 && <span className="animate-pulse ml-1 w-2 h-4 bg-aurora inline-block" />}
          </div>

          <motion.div 
            className="text-lunar/80 flex items-center gap-2 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: text2.length > 5 ? 1 : 0 }}
          >
            <span className="text-lunar/40">//</span> git initialise
          </motion.div>
          
          <motion.div 
            className="text-lunar/80 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: text2.length > 15 ? 1 : 0 }}
          >
             <span className="text-lunar/40">//</span> git main 
             <span className="text-green-400 font-bold">✓</span>
          </motion.div>
        </div>

        <div className="h-16"></div>

        <div className="h-px w-full bg-white/10 mb-6 relative overflow-hidden">
           <motion.div 
              className="absolute inset-0 bg-aurora/50 blur-[2px]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
           />
           <motion.div 
              className="h-full bg-aurora shadow-[0_0_10px_rgba(0,212,255,0.8)]"
              style={{ width: `${progress}%` }}
           />
        </div>

        <div className="flex justify-center items-center text-sm font-mono tracking-widest">
            <div className="text-lunar/90 flex items-center gap-3">
              <span className="text-aurora font-bold">{'>'}</span>
              <span>ALMOST READY</span>
              <span className="animate-pulse text-aurora">_</span>
            </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
