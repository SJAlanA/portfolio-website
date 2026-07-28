import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { profile, navLinks } from '../data/profile';

const Nav = () => {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-canvas/85 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight shrink-0"
          >
            {profile.initials}
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink hover:opacity-90 transition-opacity"
            >
              Résumé
              <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="rounded-full p-2 text-muted hover:text-ink hover:bg-surface-alt transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="md:hidden rounded-full p-2 text-muted hover:text-ink hover:bg-surface-alt transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden border-t border-line py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-muted hover:text-ink transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-base text-accent font-medium"
            >
              Résumé ↗
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
