import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { resumeData } from '../../data/resume'

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="text-2xl font-display font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function AboutSection() {
  const stats = [
    { label: 'Years of Experience', value: resumeData.stats.yearsExperience, suffix: '+' },
    { label: 'Projects Delivered', value: resumeData.stats.projectsDelivered, suffix: '+' },
    { label: 'Companies', value: resumeData.stats.companiesWorked, suffix: '' },
    { label: 'Coffee Consumed', value: resumeData.stats.coffeeConsumed, suffix: '' },
  ]

  return (
    <section
      id="about"
      data-section="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-5xl w-full" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-aurora font-display text-sm tracking-[0.3em] uppercase">
            Chapter 01
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-8">
            The <span className="text-gradient">Origin</span> Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              {resumeData.about.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-lunar/80 font-body leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2 + index * 0.3} />
                  <p className="text-xs text-lunar/50 font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-display font-semibold text-aurora mb-4">
                Currently
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-aurora/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-aurora" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lunar font-display text-sm">Senior Software Engineer</p>
                    <p className="text-lunar/50 font-body text-xs">Meta</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-solar/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lunar font-display text-sm">{resumeData.contact.location}</p>
                    <p className="text-lunar/50 font-body text-xs">Open to remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-display font-semibold text-solar mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {resumeData.certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lunar/80 font-body text-sm">{cert.name}</p>
                      <p className="text-lunar/40 font-body text-xs">{cert.issuer} ({cert.year})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-display font-semibold text-aurora mb-4">
                Looking For
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Staff Engineer', 'Tech Lead', 'Principal Engineer', 'Founding Engineer'].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-body text-lunar/70 bg-white/5 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
