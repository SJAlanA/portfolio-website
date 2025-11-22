import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Road Accident Detection',
        tech: 'Python, CNN, OpenCV',
        description: 'Developed a deep learning model achieving 89.73% AUC, reducing false positives by 10% in real-time accident detection. Implemented Resnet 18 and MLP for precise classification.',
    },
    {
        title: 'Manhole Scavenging Robot',
        tech: 'C, Arduino',
        description: 'Developed a load-detection system to stop motors upon impact, enhancing safety. Implemented PID control algorithms to improve encoder motor rotation accuracy by 100%.',
    },
    {
        title: 'Agri Spraying Drone',
        tech: 'Python, OpenCV, ESP8266',
        description: 'Automated Agri spraying Drone project responsible for integrating sensors with micro-controller and establishing auto-docking capabilities with Aruco.',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-accent">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-primary p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group"
                        >
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-sm text-accent mb-4">{project.tech}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
