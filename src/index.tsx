import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
