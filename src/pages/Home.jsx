import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'

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
        </main>
        <Footer />
      </div>
    </>
  )
}
