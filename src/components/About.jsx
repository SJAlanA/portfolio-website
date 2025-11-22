import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    'Cyber Security', 'ARM', 'Python',
    'C', 'Assembly', 'Reverse Engineering',
    'ISO 21434', 'UDS', 'CAN'
];

const About = () => {
    return (
        <section id="about">
            <h3 className="text-sm font-mono text-text-muted mb-8 uppercase tracking-widest">About</h3>
            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6 text-lg font-light text-text-muted leading-relaxed">
                    <p>
                        <span className="text-white font-medium">I'm Sahai Jordi Alan</span>, an Electronics and Communication Engineering student at the College of Engineering, Guindy. My work sits at the intersection of hardware and security.
                    </p>
                    <p>
                        Currently, I'm a Cyber Security Engineer at Tata Elxsi, diving deep into network protocols and reverse engineering. I also lead projects at the CEG Tech Forum, bridging the gap between academic theory and practical innovation.
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
        </section>
    );
};

export default About;
