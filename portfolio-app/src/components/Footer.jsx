import React from 'react'
import GithubIcon from './GithubIcon'

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          © {new Date().getFullYear()} Sorayot Udomkijkosol
        </p>
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <span>Built with React + Tailwind</span>
          <span>·</span>
          <a
            href="https://github.com/iCopterr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-accent-violet transition-colors duration-200"
          >
            <GithubIcon size={14} />
            iCopterr
          </a>
        </div>
      </div>
    </footer>
  )
}
