import React from 'react';
import './Navbar.css'; // Import the updated CSS file

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-custom">
      <div className="container d-flex justify-content-center">
        <div className="navbar-wrapper rounded-pill bg-white px-4 py-2 shadow-sm">
          <ul className="navbar-nav d-flex flex-row align-items-center justify-content-between">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#home">
                Theodore Utomo
              </a>
            </li>
            <li className="nav-item d-flex flex-row">
              <a className="nav-link text-dark fw-semibold me-3" href="#projects">
                Projects
              </a>
              <a className="nav-link text-dark fw-semibold" href="#frankie">
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
