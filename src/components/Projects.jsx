import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Road Accident Detection',
        tech: 'Python, CNN, OpenCV',
        description: 'Deep learning model achieving 89.73% AUC in real-time accident detection.',
    },
    {
        title: 'Manhole Scavenging Robot',
        tech: 'C, Arduino',
        description: 'Load-detection system for safety with PID control algorithms.',
    },
    {
        title: 'Agri Spraying Drone',
        tech: 'Python, OpenCV, ESP8266',
        description: 'Automated drone with sensor integration and auto-docking capabilities.',
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h3 className="text-sm font-mono text-text-muted mb-8 uppercase tracking-widest">Selected Work</h3>
            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group border-b border-white/10 pb-12 last:border-0"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                            <h4 className="text-3xl font-bold group-hover:text-text-muted transition-colors">{project.title}</h4>
                            <span className="text-sm font-mono text-text-muted mt-2 md:mt-0">{project.tech}</span>
                        </div>
                        <p className="text-lg text-text-muted max-w-3xl font-light">
                            {project.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
