import React from 'react'

/** Subtle visual separator between sections */
export default function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bg-border to-transparent" />
    </div>
  )
}
