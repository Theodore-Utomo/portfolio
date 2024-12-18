import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar fixed-top navbar-custom ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container d-flex justify-content-center">
        <div
          className={`navbar-wrapper rounded-pill px-4 py-2 ${
            darkMode ? 'bg-dark' : 'bg-white'
          }`}
        >
          <ul className="navbar-nav d-flex flex-row align-items-center justify-content-between">
            <li className="nav-item">
              <a
                className={`nav-link fw-semibold ${darkMode ? 'text-light' : 'text-dark'}`}
                href="#home"
              >
                Theodore Utomo
              </a>
            </li>
            {/* Dark Mode Toggle Button */}
            <button
              className="btn btn-outline-dark fw-semibold theme-toggle-button"
              onClick={toggleDarkMode}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <li className="nav-item d-flex flex-row">
              <a
                className={`nav-link fw-semibold me-3 ${
                  darkMode ? 'text-light' : 'text-dark'
                }`}
                href="#projects"
              >
                Projects
              </a>
              <a
                className={`nav-link fw-semibold ${
                  darkMode ? 'text-light' : 'text-dark'
                }`}
                href="#frankie"
              >
                Frankie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
