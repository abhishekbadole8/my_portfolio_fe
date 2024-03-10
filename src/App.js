import React from 'react'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
