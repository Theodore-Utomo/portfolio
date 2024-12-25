import React from 'react';
import './Introduction.css';
import headshot from './Headshot.jpg';

const Introduction = () => {
  const name = "Theodore Utomo";
  const nameLetters = name.split('');

  return (
    <section id="home" className="container custom-width text-center my-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-10 text-start mb-4">
          <div className="d-flex align-items-center">
            <div className="image-container">
              <img
                src={headshot}
                alt="Theodore Utomo"
                className="me-3 rounded-circle img-line shadow-lg"
              />
              <div className="spinning-border"></div>
            </div>
            <div>
              <h1 className="fw-bold display-4 mb-0">
                <span className="text-secondary">Hi, I'm</span>{' '}
                <span className="text-primary ms-1">
                  {nameLetters.map((letter, index) => (
                    <span key={index} className="name-letter">
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </span>
              </h1>
              <div className="d-flex align-items-center mt-2 looking-for-work">
                <div className="green-circle me-2"></div>
                <span>Looking for work</span>
              </div>
            </div>
          </div>
          <p className="fs-5 text-muted mt-3">
            I am a Software engineer with 5+ years of coding experience.
            I specialize in full-stack mobile development and machine learning.
          </p>
          <p className="fs-6">
            <strong>Computer Science Major</strong> and <strong>Finance Minor</strong> <br />
            Boston College, Class of 2026
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/Theodore-Utomo"
              className="btn btn-dark btn-lg me-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github me-1"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/theodore-utomo-00698b285/"
              className="btn btn-primary btn-lg me-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin me-1"></i> LinkedIn
            </a>
            <a
              href="mailto:theodoreutomo@gmail.com"
              className="btn btn-success btn-lg shadow-sm"
            >
              <i className="bi bi-envelope me-1"></i> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;