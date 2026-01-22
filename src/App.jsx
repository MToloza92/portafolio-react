import Header from "./components/Header";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About.jsx";

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Header />
      <SocialSidebar position="left" />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
