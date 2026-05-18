'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const [year, setYear] = useState('');
  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <AppLogo size={32} />
          <span className="font-mono-tech text-sm text-muted-foreground">
            Prasanna Thippa Govindarajulu
          </span>
        </div>
        <div className="flex items-center gap-6 text-muted-foreground">
          <a
            href="mailto:tgprasanna12@gmail.com"
            className="hover:text-primary transition-colors text-sm"
            aria-label="Email Prasanna"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/prasanna-tg-37014011b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-sm"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a href="#about" className="hover:text-primary transition-colors text-sm">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition-colors text-sm">
            Projects
          </a>
        </div>
        <p className="text-xs text-muted-foreground font-mono-tech">
          {year && `© ${year}`} Prasanna TG · Full Stack Developer & Team Lead
        </p>
      </div>
    </footer>
  );
}