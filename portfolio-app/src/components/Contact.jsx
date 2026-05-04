import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import GithubIcon from './GithubIcon'

const contactLinks = [
  {
    id: 'contact-github',
    icon: <GithubIcon size={22} />,
    label: 'GitHub',
    value: '@iCopterr',
    href: 'https://github.com/iCopterr',
    color: 'hover:border-purple-500/50 hover:text-white',
  },
  {
    id: 'contact-email',
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'sorayot.udo@student.mahidol.edu',
    href: 'mailto:sorayot.udo@student.mahidol.edu',
    color: 'hover:border-cyan-500/50 hover:text-white',
  },
  {
    id: 'contact-phone',
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '0822328165',
    href: 'tel:0822328165',
    color: 'hover:border-emerald-500/50 hover:text-white',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p className="font-mono text-accent-violet text-sm tracking-widest uppercase mb-3">
          Get in touch
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
          Contact
        </h2>
        <p className="text-text-secondary max-w-lg mx-auto text-base">
          I'm currently open to internship opportunities. Feel free to reach out via any of the channels below.
        </p>
        <div className="mx-auto mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink" />
      </motion.div>

      <div className="max-w-lg mx-auto">
        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-5 justify-center"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-xl p-5 flex items-center gap-5 text-text-secondary transition-all duration-300 ${link.color}`}
            >
              <div className="w-12 h-12 rounded-lg bg-bg-border flex items-center justify-center text-accent-violet flex-shrink-0">
                {link.icon}
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1">
                  {link.label}
                </p>
                <p className="text-base font-medium text-text-primary">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
