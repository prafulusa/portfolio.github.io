import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'
import { useTypingEffect } from '../../hooks/useTypingEffect'

export function HeroSection() {
  const typedText = useTypingEffect({
    strings: resumeData.taglines,
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetween: 2500,
  })

  const handleDownloadResume = () => {
    const resumeContent = generateResumeText()
    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${resumeData.name.replace(' ', '_')}_Resume.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <section
      id="hero"
      data-section="hero"
      className="min-h-screen flex items-center justify-center relative"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="text-center px-4 max-w-4xl" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-lunar/70 font-body">
              Open to new opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <span className="text-gradient">{resumeData.name}</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-display text-lunar/80 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {resumeData.title}
          </motion.h2>

          <motion.div
            className="h-8 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-base md:text-lg text-aurora font-body">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {['Meta', 'Stripe', 'Airbnb', 'Stanford'].map((company) => (
              <span
                key={company}
                className="px-3 py-1 text-sm font-body text-lunar/60 glass rounded-full"
              >
                {company}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="#about"
              className="group px-8 py-3 bg-gradient-to-r from-aurora to-solar text-deep-space font-display font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-aurora/25"
            >
              <span className="flex items-center gap-2">
                Explore My Journey
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
            <button
              onClick={handleDownloadResume}
              className="group px-8 py-3 glass rounded-full font-display hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
            <a
              href="#contact"
              className="px-8 py-3 glass rounded-full font-display hover:bg-white/10 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-2 text-lunar/40">
            <span className="text-sm font-body">Scroll to discover</span>
            <motion.div
              className="w-6 h-10 border-2 border-lunar/30 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-1.5 h-3 bg-aurora rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function generateResumeText(): string {
  const { name, title, about, experience, education, skills, contact } = resumeData

  let text = `${name}\n${'='.repeat(name.length)}\n\n`
  text += `${title}\n`
  text += `${contact.location} | ${contact.email}\n`
  text += `${contact.linkedin} | ${contact.github}\n\n`

  text += `ABOUT\n${'-'.repeat(50)}\n${about}\n\n`

  text += `EXPERIENCE\n${'-'.repeat(50)}\n`
  experience.forEach((exp) => {
    text += `\n${exp.company} - ${exp.role}\n`
    text += `${exp.period}\n`
    text += `${exp.description}\n`
    exp.highlights.forEach((h) => {
      text += `  - ${h}\n`
    })
  })

  text += `\nEDUCATION\n${'-'.repeat(50)}\n`
  education.forEach((edu) => {
    text += `\n${edu.institution}\n`
    text += `${edu.degree} (${edu.period})\n`
    if (edu.gpa) text += `GPA: ${edu.gpa}\n`
  })

  text += `\nSKILLS\n${'-'.repeat(50)}\n`
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {} as Record<string, string[]>)

  Object.entries(skillsByCategory).forEach(([category, skillList]) => {
    text += `${category.charAt(0).toUpperCase() + category.slice(1)}: ${skillList.join(', ')}\n`
  })

  return text
}
