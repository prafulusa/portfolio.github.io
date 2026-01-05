import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-5xl w-full" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-aurora font-display text-sm tracking-[0.3em] uppercase">
            Chapter 08
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-xl text-lunar/60 font-body max-w-2xl mx-auto mb-12">
            I'm currently open to new opportunities at mission-driven companies.
            Whether you want to discuss a role, collaborate on a project, or just say hi - I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-semibold text-aurora mb-6">
              Quick Links
            </h3>
            <div className="space-y-4">
              <ContactLink
                href={`mailto:${resumeData.contact.email}`}
                icon="email"
                label="Email"
                value={resumeData.contact.email}
                color="aurora"
              />
              <ContactLink
                href={`https://${resumeData.contact.linkedin}`}
                icon="linkedin"
                label="LinkedIn"
                value="Connect with me"
                color="blue"
              />
              <ContactLink
                href={`https://${resumeData.contact.github}`}
                icon="github"
                label="GitHub"
                value="View my code"
                color="gray"
              />
              {resumeData.contact.twitter && (
                <ContactLink
                  href={`https://${resumeData.contact.twitter}`}
                  icon="twitter"
                  label="Twitter"
                  value="Follow me"
                  color="sky"
                />
              )}
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-semibold text-solar mb-6">
              Schedule a Call
            </h3>
            <p className="text-lunar/60 font-body mb-6">
              Prefer a live conversation? Book a 30-minute chat directly on my calendar.
              I'm happy to discuss opportunities, technical challenges, or career advice.
            </p>
            {resumeData.contact.calendly && (
              <a
                href={`https://${resumeData.contact.calendly}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-aurora to-solar text-deep-space font-display font-semibold rounded-xl hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Meeting
              </a>
            )}

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-solar/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lunar font-display text-sm">{resumeData.contact.location}</p>
                  <p className="text-lunar/50 font-body text-xs">Open to remote opportunities worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lunar/30 font-body text-sm mb-2">
            Built with React, Three.js, GSAP, and Framer Motion
          </p>
          <p className="text-lunar/20 font-body text-xs">
            2024 {resumeData.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  icon,
  label,
  value,
  color,
}: {
  href: string
  icon: string
  label: string
  value: string
  color: string
}) {
  const colorClasses: Record<string, string> = {
    aurora: 'from-aurora/20 to-aurora/5 group-hover:from-aurora/30 text-aurora',
    blue: 'from-blue-500/20 to-blue-500/5 group-hover:from-blue-500/30 text-blue-400',
    gray: 'from-gray-500/20 to-gray-500/5 group-hover:from-gray-500/30 text-gray-400',
    sky: 'from-sky-500/20 to-sky-500/5 group-hover:from-sky-500/30 text-sky-400',
  }

  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center transition-colors`}>
        <IconComponent icon={icon} />
      </div>
      <div className="text-left flex-1">
        <p className="text-xs text-lunar/50 font-body">{label}</p>
        <p className="text-lunar font-display text-sm group-hover:text-aurora transition-colors">
          {value}
        </p>
      </div>
      <svg className="w-4 h-4 text-lunar/30 group-hover:text-aurora group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}

function IconComponent({ icon }: { icon: string }) {
  switch (icon) {
    case 'email':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case 'twitter':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    default:
      return null
  }
}
