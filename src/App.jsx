import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}
