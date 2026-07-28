import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { work } from '../data/profile';

/** Each item reads as Context → Action → Outcome, the shape an interviewer expects. */
const Work = () => (
  <Section
    id="work"
    label="Selected work"
    title="Programs I owned, and the engineering underneath them."
    lead="Each one framed the way I'd walk you through it in an interview: the situation, what I did, and what came out the other side."
  >
    <div className="flex flex-col gap-5">
      {work.map((item, i) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="group rounded-2xl border border-line bg-surface p-6 md:p-8 hover:border-accent/40 transition-colors"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
            <h3 className="font-display text-xl md:text-2xl font-semibold">
              {item.title}
            </h3>
            <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              {item.kind}
            </span>
          </div>

          <dl className="grid gap-5 md:grid-cols-3">
            <Row term="Context" desc={item.context} />
            <Row term="What I did" desc={item.action} />
            <Row term="Outcome" desc={item.outcome} accent />
          </dl>

          <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);

const Row = ({ term, desc, accent }) => (
  <div>
    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2">
      {term}
    </dt>
    <dd
      className={`text-[15px] leading-relaxed ${
        accent ? 'text-ink font-medium' : 'text-muted font-light'
      }`}
    >
      {desc}
    </dd>
  </div>
);

export default Work;
