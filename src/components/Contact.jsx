import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, FileText } from 'lucide-react';
import Section from './Section';
import { profile } from '../data/profile';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch(profile.contactEndpoint, { method: 'POST', body: data });
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus(''), 6000);
    } catch (error) {
      console.error('Contact form error:', error.message);
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      label="Contact"
      title="Hiring for an engineering or program role in 2027?"
      lead="I’d like to hear about it, especially if it sits where deep technical work meets delivery. I reply to everything."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field name="Name" label="Name" type="text" />
            <Field name="Email" label="Email" type="email" />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              required
              rows="4"
              placeholder="Role, team, and what you’re trying to get done."
              className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors resize-y"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-canvas hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <span className="text-sm text-accent">
                Sent. I’ll get back to you shortly.
              </span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-500">
                Something broke. Email me directly at {profile.email}.
              </span>
            )}
          </div>
        </form>

        <div className="lg:pt-1">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-5">
            Elsewhere
          </h3>
          <div className="flex flex-col gap-1">
            <Elsewhere
              href={`mailto:${profile.email}`}
              icon={<Mail size={16} />}
              label="Email"
              value={profile.email}
            />
            <Elsewhere
              href={profile.links.linkedin}
              icon={<Linkedin size={16} />}
              label="LinkedIn"
              value="/in/sahaijordialana"
              external
            />
            <Elsewhere
              href={profile.links.github}
              icon={<Github size={16} />}
              label="GitHub"
              value="@SJAlanA"
              external
            />
            <Elsewhere
              href={profile.links.leetcode}
              icon={<Code2 size={16} />}
              label="LeetCode"
              value="Sahai-Jordi-Alan-A"
              external
            />
            <Elsewhere
              href={profile.links.resume}
              icon={<FileText size={16} />}
              label="Résumé"
              value="PDF"
              external
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Field = ({ name, label, type }) => (
  <div>
    <label
      htmlFor={name}
      className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      required
      className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
    />
  </div>
);

const Elsewhere = ({ href, icon, label, value, external }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3 -mx-3 hover:bg-surface-alt transition-colors"
  >
    <span className="flex items-center gap-3 text-sm text-ink">
      <span className="text-muted group-hover:text-accent transition-colors">
        {icon}
      </span>
      {label}
    </span>
    <span className="font-mono text-xs text-muted truncate">{value}</span>
  </a>
);

export default Contact;
