import Hero from './components/Hero/Hero.jsx'
import './App.scss'
import Education from './components/Education/Education.jsx'
import Projects from './components/Projects/Projects.jsx'
import MyWork from './components/MyWork/MyWork.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <div class="element"></div>
      <Router>
        <Hero /> {/* Hero section is visible on all pages */}
        <div className="app-container">
          {/* Define Routes */}
          <Routes>
            {/* Define Route paths with elements */}
            <Route path="/" element={<Education />} />
            <Route path="/about" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<MyWork />} />
            <Route path="/contact" element={<MyWork />} />
          </Routes>
        </div>
      </Router>
      
    </>
  )
}

export default App
