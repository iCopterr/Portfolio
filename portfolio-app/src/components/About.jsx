import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Cpu, Globe, Heart } from 'lucide-react'

const highlights = [
  {
    icon: <GraduationCap size={20} className="text-accent-violet" />,
    label: 'Education',
    value: 'ICT Mahidol — Software Engineering Track (Year 3)',
  },
  {
    icon: <Globe size={20} className="text-accent-cyan" />,
    label: 'Focus',
    value: 'Full Stack Web · Software Engineer',
  },
  {
    icon: <Cpu size={20} className="text-accent-pink" />,
    label: 'Interests',
    value: 'Programming · AI/ML Integration · Clean Architecture',
  },
  {
    icon: <Heart size={20} className="text-rose-400" />,
    label: 'Currently',
    value: 'Seeking a Software Engineer Internship',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Left – text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent-violet text-sm tracking-widest uppercase mb-3">
            Who I am
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
            About Me
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink mb-8" />

          <div className="space-y-5 text-text-secondary text-base leading-relaxed">
            <p>
              I'm <span className="text-text-primary font-semibold">Sorayot Udomkijkosol</span>, a
              third-year ICT student at Mahidol University specializing in Software Engineering. I enjoy
              working across the full stack, from designing RESTful APIs and database schemas to
              building responsive and user-friendly frontends.
            </p>
            <p>
              My projects include a{' '}
              <span className="text-accent-violet">full-stack e-commerce platform</span> with
              authentication and admin systems, a{' '}
              <span className="text-accent-cyan">Flutter-based fitness app</span>, and a{' '}
              <span className="text-accent-pink">Python-based voice authentication system</span>{' '}
              involving signal processing. I focus on writing clean, maintainable code and building
              scalable systems.
            </p>
            <p>
              I’m particularly interested in pursuing a career as a full-stack / backend software
              engineer, using technologies such as React, Node.js, and Python. I’m always learning
              new tools, exploring software architecture patterns, and improving my development workflow.
            </p>
            <p>
              I'm currently seeking internship opportunities where I can contribute to real-world
              projects and grow as a software engineer.
            </p>
          </div>
        </motion.div>

        {/* Right – highlight cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-4 flex items-start gap-4 hover:border-accent-violet/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-bg-border flex items-center justify-center group-hover:bg-accent-purple/10 transition-colors duration-300">
                {h.icon}
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-0.5">
                  {h.label}
                </p>
                <p className="text-text-primary text-sm font-medium">{h.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
