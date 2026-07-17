import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/global.css';
import './styles/components.css';

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="container">
          <div className="divider" />
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
