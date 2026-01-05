import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export function AchievementsSection() {
  const icons = ['trophy', 'code', 'mic', 'star']

  return (
    <section
      id="achievements"
      data-section="achievements"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-5xl w-full" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-aurora font-display text-sm tracking-[0.3em] uppercase">
            Chapter 06
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            The <span className="text-gradient">Milestones</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass rounded-2xl p-6 flex gap-6 items-start group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aurora/20 to-solar/20 flex items-center justify-center group-hover:from-aurora/30 group-hover:to-solar/30 transition-colors">
                  <AchievementIcon type={icons[index % icons.length]} />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-display font-bold text-lunar">
                    {achievement.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-body text-aurora bg-aurora/10 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-lunar/60 font-body">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementIcon({ type }: { type: string }) {
  const iconClass = 'w-8 h-8 text-aurora'

  switch (type) {
    case 'trophy':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    case 'code':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case 'mic':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    case 'star':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    default:
      return null
  }
}
