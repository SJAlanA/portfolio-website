import React from 'react';
import { Github, Linkedin, Mail, Code, FileText } from 'lucide-react';

const Navbar = () => {
    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Articles', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="h-full flex flex-col">
            {/* Header / Logo Area */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tighter mb-2">
                    Sahai Jordi Alan
                </h1>
                <p className="text-text-muted text-lg font-light">
                    Automotive Cybersecurity Engineer
                </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow flex flex-col justify-center space-y-6">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-medium text-text-muted hover:text-white transition-colors w-fit group flex items-center"
                    >
                        <span className="w-0 group-hover:w-4 transition-all duration-300 h-[1px] bg-white mr-0 group-hover:mr-3"></span>
                        {link.name}
                    </a>
                ))}
            </nav>

            {/* Social Icons */}
            <div className="mt-12 flex gap-6">
                <SocialLink href="mailto:sahaijordialan@gmail.com" icon={<Mail size={20} />} label="Email" />
                <SocialLink href="https://www.linkedin.com/in/sahaijordialana" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://github.com/SJAlanA" icon={<Github size={20} />} label="GitHub" />
                <SocialLink href="https://leetcode.com/u/Sahai-Jordi-Alan-A/" icon={<Code size={20} />} label="LeetCode" />
                <SocialLink href="https://drive.google.com/file/d/1f9gPugeFlgaCjzuxUeYraI-qZHg1OKZX/view?usp=sharing" icon={<FileText size={20} />} label="Resume" />
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-white transition-colors"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Navbar;
