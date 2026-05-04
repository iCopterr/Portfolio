import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title:       'E-Commerce Website',
    description:
      'Full-stack web application featuring a secure authentication system, an admin dashboard for product & order management, and cloud image uploads. Built for real-world retail use cases with a clean customer-facing storefront.',
    tech:     ['Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon:     '🛒',
    gradient: 'linear-gradient(90deg,#7c3aed,#2563eb)',
    featured: true,
    githubUrl: 'https://github.com/iCopterr',
  },
  {
    title:       'Fitness Tracking App',
    description:
      'Cross-platform mobile application that lets users log workouts, set personal goals, and visualise progress over time with interactive charts. Offline-first with local SQLite persistence.',
    tech:     ['Flutter', 'Dart', 'SQLite'],
    icon:     '💪',
    gradient: 'linear-gradient(90deg,#059669,#0ea5e9)',
    githubUrl: 'https://github.com/iCopterr',
  },
  {
    title:       'Voice Authentication System',
    description:
      'Speaker verification pipeline using signal processing techniques. Extracts frequency-domain features via FFT and measures speaker similarity with cosine distance — achieving reliable identity verification without deep learning.',
    tech:     ['Python', 'NumPy', 'SciPy'],
    icon:     '🎙️',
    gradient: 'linear-gradient(90deg,#ec4899,#f59e0b)',
    githubUrl: 'https://github.com/iCopterr',
  },
  {
    title:       'Automation System for Repetitive Tasks',
    description:
      'A Python-based automation tool engineered to simulate user input and handle repetitive tasks efficiently. Focused on robust logic execution, precise timing control, and optimization of task workflows.',
    tech:     ['Python', 'Task Automation', 'Input Simulation'],
    icon:     '⚙️',
    gradient: 'linear-gradient(90deg,#8b5cf6,#14b8a6)',
    githubUrl: 'https://github.com/iCopterr',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono text-accent-violet text-sm tracking-widest uppercase mb-3">
          What I've built
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
          Projects
        </h2>
        <p className="text-text-secondary max-w-lg mx-auto text-base">
          A selection of real projects spanning web, mobile, and systems programming.
        </p>
        {/* Decorative divider */}
        <div className="mx-auto mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
      </motion.div>

      {/* Cards grid — featured card spans full width on desktop */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Featured (full width) */}
        <div className="md:col-span-2">
          <ProjectCard {...projects[0]} index={0} />
        </div>
        {/* Two side-by-side */}
        <ProjectCard {...projects[1]} index={1} />
        <ProjectCard {...projects[2]} index={2} />
        <ProjectCard {...projects[3]} index={3} />
      </div>
    </section>
  )
}
