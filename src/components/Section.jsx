import React from 'react';
import { motion } from 'framer-motion';

/** Shared section shell: eyebrow label, optional title, consistent rhythm. */
const Section = ({ id, label, title, lead, children, className = '' }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      {title && (
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 max-w-3xl">
          {title}
        </h2>
      )}

      {lead && (
        <p className="text-lg text-muted font-light max-w-2xl mb-12 leading-relaxed">
          {lead}
        </p>
      )}
    </motion.div>

    {children}
  </section>
);

export default Section;
