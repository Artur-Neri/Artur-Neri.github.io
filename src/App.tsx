import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tech />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
