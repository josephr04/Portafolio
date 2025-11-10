import './App.css'
import { NavBar } from './components/NavBar'
import { Header } from './sections/Header';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        <ScrollProgressBar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  )
}

export default App
