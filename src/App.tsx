import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Tech from './components/Tech'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { getProject } from './data/projects'
import { useHashRoute } from './useHashRoute'

const HOME_TITLE = 'Artur Neri — Web Dev & Automação'

function App() {
  const route = useHashRoute()

  useEffect(() => {
    if (route.name === 'project') {
      const project = getProject(route.slug)
      document.title = project
        ? `${project.title} · Artur Neri`
        : 'Projeto não encontrado · Artur Neri'
      window.scrollTo(0, 0)
      return
    }

    document.title = HOME_TITLE

    const id = window.location.hash.replace('#', '')
    if (id && !id.startsWith('/')) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [route])

  return (
    <>
      <Nav />
      <main>
        {route.name === 'project' ? (
          <ProjectDetail slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Tech />
            <Services />
            <Process />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
