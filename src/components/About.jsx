import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/SJAlan.jpg';

const skills = [
    'Cybersecurity', 'Penetration Testing', 'MITRE ATT&CK',
    'Network protocols', 'Assembly', 'Reverse Engineering',
    'C/C++', 'SQL', 'Python',
    'OWASP Top 10'
];

const About = () => {
    return (
        <section id="about">
            <h3 className="text-sm font-mono text-text-muted mb-12 uppercase tracking-widest">About</h3>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="shrink-0"
                >
                    <div className="relative group cursor-pointer">
                        {/* Gradient glow behind the image */}
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-500">
                            <img
                                src={profileImg}
                                alt="Sahai Jordi Alan"
                                className="w-56 h-56 md:w-64 md:h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Bio + Skills */}
                <div className="flex-1 space-y-10">
                    <div className="space-y-6 text-lg font-light text-text-muted leading-relaxed">
                        <p>
                            <span className="text-white font-medium">Hi, I'm Alan.</span> I'm an engineer transitioning into Product & Project Management, with a background in embedded systems and cybersecurity.
                        </p>
                        <p>
                            I'll be pursuing Engineering Management at Cornell, where I'm focusing on building scalable, user-centric technology products.
                        </p>
                        <p>
                            I enjoy turning complex technical problems into structured, deliverable solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Technical Arsenal</h4>
                        <ul className="grid grid-cols-2 gap-y-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="text-text-muted flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
