'use client'

import { useState, useEffect } from 'react'
import HeroSection from '@/components/portfolio/hero-section'
import MarqueeSection from '@/components/portfolio/marquee-section'
import SkillsSection from '@/components/portfolio/skills-section'
import ExperienceSection from '@/components/portfolio/experience-section'
import ProjectsSection from '@/components/portfolio/projects-section'
import CredibilitySection from '@/components/portfolio/credibility-section'
import TestimonialsSection from '@/components/portfolio/testimonials-section'
import ExitMomentSection from '@/components/portfolio/exit-moment'
import Navigation from '@/components/portfolio/navigation'
import LateNightBanner from '@/components/portfolio/late-night-banner'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? winScroll / docHeight : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      <Navigation scrollProgress={scrollProgress} />
      <LateNightBanner />

      <main className="min-h-screen">
        {/* SEO H1 - required for Google */}
        <h1 className="sr-only">Vaibhav Saini</h1>
        <h2 className="sr-only">Full Stack Developer Portfolio</h2>
        <HeroSection />
        <MarqueeSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CredibilitySection />
        <TestimonialsSection />
        <ExitMomentSection />
      </main>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/20 z-40">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  )
}
