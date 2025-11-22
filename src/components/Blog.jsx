import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const blogPosts = [
    {
        title: 'My journey at CEG Tech Forum as Projects and Research Student Director',
        date: 'July, 2024',
        excerpt: 'Gratitude Post: Looking Back at an Amazing Experience as...',
        readTime: '5 min read',
        link: 'https://www.linkedin.com/posts/sahaijordialana_projects-cegtechforum-kurukshetra-activity-7198382442422951937-2-xW'
    },
    {
        title: 'Starting my career in automotive cybersecurity',
        date: 'June, 2024',
        excerpt: 'Excited to Share My Journey as a Cyber Security Trainee...',
        readTime: '3 min read',
        link: 'https://www.linkedin.com/posts/sahaijordialana_cybersecurity-internship-careergrowth-activity-7222298401470652416-zmyg'
    },
];

const Blog = () => {
    return (
        <section id="blog" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Latest <span className="text-accent">Articles</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs text-accent font-mono">{post.date}</span>
                                <span className="text-xs text-gray-500">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm text-accent hover:underline gap-1"
                            >
                                Read more <ExternalLink size={14} />
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
