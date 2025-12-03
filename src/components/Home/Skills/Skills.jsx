import React from 'react';

const Skills = () => {
    const skills = [
        { 'language': 'Python', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { 'language': 'Java', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { 'language': 'React', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { 'language': 'HTML', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { 'language': 'CSS', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
        { 'language': 'JavaScript', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
        { 'language': 'C', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { 'language': 'C++', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg' },
        { 'language': 'Flask', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
        { 'language': 'NodeJS', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg' },
        { 'language': 'Swift', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-plain.svg' },
        { 'language': 'SQL', 'src': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg' }
    ];

    return (
        <section id="skills" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-[#004080] dark:text-blue-400 transition-colors duration-300">
                    Languages & Frameworks
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#004080] dark:via-blue-400 to-transparent mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative"
                    >
                        <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center justify-center cursor-pointer overflow-hidden">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700/30 dark:to-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            
                            {/* Icon container with modern styling */}
                            <div className="relative z-10 mb-3 sm:mb-4 p-3 sm:p-4 bg-gray-100 dark:bg-gray-200 rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                <img
                                    src={skill.src}
                                    alt={`${skill.language} logo`}
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Skill name */}
                            <h3 className="relative z-10 text-xs sm:text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 text-center transition-colors duration-300 group-hover:text-[#004080] dark:group-hover:text-blue-400">
                                {skill.language}
                            </h3>
                            
                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#004080] dark:via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
