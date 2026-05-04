import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import GithubIcon from './GithubIcon'

/**
 * Reusable Project Card component
 * Props: title, description, tech[], githubUrl, demoUrl, featured, icon, gradient
 */
export default function ProjectCard({
  title,
  description,
  tech = [],
  githubUrl,
  demoUrl,
  featured = false,
  icon,
  gradient,
  index = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative group rounded-2xl overflow-hidden transition-shadow duration-300 ${
        featured
          ? 'border border-accent-violet/30 shadow-card hover:shadow-card-hover'
          : 'border border-bg-border hover:border-accent-violet/30 shadow-card hover:shadow-card-hover'
      }`}
      style={{ background: '#16161e' }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: gradient || 'linear-gradient(90deg,#7c3aed,#ec4899)' }}
      />

      {/* Subtle inner glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="p-6 flex flex-col h-full gap-4 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          {/* Icon bubble */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: 'rgba(124,58,237,0.1)' }}
          >
            {icon}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 pt-0.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} GitHub`}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-border transition-all duration-200"
              >
              <GithubIcon size={16} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} demo`}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-border transition-all duration-200"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <div>
          {featured && (
            <span className="inline-block text-[10px] font-mono font-semibold tracking-widest uppercase text-accent-violet mb-2">
              Featured
            </span>
          )}
          <h3 className="text-text-primary font-bold text-lg leading-snug group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-bg-border">
          {tech.map(t => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full text-accent-violet bg-accent-purple/10 border border-accent-purple/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
