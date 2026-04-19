import { useState, useCallback } from 'react'
import IntroAnimation from './components/IntroAnimation'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import ProjectsExtra from './components/Projects/ProjectsExtra'

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const handleIntroComplete = useCallback(() => setIntroComplete(true), [])

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}

      <main className={`min-h-screen bg-bg transition-opacity duration-700 ${
        introComplete ? 'opacity-100' : 'opacity-0'
      }`}>
        <Hero />
        <Skills />
        <Projects />
        <ProjectsExtra />
      </main>
    </>
  )
}

export default App
