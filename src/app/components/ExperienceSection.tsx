'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Project {
  name: string;
  description: string;
  role: string;
  teamSize: string;
  tech: string[];
  highlights: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  color: string;
  projects: Project[];
}

const experiences: Experience[] = [
  {
    company: 'Yaakaspace',
    role: 'Full Stack Developer & Team Lead',
    period: 'Apr 2025 – Apr 2026',
    duration: '1 yr 1 mo',
    color: '#00D4FF',
    projects: [
      {
        name: 'Vruksha',
        description: 'Real estate ERP application managing overall units and sales operations.',
        role: 'Full Stack Dev & Team Lead',
        teamSize: '8',
        tech: ['NextJS', 'NestJS', 'Tailwind CSS', 'GitHub CI/CD', 'Wasabi Storage'],
        highlights: [
          'Designed and developed full web application using NextJS (Frontend) and NestJS (Backend)',
          'Took ownership of complex module flows; built scalable end-to-end application',
          'Managed team ensuring productivity, quality, and continuous improvement',
          'Conducted code reviews and identified skill gaps between team members',
        ],
      },
      {
        name: 'Varai',
        description: 'Internal task management app for draftsman roles and drawing work tracking.',
        role: 'Full Stack Developer',
        teamSize: '8',
        tech: ['NextJS', 'NestJS', 'Tailwind CSS', 'Azure Storage', 'GitHub CI/CD'],
        highlights: [
          'Designed and developed application using NextJS and NestJS',
          'Took ownership of modules, met business requirements, and integrated with other modules',
        ],
      },
      {
        name: 'AVELI',
        description: 'System security software protecting networks, email, hardware, and more.',
        role: 'Full Stack Dev (R&D)',
        teamSize: '5+',
        tech: ['Go', 'Rust'],
        highlights: [
          'Took ownership under the DLP (Data Loss Prevention) module',
          'Conducted R&D on system-level security implementation',
        ],
      },
    ],
  },
  {
    company: 'PIXMONKS SOLUTIONS',
    role: 'Full Stack Developer',
    period: 'Jun 2019 – Feb 2024',
    duration: '4 yrs 8 mo',
    color: '#7C3AED',
    projects: [
      {
        name: 'Goodiee',
        description: 'Social B2B2C e-commerce app for iOS (React Native) with Admin Module (React JS).',
        role: 'Full Stack Dev & Team Lead',
        teamSize: '10+',
        tech: ['React Native', 'React', 'Java', 'Springboot', 'Microservices', 'AWS SQS', 'GCP Kubernetes'],
        highlights: [
          'Built iOS application from scratch using React Native (also runs on Android)',
          'Led team of 10+ members; interacted directly with client',
          'Integrated 3rd-party services: GHTK, TalkJS, Sentry via REST API',
          'Deployed on production via TestFlight; configured APN',
          'Implemented internationalization: English and Vietnamese',
          'Hands-on experience with GCP Kubernetes for service deployment',
        ],
      },
      {
        name: 'Pimerce',
        description: 'Data analytics tool that scrapes e-commerce sites and provides insights to clients.',
        role: 'Full Stack Developer',
        teamSize: '35+',
        tech: ['React', 'Redux', 'Java', 'Springboot', 'Cassandra', 'Elastic Search', 'ES6'],
        highlights: [
          'Worked on frontend modules/components across applications, integrating NPM libraries',
          'Developed REST APIs using Springboot',
          'Fixed 10+ production issues per week by debugging and resolving',
        ],
      },
      {
        name: 'Tin Biscuit',
        description: '3-layer security file manager app for mobile (iOS/Android) and desktop (Windows/Mac).',
        role: 'Frontend Developer',
        teamSize: '10+',
        tech: ['Ionic Angular', 'Electron', 'Java', 'SQL'],
        highlights: [
          'Built from scratch: mobile (Ionic Angular) and desktop (Electron)',
          'Implemented internationalization: English, Chinese, Japanese, Thai',
          'Core file management using fs node module',
        ],
      },
    ],
  },
  {
    company: 'Sardonyx Technologies',
    role: 'Trainer & Software Developer',
    period: 'Aug 2017 – Oct 2018',
    duration: '1 yr 3 mo',
    color: '#10D9A0',
    projects: [
      {
        name: 'KIOSK – Charity Collector',
        description: 'Windows application for charity collection management.',
        role: 'Software Developer',
        teamSize: '20+',
        tech: ['C# .Net', 'MSSQL'],
        highlights: [
          'Worked on Windows Application, creating responsive components and screens',
          'Trainer role: mentored junior developers on .Net and C# fundamentals',
        ],
      },
    ],
  },
];

function ProjectCard({ project, color }: { project: Project; color: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="card-glass rounded-xl p-5 cursor-pointer card-glass-hover"
      style={{ borderColor: expanded ? `${color}40` : undefined }}
      onClick={() => setExpanded(v => !v)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-foreground">{project.name}</h4>
            <span className="font-mono-tech text-xs text-muted-foreground">Team: {project.teamSize}</span>
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <svg
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 flex-shrink-0 mt-1 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tech.map(t => (
          <span key={t} className="badge-tech" style={{ borderColor: `${color}30`, color: color }}>
            {t}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-border/40 space-y-2">
          <div className="font-mono-tech text-xs text-muted-foreground uppercase tracking-wider mb-2">Role: {project.role}</div>
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 blob-cyan opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-hidden flex items-center gap-4 mb-4">
          <span className="font-mono-tech text-primary text-sm tracking-widest uppercase">03. Experience</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <h2 className="reveal-hidden text-section-title font-extrabold text-foreground mb-4">
          Career <span className="text-primary">Timeline</span>
        </h2>
        <p className="reveal-hidden text-muted-foreground mb-14 max-w-xl">
          Seven years across three companies — growing from developer to team lead, shipping production software used by thousands.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] timeline-line hidden md:block" />

          <div className="space-y-14">
            {experiences.map((exp, ei) => (
              <div key={exp.company} className="reveal-hidden md:pl-20 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-12 h-12 rounded-full border-2 items-center justify-center font-mono-tech text-xs font-bold hidden md:flex"
                  style={{
                    borderColor: exp.color,
                    backgroundColor: `${exp.color}15`,
                    color: exp.color,
                    boxShadow: `0 0 20px ${exp.color}30`,
                  }}
                >
                  0{ei + 1}
                </div>

                {/* Company header */}
                <div className="mb-5">
                  <div className="flex flex-wrap items-start gap-3 mb-1">
                    <h3
                      className="text-xl font-extrabold"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </h3>
                    <span className="font-mono-tech text-xs px-2 py-1 rounded border" style={{ borderColor: `${exp.color}30`, color: exp.color }}>
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-foreground mb-1">{exp.role}</div>
                  <div className="font-mono-tech text-xs text-muted-foreground">{exp.period}</div>
                </div>

                {/* Projects */}
                <div className="space-y-3">
                  {exp.projects.map(project => (
                    <ProjectCard key={project.name} project={project} color={exp.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}