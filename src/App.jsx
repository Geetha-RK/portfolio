import Hero from "./components/Hero/Hero.jsx";
import Nav from "./components/Nav/Nav.jsx";
import "./App.scss";
import Education from "./components/Education/Education.jsx";
import MyWork from "./components/MyWork/MyWork.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About/About.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <div className="app-container">
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
            <Contact />
          </section>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
