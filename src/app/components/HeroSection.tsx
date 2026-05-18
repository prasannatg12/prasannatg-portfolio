'use client';
import React, { useEffect, useRef, useState } from 'react';

const TYPEWRITER_STRINGS = [
  'Full Stack Developer',
  'Team Lead',
  'React & Next.js Expert',
  // 'Java & Springboot Engineer',
  'Mobile App Builder',
  'Saas Solutions Architect',
  // 'Cloud & Microservices Dev',
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typeText, setTypeText] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Canvas particle grid animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#00D4FF', '#7C3AED', '#10D9A0'];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Particles + connections
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba').replace('#00D4FF', `rgba(0,212,255,${p.opacity})`).replace('#7C3AED', `rgba(124,58,237,${p.opacity})`).replace('#10D9A0', `rgba(16,217,160,${p.opacity})`);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = TYPEWRITER_STRINGS[typeIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setTypeText(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setTypeText(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setDeleting(false);
          setTypeIndex(i => (i + 1) % TYPEWRITER_STRINGS.length);
        }
      }
    }, deleting ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, typeIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 blob-cyan opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-purple opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono-tech text-xs text-primary tracking-widest uppercase">
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-hero-xl font-extrabold text-foreground mb-4 leading-tight">
          <span className="block text-muted-foreground font-mono-tech text-base font-normal tracking-widest mb-3 uppercase">
            Hello, I am
          </span>
          <span className="block">Prasanna</span>
          <span className="block text-primary glow-cyan-text">
            Thippa Govindarajulu
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="font-mono-tech text-xl md:text-2xl text-accent font-semibold">
            {typeText}
            <span className="animate-blink text-primary">|</span>
          </span>
        </div>

        {/* Years badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 font-mono-tech text-sm text-primary font-bold">
            7 Years Experience
          </div>
          <div className="px-4 py-2 rounded-lg border border-accent/30 bg-accent/5 font-mono-tech text-sm text-purple-300 font-bold">
            Team Lead
          </div>
          <div className="px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 font-mono-tech text-sm text-emerald-400 font-bold">
            7+ Projects
          </div>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10">
          Building efficient and scalable web and mobile (Android & iOS) applications across React, React Native, Java, Springboot, and cloud platforms. Led teams of 8–12 members to deliver production-grade software.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#projects"
            className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all duration-300 glow-cyan flex items-center gap-2"
          >
            View My Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono-tech text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}