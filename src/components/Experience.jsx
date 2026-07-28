import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { experience } from '../data/profile';

const Experience = () => (
  <Section
    id="experience"
    label="Track record"
    title="From breaking systems to running the programs that build them."
  >
    <div className="relative">
      {/* Timeline rail, hidden on small screens where the layout stacks. */}
      <span className="hidden md:block absolute left-[11.5rem] top-2 bottom-2 w-px bg-line" />

      <div className="flex flex-col gap-12">
        {experience.map((item, i) => (
          <motion.article
            key={`${item.org}-${item.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="md:grid md:grid-cols-[11.5rem_1fr] md:gap-10 relative"
          >
            <div className="mb-3 md:mb-0 md:text-right md:pr-6">
              <div className="font-mono text-xs text-muted whitespace-nowrap">
                {item.period}
              </div>
              {item.current && (
                <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Current
                </div>
              )}
            </div>

            {/* Node on the rail */}
            <span className="hidden md:block absolute left-[11.5rem] top-1.5 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-canvas ring-2 ring-accent" />

            <div className="md:pl-2">
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.role}
              </h3>
              <p className="text-sm text-muted mt-0.5 mb-4">
                {item.org} · {item.place}
              </p>

              <p className="text-muted font-light leading-relaxed mb-4">
                {item.summary}
              </p>

              {item.points.length > 0 && (
                <ul className="space-y-2.5 mb-5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;
