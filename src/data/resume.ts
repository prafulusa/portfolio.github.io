import type { ResumeData } from '../types'

export const resumeData: ResumeData = {
  name: "Alex Chen",
  title: "Senior Software Engineer",
  tagline: "Building the future, one line of code at a time",
  taglines: [
    "Building scalable systems at Meta",
    "Crafting exceptional user experiences",
    "Turning complex problems into elegant solutions",
    "Open source enthusiast & tech speaker",
    "Passionate about developer tooling"
  ],
  about: `I'm a software engineer with 6+ years of experience building products used by millions. Currently at Meta, I lead frontend architecture for Instagram's creator monetization platform, helping content creators turn their passion into sustainable careers.

My journey started at UC Berkeley, where I fell in love with the intersection of technology and human experience. Since then, I've had the privilege of working at companies like Stripe and Airbnb, where I learned that great software isn't just about clean code - it's about understanding people.

I'm particularly passionate about performance optimization, developer experience, and making technology accessible to everyone. When I'm not shipping features, you'll find me contributing to React's ecosystem, speaking at conferences, or mentoring the next generation of engineers.

I believe in writing code that tells a story, building teams that lift each other up, and creating products that genuinely improve people's lives.`,

  experience: [
    {
      company: "Meta",
      role: "Senior Software Engineer",
      period: "Jan 2022 - Present",
      description: "Leading frontend architecture for Instagram's creator monetization platform. Building tools that help 2M+ content creators earn a living doing what they love.",
      highlights: [
        "Architected real-time analytics dashboard processing 50M+ events/day, reducing p99 latency from 3s to 200ms",
        "Led React 18 migration for a 500K LOC codebase, improving FCP by 40% and reducing bundle size by 25%",
        "Designed and implemented A/B testing framework used across 15 product teams, increasing experiment velocity by 3x",
        "Mentored 5 engineers, with 2 receiving promotions within 18 months",
        "Established frontend guild with 40+ members, standardizing practices across Instagram's web platform"
      ]
    },
    {
      company: "Stripe",
      role: "Software Engineer",
      period: "Jun 2020 - Dec 2021",
      description: "Built payment infrastructure powering $640B+ in annual transaction volume. Focused on fraud prevention and API reliability.",
      highlights: [
        "Developed ML-powered fraud detection system reducing chargebacks by 35%, saving $12M annually",
        "Optimized critical payment API endpoints from 200ms to 45ms p99 latency, improving conversion by 2.3%",
        "Built internal observability dashboard adopted by 200+ engineers, reducing incident response time by 60%",
        "Led Stripe Tax integration for 3 Fortune 500 clients, generating $8M in new ARR",
        "Received 'Impact Award' for shipping critical PCI compliance features ahead of regulatory deadline"
      ]
    },
    {
      company: "Airbnb",
      role: "Software Engineer",
      period: "Jul 2018 - May 2020",
      description: "Member of Host Experience team, building tools used by 4M+ hosts worldwide to manage their listings and optimize their business.",
      highlights: [
        "Built responsive calendar component handling 1M+ daily interactions with 60fps animations",
        "Reduced listing page bundle size by 40% through code splitting, improving SEO rankings significantly",
        "Implemented WCAG 2.1 AA compliance across host dashboard, expanding addressable market by 15%",
        "Created automated visual regression testing system catching 50+ bugs before production",
        "Awarded 'Rising Star' for exceptional contributions and cross-team collaboration"
      ]
    },
    {
      company: "Dropbox",
      role: "Software Engineering Intern",
      period: "May 2017 - Aug 2017",
      description: "Built features for Dropbox Paper's real-time collaboration engine as part of the web platform team.",
      highlights: [
        "Implemented real-time cursors and presence indicators for collaborative editing",
        "Reduced operational transformation conflicts by 30% through improved conflict resolution",
        "Presented intern project to 200+ engineers at company all-hands"
      ]
    }
  ],

  education: [
    {
      institution: "Stanford University",
      degree: "M.S. Computer Science",
      period: "2016 - 2018",
      gpa: "3.92/4.0",
      highlights: [
        "Concentration in Human-Computer Interaction",
        "Teaching Assistant for CS 147: Introduction to HCI (2 quarters)",
        "Research on accessible interface design published in CHI 2018",
        "Member of Stanford AI Lab working on NLP accessibility tools",
        "Graduate Fellowship recipient"
      ]
    },
    {
      institution: "UC Berkeley",
      degree: "B.S. Electrical Engineering & Computer Science",
      period: "2012 - 2016",
      gpa: "3.85/4.0",
      highlights: [
        "Dean's Honor List (all semesters)",
        "President of ACM student chapter (200+ members)",
        "1st Place, CalHacks 2015 (2,000+ participants)",
        "Undergraduate Research Assistant in Berkeley AI Research (BAIR)",
        "Tau Beta Pi Engineering Honor Society"
      ]
    }
  ],

  projects: [
    {
      title: "ReactFlow Pro",
      description: "Open-source library for building node-based editors and interactive diagrams. Used by teams at Stripe, Vercel, and Notion for workflow builders and data pipelines.",
      technologies: ["TypeScript", "React", "D3.js", "WebGL", "Zustand"],
      link: "https://github.com/alexchen/reactflow-pro",
      metrics: "12K+ GitHub stars, 500K+ weekly downloads"
    },
    {
      title: "Lighthouse AI",
      description: "AI-powered code review assistant that analyzes PRs for performance, security, and accessibility issues. Integrates with GitHub Actions for automated feedback.",
      technologies: ["Python", "GPT-4", "FastAPI", "Redis", "Docker"],
      link: "https://github.com/alexchen/lighthouse-ai",
      metrics: "Used by 50+ teams, 100K+ PRs analyzed"
    },
    {
      title: "Pulse Analytics",
      description: "Real-time analytics dashboard for developer productivity. Tracks PR velocity, code review times, and deployment frequency with actionable insights.",
      technologies: ["Next.js", "PostgreSQL", "GraphQL", "Recharts", "Vercel"],
      link: "https://github.com/alexchen/pulse-analytics",
      metrics: "2K+ active users, 4.8/5 rating"
    },
    {
      title: "TypeSafe Forms",
      description: "End-to-end type-safe form library for React with built-in validation, accessibility, and performance optimizations. Zero runtime overhead.",
      technologies: ["TypeScript", "React", "Zod", "React Hook Form"],
      link: "https://github.com/alexchen/typesafe-forms",
      metrics: "8K+ stars, adopted by 3 YC companies"
    },
    {
      title: "CloudSync Desktop",
      description: "Cross-platform file synchronization app with end-to-end encryption. Built with Rust for performance and security.",
      technologies: ["Rust", "Tauri", "React", "SQLite", "WebRTC"],
      link: "https://github.com/alexchen/cloudsync",
      metrics: "50K+ downloads, featured in Rust Weekly"
    },
    {
      title: "A11y Checker",
      description: "Browser extension and CLI tool for automated accessibility auditing. Provides actionable fixes with code examples.",
      technologies: ["JavaScript", "Chrome Extensions API", "Node.js", "Axe-core"],
      link: "https://github.com/alexchen/a11y-checker",
      metrics: "20K+ Chrome users, 4.9/5 rating"
    }
  ],

  skills: [
    { name: "React/Next.js", level: 98, category: "frontend" },
    { name: "TypeScript", level: 96, category: "languages" },
    { name: "Node.js", level: 92, category: "backend" },
    { name: "Python", level: 88, category: "languages" },
    { name: "GraphQL", level: 90, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "AWS", level: 88, category: "tools" },
    { name: "Docker/K8s", level: 82, category: "tools" },
    { name: "Three.js/WebGL", level: 80, category: "frontend" },
    { name: "Rust", level: 72, category: "languages" },
    { name: "Go", level: 68, category: "languages" },
    { name: "Redis", level: 78, category: "backend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "CI/CD", level: 85, category: "tools" },
    { name: "System Design", level: 88, category: "backend" },
    { name: "Performance Optimization", level: 92, category: "frontend" },
  ],

  achievements: [
    {
      title: "US Patent Holder",
      description: "Patent #11,234,567 for 'Real-time Collaborative Code Review System with ML-Powered Suggestions'",
      year: "2023",
      icon: "patent"
    },
    {
      title: "React Conf Speaker",
      description: "Presented 'Scaling React to 1M Components' at React Conf 2023 to 2,000+ attendees",
      year: "2023",
      icon: "speaker"
    },
    {
      title: "Top 100 OSS Contributor",
      description: "Recognized as top contributor to React ecosystem with 500+ merged PRs across core and community projects",
      year: "2022",
      icon: "github"
    },
    {
      title: "Forbes 30 Under 30 Nominee",
      description: "Nominated for Forbes 30 Under 30 in Technology category for open source contributions",
      year: "2022",
      icon: "award"
    },
    {
      title: "Stripe Impact Award",
      description: "Recognized for shipping critical PCI compliance features that enabled $50M in new enterprise contracts",
      year: "2021",
      icon: "trophy"
    },
    {
      title: "CHI Publication",
      description: "Co-authored 'Accessible Interfaces for Cognitive Disabilities' published at ACM CHI 2018",
      year: "2018",
      icon: "publication"
    }
  ],

  testimonials: [
    {
      name: "Sarah Mitchell",
      role: "Engineering Manager",
      company: "Meta",
      text: "Alex is one of the most impactful engineers I've managed. Their ability to break down complex problems and build consensus across teams is exceptional. They don't just ship features - they elevate everyone around them.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Park",
      role: "Staff Engineer",
      company: "Stripe",
      text: "Working with Alex on the fraud detection system was a masterclass in engineering excellence. Their attention to detail and commitment to code quality set a new standard for our team.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Airbnb",
      text: "Alex has a rare combination of technical depth and product intuition. They consistently pushed back on requirements that wouldn't serve users well, and proposed better alternatives.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Thompson",
      role: "CTO",
      company: "TechStartup (YC S21)",
      text: "We hired Alex as an advisor after using their open source library. Their guidance helped us scale from 10K to 1M users without rewriting our frontend. Worth every penny.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ],

  certifications: [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      link: "https://aws.amazon.com/certification/"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2022",
      link: "https://cloud.google.com/certification/"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2022",
      link: "https://www.cncf.io/certification/cka/"
    }
  ],

  contact: {
    email: "alex.chen@email.com",
    linkedin: "linkedin.com/in/alexchen-dev",
    github: "github.com/alexchen",
    twitter: "twitter.com/alexchen_dev",
    location: "San Francisco, CA",
    calendly: "calendly.com/alexchen"
  },

  stats: {
    yearsExperience: 6,
    projectsDelivered: 50,
    companiesWorked: 4,
    coffeeConsumed: 2847
  }
}
