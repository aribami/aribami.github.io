import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Achievements />

      <Certifications />

      <Contact />

      <Footer />
    </div>
  )
}