import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-[60vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
                    Hacking <br />
                    Hardware.
                </h2>
                <p className="text-xl md:text-2xl text-text-muted max-w-2xl font-light leading-relaxed">
                    I break things to make them secure. Passionate about embedded systems, reverse engineering, and the future of automotive security.
                    <br></br>Would love to pivot to a cybersecurity space where I can use my passion for security and love for AI.
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
