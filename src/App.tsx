import './App.css'
import { NavBar } from './components/NavBar'
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Footer } from './components/Footer';
import { Contact } from './sections/Contact';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className=''>
          <NavBar />
          <ScrollProgressBar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
