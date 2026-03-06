// src/App.jsx
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Import Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Global Styles
import './App.scss';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
    });
    
    // Smooth reveal animations
    sr.reveal('[class*="homeData"]', {});
    sr.reveal('[class*="aboutImg"]', { delay: 400 });
    sr.reveal('[class*="aboutText"]', { delay: 400 });
    sr.reveal('[class*="card"]', { interval: 200 });
  }, []);

  return (
    <>
      <Navbar />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;