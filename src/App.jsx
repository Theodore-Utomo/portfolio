import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import './index.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Contact/>
    </div>
  );
}

export default App;
