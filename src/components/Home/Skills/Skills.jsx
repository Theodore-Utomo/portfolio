import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { 'language': 'Python', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { 'language': 'Java', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { 'language': 'React', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { 'language': 'HTML', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { 'language': 'CSS', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
        { 'language': 'JavaScript', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
        { 'language': 'C', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg' },
        { 'language': 'C++', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg' },
        { 'language': 'Flask', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
        { 'language': 'NodeJS', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg' },
        { 'language': 'Swift', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-plain.svg' },
        { 'language': 'SQL', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg' }
    ];

    return (
        <section id="skills" className="container custom-width flex-column text-center my-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-10 text-center mb-3">
                    <h1 className="fw-bold display-4 mb-0 text-primary">Languages/Frameworks</h1>
                </div>
            </div>
            <div className="row g-4 justify-content-center">
                {skills.map((skill, index) => (
                    <div key={index} className="col-4 col-sm-3 col-md-2">
                        <div className="card h-100 shadow-sm skill-card">
                            <div className="card-body p-2 text-center d-flex flex-column align-items-center">
                                <img
                                    src={skill.src}
                                    alt={`${skill.language} logo`}
                                    className="skill-logo mb-1 shadow-lg"
                                    style={{width: '40px', height: '40px'}}
                                />
                                <h6 className="card-title fs-5text-dark mb-0">{skill.language}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
