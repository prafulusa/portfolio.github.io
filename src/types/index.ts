export interface Experience {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  logo?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  gpa?: string
  highlights: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  metrics?: string
  image?: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'languages'
}

export interface Achievement {
  title: string
  description: string
  year: string
  icon?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  image?: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  link?: string
}

export interface ResumeData {
  name: string
  title: string
  tagline: string
  taglines: string[]
  about: string
  experience: Experience[]
  education: Education[]
  projects: Project[]
  skills: Skill[]
  achievements: Achievement[]
  testimonials: Testimonial[]
  certifications: Certification[]
  contact: {
    email: string
    linkedin: string
    github: string
    twitter?: string
    location: string
    phone?: string
    calendly?: string
  }
  stats: {
    yearsExperience: number
    projectsDelivered: number
    companiesWorked: number
    coffeeConsumed: number
  }
}
