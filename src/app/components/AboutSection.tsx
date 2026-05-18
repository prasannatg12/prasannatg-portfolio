'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '7+', label: 'Years Experience', icon: 'BriefcaseIcon' },
  { value: '3', label: 'Companies', icon: 'BuildingOfficeIcon' },
  { value: '5+', label: 'Projects Delivered', icon: 'RocketLaunchIcon' },
  { value: '8+', label: 'Max Team Size Led', icon: 'UsersIcon' },
];

export default function AboutSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal-hidden flex items-center gap-4 mb-12">
          <span className="font-mono-tech text-primary text-sm tracking-widest uppercase">01. About</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <h2 className="reveal-hidden text-section-title font-extrabold text-foreground">
              Crafting Digital <br />
              <span className="text-primary">Experiences</span> at Scale
            </h2>
            <p className="reveal-hidden text-muted-foreground leading-relaxed text-base">
              Holding 7 years of experience in Full Stack Software Development and Team Lead roles, I specialise in building efficient and scalable web and mobile (iOS and Android) applications using React JS, React Native, NextJS, Java, Springboot, and Microservices.
            </p>
            <p className="reveal-hidden text-muted-foreground leading-relaxed text-base">
              Passionate about staying updated with the latest trends and technologies. I have shown expertise in collaborating with cross-functional teams to deliver high-quality software solutions, managing teams of up to 12+ members and handling complex module flows end-to-end.
            </p>

            {/* Contact info */}
            <div className="reveal-hidden space-y-3 pt-2">
              <a
                href="mailto:tgprasanna12@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Icon name="EnvelopeIcon" size={14} className="text-primary" />
                </span>
                tgprasanna12@gmail.com
              </a>
              <a
                href="tel:+917010473998"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Icon name="PhoneIcon" size={14} className="text-primary" />
                </span>
                +91 7010473998 / +91 7667429846
              </a>
              <a
                href="https://linkedin.com/in/prasanna-tg-37014011b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Icon name="LinkIcon" size={14} className="text-primary" />
                </span>
                linkedin.com/in/prasanna-tg-37014011b
              </a>
            </div>
          </div>

          {/* Right: Stats + Education */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal-hidden card-glass rounded-xl p-5 card-glass-hover"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon name={stat.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-primary mb-3" />
                  <div className="text-3xl font-extrabold text-foreground font-mono-tech">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="reveal-hidden card-glass rounded-xl p-6 border border-accent/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="AcademicCapIcon" size={18} className="text-accent" />
                </div>
                <div>
                  <div className="font-mono-tech text-xs text-accent tracking-widest uppercase mb-1">Education</div>
                  <h3 className="text-base font-bold text-foreground mb-1">BE in Computer Science & Engineering</h3>
                  <p className="text-sm text-muted-foreground">Vandayar Engineering College, Thanjavur</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="badge-tech">2012 – 2016</span>
                    <span className="badge-tech">70.1% — First Class</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft skills */}
            <div className="reveal-hidden card-glass rounded-xl p-6">
              <div className="font-mono-tech text-xs text-primary tracking-widest uppercase mb-4">Soft Skills</div>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Problem Solving', 'Emotional Intelligence', 'Mentorship', 'Ownership', 'Conflict Resolution'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-primary/8 border border-primary/20 text-xs text-primary font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}