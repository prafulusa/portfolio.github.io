import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  progress: number
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative h-32 w-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-aurora to-solar rounded-full"
          style={{ height: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="mt-4 text-center">
        <span className="text-xs text-lunar/40 font-body">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </div>
  )
}
