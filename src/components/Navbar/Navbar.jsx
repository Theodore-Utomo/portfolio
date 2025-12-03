import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-custom">
      <div className="container d-flex justify-content-center">
        <div className="navbar-wrapper rounded-pill px-4 py-2 bg-white">
          <ul className="navbar-nav d-flex flex-row align-items-center justify-content-between">
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold text-dark"
                to="/"
              >
                Theodore Utomo
              </Link>
            </li>
            <li className="nav-item d-flex flex-row">
              <Link
                className="nav-link fw-semibold me-3 text-dark"
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
