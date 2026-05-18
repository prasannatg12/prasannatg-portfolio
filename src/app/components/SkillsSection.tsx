'use client';
import React, { useEffect, useRef, useState } from 'react';

interface SkillItem {
  name: string;
  level: number;
  tag?: string;
}

interface SkillGroup {
  category: string;
  color: string;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    color: '#00D4FF',
    skills: [
      { name: 'React JS', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'React Native', level: 88 },
      { name: 'Redux', level: 85 },
      { name: 'Tailwind CSS', level: 90, tag: 'Hands-on' },
      { name: 'Ionic Angular', level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#7C3AED',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Springboot', level: 88 },
      { name: 'Microservices', level: 85 },
      { name: 'NestJS', level: 80 },
      { name: 'Python', level: 65, tag: 'Intermediate' },
      { name: 'Go / Rust', level: 55, tag: 'R&D' },
    ],
  },
  {
    category: 'Databases',
    color: '#10D9A0',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Cassandra', level: 72, tag: 'Intermediate' },
      { name: 'Elastic Search', level: 70, tag: 'Intermediate' },
      { name: 'MSSQL', level: 68 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: '#F59E0B',
    skills: [
      { name: 'GCP Kubernetes', level: 70, tag: 'Hands-on' },
      { name: 'AWS SQS', level: 72, tag: 'Hands-on' },
      { name: 'GitHub CI/CD', level: 80 },
      { name: 'Azure Storage', level: 65, tag: 'Hands-on' },
    ],
  },
];

function SkillBar({ name, level, color, animate, tag }: SkillItem & { color: string; animate: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <div className="flex items-center gap-2">
          {tag && (
            <span className="font-mono-tech text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
              {tag}
            </span>
          )}
          <span className="font-mono-tech text-xs text-muted-foreground">{level}%</span>
        </div>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            entry.target.querySelectorAll('.reveal-hidden').forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('reveal-hidden');
                el.classList.add('reveal-visible');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob-purple opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-hidden flex items-center gap-4 mb-4">
          <span className="font-mono-tech text-primary text-sm tracking-widest uppercase">02. Skills</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <h2 className="reveal-hidden text-section-title font-extrabold text-foreground mb-4">
          Technical <span className="text-primary">Arsenal</span>
        </h2>
        <p className="reveal-hidden text-muted-foreground mb-12 max-w-xl">
          Seven years of hands-on experience across the full stack — from pixel-perfect UIs to distributed backend systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="reveal-hidden card-glass rounded-2xl p-7"
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: group.color, boxShadow: `0 0 10px ${group.color}` }}
                />
                <h3 className="font-mono-tech text-sm font-bold tracking-widest uppercase" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={group.color}
                    animate={animated}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div className="reveal-hidden mt-8 card-glass rounded-2xl p-6">
          <div className="font-mono-tech text-xs text-muted-foreground tracking-widest uppercase mb-4">Tools & Platforms</div>
          <div className="flex flex-wrap gap-2">
            {['Git', 'Adobe XD', 'Electron', 'Asana', 'ClickUp', 'TestFlight', 'Xcode', 'Wasabi Storage', 'AWS SQS', 'TalkJS', 'Sentry'].map(tool => (
              <span key={tool} className="badge-tech">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}