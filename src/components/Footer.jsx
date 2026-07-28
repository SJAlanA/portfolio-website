import React from 'react';
import { profile } from '../data/profile';

const Footer = () => (
  <footer className="border-t border-line mt-24 pt-8 pb-12">
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs text-muted">{profile.location}</p>
    </div>
  </footer>
);

export default Footer;
