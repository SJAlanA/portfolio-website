import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, FileText, ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { profile } from '../data/profile';

/**
 * Builds a prefilled mailto: from whatever the visitor typed. This is the
 * safety net: if the submit endpoint is unset or fails, their message is
 * handed straight to their mail client rather than lost.
 */
const buildMailto = ({ name, email, message }) => {
  const subject = `Portfolio enquiry${name ? ` from ${name}` : ''}`;
  const body = [message, '', '---', `From: ${name}`, `Reply to: ${email}`]
    .filter((line) => line !== undefined)
    .join('\n');
  return `mailto:${profile.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const [status, setStatus] = useState('');
  const [fallback, setFallback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Honeypot. Web3Forms also rejects any submission with `botcheck` set,
    // so this is blocked client-side and server-side both.
    if (data.get('botcheck')) return;

    const fields = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    };
    const mailto = buildMailto(fields);

    // No endpoint configured: go straight to the visitor's mail client.
    if (!profile.contactEndpoint) {
      setFallback(mailto);
      setStatus('mailto');
      window.location.href = mailto;
      return;
    }

    if (profile.contactAccessKey) {
      data.append('access_key', profile.contactAccessKey);
    }
    data.append(
      'subject',
      `Portfolio enquiry${fields.name ? ` from ${fields.name}` : ''}`
    );

    setStatus('sending');
    try {
      const res = await fetch(profile.contactEndpoint, {
        method: 'POST',
        body: data,
      });

      let payload = null;
      try {
        payload = await res.json();
      } catch {
        // Non-JSON response; treated as a failure below.
      }

      // Never report success on an unverified response. The previous version
      // resolved on any fetch that did not throw, which reported "Sent" for
      // submissions the endpoint had actually rejected. Web3Forms returns 200
      // with success:false for some rejections, so check both.
      if (!res.ok || !payload?.success) {
        throw new Error(payload?.message || `Endpoint returned ${res.status}`);
      }

      setStatus('success');
      form.reset();
      setTimeout(() => setStatus(''), 8000);
    } catch (error) {
      console.error('Contact form submit failed:', error.message);
      setFallback(mailto);
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
            <Field name="name" label="Name" type="text" />
            <Field name="email" label="Email" type="email" />
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
              name="message"
              required
              rows="4"
              placeholder="Role, team, and what you’re trying to get done."
              className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors resize-y"
            />
          </div>

          {/* Honeypot. Hidden from sighted users and assistive tech alike.
              `botcheck` is Web3Forms' convention, so it is rejected server-side
              too rather than relying on the client check alone. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="botcheck">Leave this field empty</label>
            <input
              id="botcheck"
              name="botcheck"
              type="text"
              tabIndex={-1}
              autoComplete="off"
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

            {status === 'mailto' && (
              <span className="text-sm text-muted">
                Opening your mail app.{' '}
                <a href={fallback} className="text-accent underline">
                  Nothing happened?
                </a>
              </span>
            )}

            {status === 'error' && (
              <span className="text-sm text-muted">
                That didn’t go through.{' '}
                <a href={fallback} className="text-accent underline">
                  Send it by email instead
                </a>{' '}
                — your message is already filled in.
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
      autoComplete={type === 'email' ? 'email' : 'name'}
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
    <span className="flex items-center gap-1 font-mono text-xs text-muted truncate">
      {value}
      {external && <ArrowUpRight size={12} className="shrink-0" />}
    </span>
  </a>
);

export default Contact;
