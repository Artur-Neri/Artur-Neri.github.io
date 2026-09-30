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
import { useI18n } from './i18n'

function App() {
  const route = useHashRoute()
  const { t, lang } = useI18n()

  useEffect(() => {
    if (route.name === 'project') {
      const project = getProject(route.slug)
      document.title = project
        ? `${project.title[lang]} · Artur Neri`
        : t.projects.docTitle
      window.scrollTo(0, 0)
      return
    }

    document.title = t.meta.title

    const id = window.location.hash.replace('#', '')
    if (id && !id.startsWith('/')) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [route, lang, t])

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
