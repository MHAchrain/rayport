import Navbar from '../components/Navbar'

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="grow">
        <section id="home" className="flex h-screen items-center justify-center ">
          <h1 className="text-4xl font-bold text-white">Welcome to the Home Page</h1>
        </section>
      </main>
    </>
  )
}
