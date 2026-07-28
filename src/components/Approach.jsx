import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { approach, capabilities } from '../data/profile';

const Approach = () => (
  <Section
    id="approach"
    label="How I work"
    title="Three things that hold true whatever the org chart looks like."
  >
    <div className="grid gap-5 md:grid-cols-3 mb-16">
      {approach.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="rounded-2xl border border-line bg-surface p-6"
        >
          <div className="font-mono text-xs text-accent mb-4">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h3 className="font-display text-lg font-semibold mb-3 leading-snug">
            {item.title}
          </h3>
          <p className="text-[15px] text-muted font-light leading-relaxed">
            {item.body}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="grid gap-10 md:grid-cols-2"
    >
      {capabilities.map((col) => (
        <div key={col.group}>
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-5">
            {col.group}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {col.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  </Section>
);

export default Approach;
