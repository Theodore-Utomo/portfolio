import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'MoveOS iOS App',
            description: 'An iOS app that lets users track their sets and workouts and allows users to use a generate personalized workout feature. Provides different progression metrics through graphs. Built with Swift and Google Cloud Firestore.',
            link: 'https://github.com/Theodore-Utomo/MoveOS',
            tags: ["Full-Stack Development", "Swift", "Google Cloud FireStore"]
        },
        {
            title: 'Restaurant Recommender API',
            description: 'An API built with Flask that uses machine learning models with Sci-kit learn to recommend restaurants. Uses real data from Boston restaurants given by Yelp.',
            link: 'https://github.com/Theodore-Utomo/PythonRecommendationsAPI',
            tags: ["Python", "Machine-Learning", "Flask"]
        },
        {
            title: 'Neural Network From Scratch',
            description: 'A sequential neural network machine learning model coded and designed from scratch. Was designed in Python without using any machine learning libraries (Tensorflow, Pytorch, etc.). Only NumPy.',
            link: 'https://github.com/Theodore-Utomo/NeuralNetworkFromScratch',
            tags: ["Python", "NumPy", "Deep-Learning"]
        },
        {
            title: "Application Tracker",
            description: "An iOS app designed using Swift and SwiftData that lets users track and record the status of job applications. Similar to Simplify's application tracking feature.",
            link: 'https://github.com/Theodore-Utomo/ApplicationTracker',
            tags: ["Swift", "SwiftData"]
        },
        {
            title: "NBA Predictor",
            description: "A machine learning group project that is trained on the NBA Dataset from Kaggle to predict the outcome of NBA Games. Predicts with 88% accuracy using an ensemble model consisting of a logistic regression model, neural network, and XGBoost.",
            link: 'https://github.com/Theodore-Utomo/NBA_Predictor',
            tags: ["Machine-Learning", "Python", "Sci-kit Learn", "TensorFlow", "NumPy"]
        }
    ];

    return (
        <div className="projects-container container flex-column mt-2">
            <h1 className="text-center mb-4">My Projects</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 mb-4">
                        <div className="card project-card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <div className="tags mb-3">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="badge bg-secondary me-2">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="btn btn-primary github-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
