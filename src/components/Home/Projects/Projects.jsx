import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'MoveOS iOS App',
            description: 'Track, record, and revolutionize your fitness',
            image: '', // Placeholder for image
        },
        {
            title: 'Restaurant Recommender API',
            description: 'Get restaurant recommendations from the Boston area',
            image: '', // Placeholder for image
        },
    ];

    return (
        <section id="projects" className="container my-5 flex-column">
            <div className="text-center mb-2">
                <h2 className="fw-bold display-6 mb-0 text-primary">Recent Projects</h2>
            </div>
            <div className="text-center mt-1 mb-1">
                <a
                    href="/projects" /* Update this link to your full projects page */
                    className="more-projects-link text-primary fw-bold"
                >
                    More projects →
                </a>
            </div>
            <div className="row g-4 justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6">
                        <div className="card project-card shadow-sm">
                            <div className="project-image bg-light">
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
                            {/* Project Content */}
                            <div className="card-body">
                                <h3 className="card-title fw-bold">{project.title}</h3>
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
}

export default Projects;