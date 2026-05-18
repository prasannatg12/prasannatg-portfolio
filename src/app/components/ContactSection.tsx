'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-hidden').forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 blob-purple opacity-20" />
        <div className="absolute top-0 left-1/3 w-72 h-72 blob-cyan opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-hidden flex items-center gap-4 mb-4">
          <span className="font-mono-tech text-primary text-sm tracking-widest uppercase">05. Contact</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <h2 className="reveal-hidden text-section-title font-extrabold text-foreground mb-4">
          Let&apos;s <span className="text-primary">Connect</span>
        </h2>
        <p className="reveal-hidden text-muted-foreground mb-12 max-w-xl">
          Open to full-time roles, contract work, and technical collaborations. Reach out directly through any of these platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:tgprasanna12@gmail.com"
            className="reveal-hidden flex items-center gap-4 p-6 card-glass rounded-xl card-glass-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
              <Icon name="EnvelopeIcon" size={20} className="text-primary" />
            </div>
            <div>
              <div className="font-mono-tech text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</div>
              <div className="text-sm font-semibold text-foreground">tgprasanna12@gmail.com</div>
            </div>
          </a>

          <a
            href="tel:+917010473998"
            className="reveal-hidden flex items-center gap-4 p-6 card-glass rounded-xl card-glass-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:border-accent/50 transition-colors flex-shrink-0">
              <Icon name="PhoneIcon" size={20} className="text-accent" />
            </div>
            <div>
              <div className="font-mono-tech text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
              <div className="text-sm font-semibold text-foreground">+91 7010473998</div>
              <div className="text-sm text-muted-foreground">+91 7667429846</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/prasanna-tg-37014011b"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-hidden flex items-center gap-4 p-6 card-glass rounded-xl card-glass-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors flex-shrink-0">
              <Icon name="LinkIcon" size={20} className="text-emerald-400" />
            </div>
            <div>
              <div className="font-mono-tech text-xs text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</div>
              <div className="text-sm font-semibold text-foreground">prasanna-tg-37014011b</div>
            </div>
          </a>

          <div className="reveal-hidden flex items-center gap-4 p-6 card-glass rounded-xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon name="MapPinIcon" size={20} className="text-primary" />
            </div>
            <div>
              <div className="font-mono-tech text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</div>
              <div className="text-sm font-semibold text-foreground">India</div>
              <div className="text-sm text-muted-foreground">Open to Remote & On-site</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}