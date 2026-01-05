import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-section="experience"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-5xl w-full" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-aurora font-display text-sm tracking-[0.3em] uppercase">
            Chapter 02
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            The <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-aurora via-solar to-aurora/20 transform md:-translate-x-1/2" />

          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`absolute top-2 w-4 h-4 rounded-full bg-aurora glow ${
                  index % 2 === 0
                    ? 'left-0 md:left-auto md:right-[calc(50%-8px)]'
                    : 'left-0 md:left-[calc(50%-8px)]'
                }`}
              />

              <div
                className={`glass rounded-2xl p-6 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                  <h3 className="text-2xl font-display font-bold text-lunar">
                    {exp.company}
                  </h3>
                  <span className="hidden md:block text-lunar/30">|</span>
                  <span className="text-aurora font-display">{exp.role}</span>
                </div>

                <p className="text-lunar/50 font-body text-sm mb-4">
                  {exp.period}
                </p>

                <p className="text-lunar/70 font-body mb-4">{exp.description}</p>

                <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      className="text-lunar/60 font-body text-sm flex items-start gap-2"
                      style={{
                        justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                        flexDirection: index % 2 === 0 ? 'row-reverse' : 'row',
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + hIndex * 0.1 }}
                    >
                      <span className="text-aurora mt-1">*</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
