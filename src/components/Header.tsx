'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks?.map(l => l?.href?.replace('#', ''));
      for (const id of [...sections]?.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el?.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { once: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/60 py-3' :'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <AppLogo
            size={36}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <span className="font-mono-tech text-sm font-semibold text-primary tracking-wider hidden sm:block">
            Prasanna TG
            {/* <span className="text-muted-foreground">.dev</span> */}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks?.map(link => (
            <a
              key={link?.href}
              href={link?.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                activeSection === link?.href?.replace('#', '')
                  ? 'text-primary glow-cyan-text' :'text-muted-foreground'
              }`}
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-300 font-mono-tech animate-pulse-glow"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border py-6 px-6 flex flex-col gap-4">
          {navLinks?.map(link => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-lg border border-primary/40 text-primary text-sm font-semibold text-center hover:bg-primary/10 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}