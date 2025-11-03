import './App.css'
import { NavBar } from './components/NavBar'
import { Header } from './sections/Header';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';

function App() {

  return (
    <>
      <div className=''>
        <NavBar />
        <Header />
        <About />
        <Education />
        <Skills />
        <Projects />
      </div>
    </>
  )
}

export default App
