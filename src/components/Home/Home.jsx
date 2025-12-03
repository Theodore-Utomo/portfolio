import React from 'react';
import Introduction from './Introduction/Introduction.jsx';
import Skills from './Skills/Skills.jsx';
import Experience from './Experience/Experience.jsx';
import Projects from './Projects/Projects.jsx';

const Home = () => {
  return (
    <div>
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
