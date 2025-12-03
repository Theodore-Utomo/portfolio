import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'DeepFrankAI Cat Body Language Analyzer',
      description: 'AI tool to interpret your cat\'s mood from images that uses a combination of OpenCV and Generative AI to interpret your cat\'s body language.',
      link: 'https://github.com/Theodore-Utomo/DeepFrank',
      tags: ["AI", "Deep Learning", "Python", "FastAPI", "Generative AI", "NextJS", "TypeScript", "PostgreSQL"]
    },
    {
      title: 'Gallaugher\'s Quizzes',
      description: 'Interactive quizzes on Full-Stack Development with Swift. Test your skills and knowledge of Full-Stack Development with these quizzes.',
      link: 'https://github.com/Theodore-Utomo/swift-ios-quizzes',
      tags: ["Full-Stack Development", "Swift", "React", "TypeScript"]
    },
    {
      title: 'Cough Audio Predictions',
      description: 'A machine learning project that uses a convolutional neural network to predict the likelihood of illness from cough audio. The model is trained on a dataset of cough audio files and is able to predict the likelihood of a illness with an accuracy of 75%.',
      link: 'https://github.com/Theodore-Utomo/cough-audio-predictions',
      tags: ["Python", "PyTorch", "Deep-Learning", "Convolutional Neural Network", "Sci-kit Learn", "NumPy"]
    },
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
      <h1 className="text-center text-3xl font-bold mb-4 text-[#004080]">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-12 mb-4">
            <div className="card project-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-bold text-[#004080]">{project.title}</h5>
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
                  className="btn btn-primary text-[#004080] github-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "2px solid #004080",
                    borderRadius: "6px",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                    outline: "none"
                  }}
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
