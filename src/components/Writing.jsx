import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { writing } from '../data/profile';

const Writing = () => (
  <Section id="writing" label="Writing" title="Thinking out loud.">
    <div className="flex flex-col">
      {writing.map((post, i) => (
        <motion.a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          className="group flex items-start justify-between gap-6 border-t border-line py-6 last:border-b hover:bg-surface-alt/60 transition-colors px-1"
        >
          <div className="max-w-2xl">
            <h3 className="font-display text-lg font-medium mb-1.5 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-[15px] text-muted font-light leading-relaxed">
              {post.blurb}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-muted group-hover:text-accent transition-colors pt-1">
            <span className="font-mono text-xs whitespace-nowrap">
              {post.date}
            </span>
            <ArrowUpRight size={15} />
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
);

export default Writing;
