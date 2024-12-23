import Hero from './components/Hero/Hero.jsx'
import Nav from './components/Nav/Nav.jsx'
import './App.scss'
import Education from './components/Education/Education.jsx'
import Projects from './components/Projects/Projects.jsx'
import MyWork from './components/MyWork/MyWork.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx'
import { Contact } from './components/contact/Contact.jsx'

function App() {


  return (
    <>
      <Router>
      {/* Nav component with anchor links */}
      <Nav />
      
      <div className="app-container">
        {/* Sectioned content */}
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Education />
        </section>

        <section id="projects">
          <MyWork />
        </section>

        <section id="contact">
          <Contact/>
        </section>
      </div>
    </Router>
    </>
  )
}

export default App
