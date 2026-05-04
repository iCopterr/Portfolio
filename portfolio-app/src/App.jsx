import React from 'react'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Projects       from './components/Projects'
import Skills         from './components/Skills'
import About          from './components/About'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
