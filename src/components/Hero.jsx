import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, FileText } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        Sahai Jordi <span className="text-accent">Alan</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        Automotive Cybersecurity Engineer
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Hacking hardware is a fun thing to do. Passionate about embedded systems, reverse engineering, and securing the future of mobility.
                    </p>

                    <div className="flex justify-center space-x-6 mb-12">
                        <SocialLink href="mailto:sahaijordialan@gmail.com" icon={<Mail />} label="Email" />
                        <SocialLink href="https://www.linkedin.com/in/sahaijordialana" icon={<Linkedin />} label="LinkedIn" />
                        <SocialLink href="https://github.com/SJAlanA" icon={<Github />} label="GitHub" />
                        <SocialLink href="https://leetcode.com/u/Sahai-Jordi-Alan-A/" icon={<Code />} label="LeetCode" />
                        <SocialLink href="https://drive.google.com/file/d/14SyyiRn4AGiqhnMCMyK0d3XzGwkWLtFC/view?usp=sharing" icon={<FileText />} label="Resume" />
                    </div>

                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-transform hover:scale-105">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-transform hover:scale-105">
                            Hire Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Hero;
