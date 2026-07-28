import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowDown } from 'lucide-react';
import profileImg from '../assets/SJAlan-portrait.jpg';
import { profile } from '../data/profile';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Hero = () => (
  <section id="top" className="pt-12 pb-4 md:pt-20">
    <motion.div
      {...fade(0)}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-accent-soft px-3 py-1.5 mb-8"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        Open to 2027 full-time roles
      </span>
    </motion.div>

    <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
      <div>
        <motion.p
          {...fade(0.05)}
          className="font-mono text-sm text-muted mb-4"
        >
          {profile.name} · {profile.role}
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-7 max-w-3xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          {...fade(0.18)}
          className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mb-9"
        >
          {profile.intro}
        </motion.p>

        <motion.div {...fade(0.26)} className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink hover:bg-surface-alt transition-colors"
          >
            See the track record
            <ArrowDown size={14} />
          </a>

          <span className="hidden sm:block h-5 w-px bg-line mx-1" />

          <div className="flex items-center gap-1">
            <IconLink
              href={`mailto:${profile.email}`}
              label="Email"
              icon={<Mail size={17} />}
            />
            <IconLink
              href={profile.links.linkedin}
              label="LinkedIn"
              icon={<Linkedin size={17} />}
              external
            />
            <IconLink
              href={profile.links.github}
              label="GitHub"
              icon={<Github size={17} />}
              external
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="order-first md:order-none"
      >
        <div className="relative w-32 h-32 md:w-44 md:h-44">
          <div className="absolute -inset-2 rounded-3xl bg-accent-soft blur-lg" />
          <img
            src={profileImg}
            alt={profile.name}
            className="relative h-full w-full rounded-2xl object-cover ring-1 ring-line"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const IconLink = ({ href, label, icon, external }) => (
  <a
    href={href}
    aria-label={label}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="rounded-full p-2.5 text-muted hover:text-ink hover:bg-surface-alt transition-colors"
  >
    {icon}
  </a>
);

export default Hero;
