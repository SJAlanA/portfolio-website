import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    'Cyber Security', 'ARM', 'Python',
    'C', 'Assembly', 'Reverse Engineering',
    'ISO 21434', 'UDS', 'CAN'
];

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-accent">Me</span></h2>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            👋 Hi there! I'm Sahai Jordi Alan, an Electronics and Communication Engineering student at the College of Engineering, Guindy, with a strong passion for technology, cybersecurity, and innovation.
                        </p>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            💻 As a Cyber Security Engineer at Tata Elxsi, I am gaining hands-on experience in network protocols, reverse engineering, and key programming languages like Python, C, ARM Assembly, and Bash.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            🚀 As the Projects Student Director at CEG Tech Forum, I’ve led over 150 students, managing 14+ projects and organizing Kurukshetra. I thrive in collaborative, agile environments.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-secondary rounded-full text-sm text-gray-300 border border-gray-700 hover:border-accent hover:text-accent transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
