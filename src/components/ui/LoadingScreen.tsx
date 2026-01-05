import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-deep-space flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-20 h-20 mx-auto relative">
            <motion.div
              className="absolute inset-0 border-2 border-aurora/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 border-2 border-solar/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-aurora rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-display font-bold text-gradient mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Initializing Experience
        </motion.h2>

        <motion.div
          className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-aurora to-solar rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
