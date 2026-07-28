import React from 'react';
import { motion } from 'framer-motion';
import { metrics } from '../data/profile';

const Metrics = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line rounded-2xl border border-line bg-surface overflow-hidden"
  >
    {metrics.map((m) => (
      <div key={m.label} className="p-5 md:p-6">
        <div className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">
          {m.value}
        </div>
        <div className="text-sm font-medium text-ink/90">{m.label}</div>
        <div className="font-mono text-[11px] uppercase tracking-wider text-muted mt-1">
          {m.detail}
        </div>
      </div>
    ))}
  </motion.div>
);

export default Metrics;
