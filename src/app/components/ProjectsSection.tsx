'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Project {
  name: string;
  company: string;
  role: string;
  teamSize: string;
  description: string;
  tech: string[];
  color: string;
  span?: 'full';
}

// BENTO GRID AUDIT:
// Array has 9 cards: [Beauty Parlor, Lead MGMT, Vruksha, Goodiee, Pimerce, Varai, Tin Biscuit, AVELI, KIOSK]
// Row 1 (3-col): [Beauty Parlor] [Lead MGMT] [Vruksha]
// Row 2 (3-col): [Goodiee] [Pimerce] [Varai]
// Row 3 (3-col): [Tin Biscuit] [AVELI] [KIOSK]
// Placed 9/9 cards ✓

const projects: Project[] = [
    {
    name: 'Beauty Parlor Management System & Website',
    company: 'Self',
    role: 'Full Stack',
    teamSize: '1',
    description: 'A Beauty Parlor Website and Admin Management System designed to streamline end-to-end salon operations. The platform efficiently manages online and walk-in appointments, customer profiles, services, staff workflows, and revenue tracking, all in one centralized system with a seamless flow from booking to billing and payment management.',
    tech: ['React JS', 'Supabase', 'Tailwind CSS'],
    color: '#00D4FF',
  },
    {
    name: 'Lead Management System',
    company: 'Self',
    role: 'Full Stack',
    teamSize: '1',
    description: 'A comprehensive Lead and Policy Management Portal for insurance agents, built using React and Supabase. It streamlines sales workflows with a visual Kanban board for lead tracking, automated renewal reminders, and an interactive dashboard for monitoring KPIs like total premium and conversion rates. Additionally, the system features secure policy document storage and on-demand PDF report generation for simplified business analysis.',
    tech: ['React JS', 'Supabase', 'Tailwind CSS'],
    color: '#00D4FF',
  },
  {
    name: 'Vruksha',
    company: 'Yaakaspace',
    role: 'Full Stack Dev & Team Lead',
    teamSize: '8',
    description: 'Real estate ERP application managing overall units and sales operations with end-to-end ownership.',
    tech: ['NextJS', 'NestJS', 'Tailwind CSS', 'CI/CD', 'Wasabi'],
    color: '#00D4FF',
  },
  {
    name: 'Goodiee',
    company: 'PIXMONKS',
    role: 'Full Stack Dev & Team Lead',
    teamSize: '10+',
    description: 'Social B2B2C e-commerce iOS app built from scratch with React Native, plus admin dashboard. Multi-language, GCP deployed.',
    tech: ['React Native', 'Java', 'AWS SQS', 'GCP', 'Springboot'],
    color: '#7C3AED',
  },
  {
    name: 'Pimerce',
    company: 'PIXMONKS',
    role: 'Full Stack Developer',
    teamSize: '35+',
    description: 'Data analytics platform scraping e-commerce sites to provide actionable business insights. Resolved 10+ production issues weekly.',
    tech: ['React', 'Redux', 'Springboot', 'Cassandra', 'Elastic Search'],
    color: '#10D9A0',
  },
  {
    name: 'Varai',
    company: 'Yaakaspace',
    role: 'Full Stack Developer',
    teamSize: '8',
    description: 'Internal draftsman task management system for tracking drawing assignments and role-based workflows.',
    tech: ['NextJS', 'NestJS', 'Azure Storage', 'Tailwind CSS'],
    color: '#F59E0B',
  },
  {
    name: 'Tin Biscuit',
    company: 'PIXMONKS',
    role: 'Frontend Developer',
    teamSize: '10+',
    description: '3-layer security file manager for mobile (iOS/Android) and desktop (Windows/Mac) with 4-language internationalization.',
    tech: ['Ionic Angular', 'Electron', 'Java', 'SQL'],
    color: '#EC4899',
  },
  {
    name: 'AVELI',
    company: 'Yaakaspace',
    role: 'Full Stack Dev (R&D)',
    teamSize: '5+',
    description: 'System security software for DLP (Data Loss Prevention) — protecting networks, email, and hardware. Built with Go and Rust.',
    tech: ['Go', 'Rust', 'DLP'],
    color: '#EF4444',
  },
  {
    name: 'KIOSK – Charity Collector' ,
    company: 'Sardonyx Technologies',
    role: 'Software Developer',
    teamSize: '20+',
    description: 'Windows application for charity collection management. Built responsive components and screens using C# .Net and MSSQL.',
    tech: ['C# .Net', 'MSSQL', 'Windows App'],
    color: '#6366F1',
    // span: 'full',
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`card-glass rounded-2xl p-6 card-glass-hover flex flex-col justify-between h-full ${
        project.span === 'full' ? 'lg:flex-row lg:items-center lg:gap-8' : ''
      }`}
      style={{ borderColor: `${project.color}20` }}
    >
      <div className={project.span === 'full' ? 'lg:flex-1' : ''}>
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-extrabold text-foreground">{project.name}</h3>
            <div className="font-mono-tech text-xs text-muted-foreground mt-0.5">{project.company}</div>
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}30` }}
          >
            <Icon name="CodeBracketIcon" size={16} style={{ color: project.color }} />
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
      </div>

      <div className={project.span === 'full' ? 'lg:flex-1' : ''}>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono-tech text-xs px-2 py-0.5 rounded border"
              style={{ borderColor: `${project.color}30`, color: project.color, backgroundColor: `${project.color}08` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icon name="UserIcon" size={12} className="text-muted-foreground" />
            {project.role}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="UsersIcon" size={12} className="text-muted-foreground" />
            Team: {project.teamSize}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
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
              }, i * 100);
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
    <section id="projects" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 blob-cyan opacity-10" />
        <div className="absolute top-1/4 left-0 w-80 h-80 blob-purple opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-hidden flex items-center gap-4 mb-4">
          <span className="font-mono-tech text-primary text-sm tracking-widest uppercase">04. Projects</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <h2 className="reveal-hidden text-section-title font-extrabold text-foreground mb-4">
          Work <span className="text-primary">Showcase</span>
        </h2>
        <p className="reveal-hidden text-muted-foreground mb-12 max-w-xl">
          7+ projects spanning real estate, e-commerce, security, file management, and data analytics — across web, mobile, and desktop.
        </p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`reveal-hidden h-full ${
                project.span === 'full' ? 'lg:col-span-3 md:col-span-2' : ''
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}