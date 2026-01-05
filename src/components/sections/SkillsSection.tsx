import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export function SkillsSection() {
  const categories = [
    { key: 'languages', label: 'Languages', color: 'from-aurora to-blue-400' },
    { key: 'frontend', label: 'Frontend', color: 'from-solar to-yellow-400' },
    { key: 'backend', label: 'Backend', color: 'from-green-400 to-teal-400' },
    { key: 'tools', label: 'Tools & Cloud', color: 'from-pink-400 to-rose-400' },
  ] as const

  return (
    <section
      id="skills"
      data-section="skills"
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
            Chapter 04
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            The <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const skills = resumeData.skills.filter(
              (s) => s.category === category.key
            )

            return (
              <motion.div
                key={category.key}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-display font-semibold text-lunar mb-6">
                  {category.label}
                </h3>

                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-lunar/80 font-body">
                          {skill.name}
                        </span>
                        <span className="text-lunar/50 font-body text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + index * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
