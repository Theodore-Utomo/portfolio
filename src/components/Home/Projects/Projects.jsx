import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'DeepFrankAI Cat Body Language Analyzer',
            description: 'AI tool to interpret your cat\'s mood from images.',
        },
        {
            title: 'Gallaugher\'s Quizzes',
            description: 'Interactive quizzes on Full-Stack Development with Swift',
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
                    className="more-projects-link text-primary fw-bold"
                >
                    More projects →
                </Link>
            </div>
            <div className="row g-4 justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6">
                        <div className="card project-card shadow-sm">
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
};

export default Projects;
