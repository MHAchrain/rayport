import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'

export default function Home() {

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="grow">
          <Hero />
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
}
