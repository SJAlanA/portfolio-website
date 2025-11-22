import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
    {
        title: 'My journey at CEG Tech Forum as Projects and Research Student Director',
        date: 'July 2024',
        link: 'https://www.linkedin.com/posts/sahaijordialana_projects-cegtechforum-kurukshetra-activity-7198382442422951937-2-xW'
    },
    {
        title: 'Starting my career in automotive cybersecurity',
        date: 'June 2024',
        link: 'https://www.linkedin.com/posts/sahaijordialana_cybersecurity-internship-careergrowth-activity-7222298401470652416-zmyg'
    },
];

const Blog = () => {
    return (
        <section id="blog">
            <h3 className="text-sm font-mono text-text-muted mb-8 uppercase tracking-widest">Writing</h3>
            <div className="flex flex-col">
                {blogPosts.map((post, index) => (
                    <a
                        key={index}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between py-6 border-b border-white/10 hover:border-white transition-colors"
                    >
                        <h4 className="text-xl font-medium group-hover:text-white transition-colors w-3/4">
                            {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-text-muted group-hover:text-white transition-colors">
                            <span className="text-sm font-mono">{post.date}</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Blog;
