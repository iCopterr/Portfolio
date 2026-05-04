import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Languages',
    icon: '⌨️',
    color: 'from-violet-500 to-purple-600',
    skills: ['JavaScript', 'Python', 'Dart', 'HTML', 'CSS', 'C'],
  },
  {
    label: 'Frontend',
    icon: '🖥️',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Flutter'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Node.js', 'Express', 'REST API', 'FLASK'],
  },
  {
    label: 'Database',
    icon: '🗄️',
    color: 'from-orange-500 to-rose-500',
    skills: ['MySQL', 'SQLite'],
  },
  {
    label: 'Tools & Other',
    icon: '🛠️',
    color: 'from-pink-500 to-fuchsia-600',
    skills: ['Git', 'GitHub', 'NumPy', 'SciPy', 'FFT'],
  },
]

function SkillBadge({ name, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.07 }}
      className="inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium text-text-primary border border-bg-border bg-bg-card hover:border-accent-violet/40 hover:text-accent-violet transition-all duration-200 cursor-default"
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono text-accent-violet text-sm tracking-widest uppercase mb-3">
          What I work with
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">Skills</h2>
        <div className="mx-auto mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
      </motion.div>

      {/* Groups */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-accent-violet/30 transition-all duration-300"
          >
            {/* Group header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br ${group.color} shadow-glow-sm`}>
                {group.icon}
              </div>
              <h3 className="text-text-primary font-semibold">{group.label}</h3>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s, si) => (
                <SkillBadge key={s} name={s} delay={gi * 0.08 + si * 0.05} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
