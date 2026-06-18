import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Journey from '../sections/Journey'
import Contact from '../sections/Contact'

export default function Home() {

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex grow flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
