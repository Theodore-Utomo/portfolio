import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Care Hero",
            title: "Software Engineering Intern",
            technologies: ["TypeScript", "NextJS", "NestJS", "PostgreSQL", "Docker", "AWS"],
            type: "Internship",
            date: "2025"
        },
        {
            company: "Boston College",
            title: "Mobile App Development Teaching Assistant",
            technologies: ["Swift", "SwiftUI", "Xcode", "Git"],
            type: "Teaching Assistant",
            date: "2025"
        },
        {
            company: "Halodoc",
            title: "Data Engineering Intern",
            technologies: ["Python", "SQL", "Docker", "AWS"],
            type: "Internship",
            date: "2023"
        },
        {
            company: "Sinbad",
            title: "Software Engineering Intern",
            technologies: ["React", "TypeScript"],
            type: "Internship",
            date: "2021"
        }
    ];

    return (
        <section id="experience" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-[#004080] transition-colors duration-300">
                    Work Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#004080] to-transparent mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="group relative"
                    >
                        <div className="relative bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header: Employment Type Badge and Date */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block px-3 py-1 bg-[#004080] text-white text-sm font-medium rounded-full">
                                        {experience.type}
                                    </span>
                                    {experience.date && (
                                        <p className="text-sm text-gray-500 font-medium">
                                            {experience.date}
                                        </p>
                                    )}
                                </div>

                                {/* Company and Title */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#004080] transition-colors duration-300">
                                        {experience.company}
                                    </h3>
                                    <p className="text-base text-gray-700 font-semibold">
                                        {experience.title}
                                    </p>
                                </div>

                                {/* Technologies - Show All */}
                                <div className="mt-auto">
                                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">Technologies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-[#004080] transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#004080] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

