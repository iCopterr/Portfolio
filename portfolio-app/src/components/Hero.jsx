import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowDown, Code2 } from 'lucide-react'
import GithubIcon from './GithubIcon'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 30 },
  animate:   { opacity: 1, y: 0  },
  transition:{ duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-purple opacity-[0.06] blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-pink opacity-[0.04] blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-text-secondary text-sm font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for internship
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.25)} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none">
          <span className="text-text-primary">Sorayot</span>{' '}
          <span className="text-gradient">Udomkijkosol</span>
        </motion.h1>

        {/* Role */}
        <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-3 mb-6">
          <Code2 size={18} className="text-accent-violet" />
          <p className="text-text-secondary text-lg md:text-xl font-medium">
            Full Stack Developer · ICT Mahidol · Year 3
          </p>
        </motion.div>

        {/* Intro */}
        <motion.p {...fadeUp(0.55)} className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about building scalable web apps, mobile experiences, and intelligent systems.
          Studying Software Engineering at Mahidol University — turning ideas into production-ready products.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.7)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="hero-view-projects"
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-accent-purple hover:bg-accent-violet text-white font-semibold text-sm transition-all duration-300 shadow-glow-sm hover:shadow-glow-md hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            id="hero-github"
            href="https://github.com/iCopterr"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-xl glass hover:border-accent-violet text-text-primary font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            id="hero-contact"
            href="#contact"
            className="px-7 py-3.5 rounded-xl glass hover:border-accent-violet text-text-primary font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs"
      >
        <span className="font-mono">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
