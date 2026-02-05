'use client'

import { useEffect, useState, useRef } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Zephyr',
    subtitle: 'Intelligent Issue Tracking',
    description: 'Automation-driven platform for real-time, multi-department issue reporting and resolution.',
    stack: 'Next.js • TypeScript • MongoDB',
    link: 'https://github.com/VSaini11/Issue-Tracking-web-app',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: '02',
    title: 'GoLinkHub',
    subtitle: 'Link Analytics Platform',
    description: 'Scalable link management and analytics platform for tracking engagement.',
    stack: 'Next.js • Recharts • Vercel',
    link: 'https://golinkhub.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    id: '03',
    title: 'Error Analysis AI',
    subtitle: 'GenAI Debugging Agent',
    description: 'AI-assisted debugging tool that converts raw error logs into actionable insights.',
    stack: 'Python • Gemini AI • REST APIs',
    link: 'https://github.com/VSaini11/backend_code_debugger',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80'
  },
  {
    id: '04',
    title: 'SafeDrop',
    subtitle: 'Secure File Exchange',
    description: 'Secure file-sharing system with time-limited access and strong authentication.',
    stack: 'Next.js • Supabase • JWT',
    link: 'https://safe-drop-blond.vercel.app/',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
  }
]

export default function ProjectsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 5)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }
  }

  useEffect(() => {
    // Initial update
    const timer = setTimeout(() => {
      updateScrollButtons()
    }, 100)

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', updateScrollButtons)
      window.addEventListener('resize', updateScrollButtons)

      return () => {
        container.removeEventListener('scroll', updateScrollButtons)
        window.removeEventListener('resize', updateScrollButtons)
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420 // Increased to ensure full card visibility
      const newPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="projects" className="relative py-32 px-4 md:px-8 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-[0.3em] block mb-4">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Featured <br />
              <span className="text-white/40">Projects</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all ${canScrollLeft
                ? 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
                : 'border-white/5 bg-white/[0.02] text-white/20 cursor-not-allowed'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all ${canScrollRight
                ? 'border-white/20 bg-white/5 hover:bg-white/10 text-white'
                : 'border-white/5 bg-white/[0.02] text-white/20 cursor-not-allowed'
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-scroll pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[340px] md:w-[380px] snap-start group"
              >
                <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>

                    {/* Project Number Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <span className="text-xs font-mono text-white">{project.id}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground/60 font-serif italic">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="mb-4">
                      <span className="text-xs font-mono text-muted-foreground/50">
                        {project.stack}
                      </span>
                    </div>

                    {/* View Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors group/link"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Hint */}
          <div className="md:hidden text-center mt-8">
            <p className="text-xs text-muted-foreground/40 uppercase tracking-widest">
              Swipe to explore more →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
