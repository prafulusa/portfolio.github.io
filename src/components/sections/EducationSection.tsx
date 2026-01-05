import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export function EducationSection() {
  return (
    <section
      id="education"
      data-section="education"
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
            Chapter 03
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            The <span className="text-gradient">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="glass rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aurora to-solar transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-lunar">
                    {edu.institution}
                  </h3>
                  <p className="text-aurora font-display mt-1">{edu.degree}</p>
                </div>
                {edu.gpa && (
                  <div className="glass px-4 py-2 rounded-lg">
                    <span className="text-sm text-lunar/50 font-body">GPA</span>
                    <p className="text-xl font-display font-bold text-gradient">
                      {edu.gpa}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-lunar/50 font-body text-sm mb-6">{edu.period}</p>

              <div className="space-y-3">
                {edu.highlights.map((highlight, hIndex) => (
                  <motion.div
                    key={hIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + hIndex * 0.1 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-aurora mt-2 flex-shrink-0" />
                    <span className="text-lunar/70 font-body">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
