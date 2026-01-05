import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-section="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl w-full" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-aurora font-display text-sm tracking-[0.3em] uppercase">
            Chapter 05
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            The <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-lunar/60 font-body mt-4 max-w-2xl mx-auto">
            Open source projects and side experiments that solve real problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 group cursor-pointer relative overflow-hidden block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aurora/10 to-solar/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aurora to-solar flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-deep-space">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-lunar/30 group-hover:text-aurora transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <h3 className="text-xl font-display font-bold text-lunar mb-2 group-hover:text-aurora transition-colors">
                  {project.title}
                </h3>

                {project.metrics && (
                  <p className="text-sm text-aurora/80 font-body mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {project.metrics}
                  </p>
                )}

                <p className="text-lunar/60 font-body text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-body text-lunar/70 bg-white/5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-body text-lunar/50 bg-white/5 rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href={`https://${resumeData.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full font-display text-lunar/80 hover:text-aurora hover:bg-white/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
