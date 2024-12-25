import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import MoveOS from "./MoveOS.png";
import Restaurant from "./Restaurant.png";

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'MoveOS iOS App',
            description: 'Track, record, and revolutionize your fitness',
            image: MoveOS,
        },
        {
            title: 'Restaurant Recommender API',
            description: 'Get restaurant recommendations from the Boston area',
            image: Restaurant,
        },
    ];

    return (
        <section id="projects" className="container my-5 flex-column">
            <div className="text-center mb-2">
                <h2 className="fw-bold display-6 mb-0 text-primary">Recent Projects</h2>
            </div>
            <div className="text-center mt-1 mb-1">
                <Link
                    to="/projects"
                    state={{ darkMode }} /* Pass darkMode state to the projects page */
                    className="more-projects-link text-primary fw-bold"
                >
                    More projects →
                </Link>
            </div>
            <div className="row g-4 justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6">
                        <div className="card project-card shadow-sm">
                            <div className="project-image">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="img-fluid"
                                    />
                                ) : (
                                    <div className="placeholder-image"></div>
                                )}
                            </div>
                            <div className="card-body">
                                <h3 className="card-title fw-bold mt-3">{project.title}</h3>
                                <p className="card-text text-muted">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
