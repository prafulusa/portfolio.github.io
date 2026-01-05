import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { resumeData } from '../../data/resume'

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % resumeData.testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="testimonials"
      data-section="testimonials"
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
            Chapter 07
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="glass rounded-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
            {resumeData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  y: index === activeIndex ? 0 : 20,
                  position: index === activeIndex ? 'relative' : 'absolute',
                }}
                transition={{ duration: 0.5 }}
                className={index === activeIndex ? '' : 'pointer-events-none'}
              >
                <div className="flex flex-col items-center text-center">
                  <svg
                    className="w-12 h-12 text-aurora/30 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-xl md:text-2xl text-lunar/80 font-body leading-relaxed mb-8 max-w-3xl">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-aurora/30"
                      />
                    )}
                    <div className="text-left">
                      <p className="font-display font-semibold text-lunar">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-lunar/60 font-body">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {resumeData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-aurora'
                    : 'bg-lunar/30 hover:bg-lunar/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
