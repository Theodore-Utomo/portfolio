import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar fixed-top navbar-custom ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container d-flex justify-content-center">
        <div className={`navbar-wrapper rounded-pill px-4 py-2 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
          <ul className="navbar-nav d-flex flex-row align-items-center justify-content-between">
            <li className="nav-item">
              <Link
                className={`nav-link fw-semibold ${darkMode ? 'text-light' : 'text-dark'}`}
                to="/"
              >
                Theodore Utomo
              </Link>
            </li>
            <button
              className="btn btn-outline-dark fw-semibold theme-toggle-button me-3"
              onClick={toggleDarkMode}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <li className="nav-item d-flex flex-row">
              <Link
                className={`nav-link fw-semibold me-3 ${darkMode ? 'text-light' : 'text-dark'}`}
                to="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
