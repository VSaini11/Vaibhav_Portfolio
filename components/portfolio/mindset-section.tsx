'use client'

import { useEffect, useState, useRef } from 'react'
import { Lightbulb, Zap, Compass, Network } from 'lucide-react'

const mindsetItems = [
  {
    icon: Lightbulb,
    title: 'Problem-First Thinking',
    description: 'I start with the real-world problem, not the technology. Understanding constraints and constraints shapes better solutions.',
    pattern: 'Deep exploration of root causes'
  },
  {
    icon: Zap,
    title: 'Speed & Scale',
    description: 'Building products that move fast without sacrificing quality. Optimizing for both user experience and system efficiency.',
    pattern: 'Rapid iteration with thoughtful architecture'
  },
  {
    icon: Compass,
    title: 'Systems Thinking',
    description: 'Products exist within larger ecosystems. I design with awareness of downstream effects and interdependencies.',
    pattern: 'Holistic approach to complex problems'
  },
  {
    icon: Network,
    title: 'Design-Engineering Blend',
    description: 'Code that looks good. Interfaces that feel right. The intersection of craft and technology.',
    pattern: 'Building with intentionality'
  }
]

export default function MindsetSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newState = [...prev]
              const index = mindsetItems.findIndex(
                (_, i) => entry.target === sectionRef.current?.children[i]
              )
              if (index !== -1) {
                newState[index] = true
              }
              return newState
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Mindset Layer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            How I think about problems, technology, and building products that matter.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative w-full overflow-hidden mb-20 pointer-events-none">
          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex items-center gap-8 mx-4">
              <span className="text-2xl md:text-4xl font-bold text-accent/20 font-mono tracking-widest uppercase">
                PROBLEMS FIRST, CODE SECOND • AUTOMATE THE BORING • DESIGN FOR SCALE • DEBUG DEEPLY • WRITE CODE HUMANS CAN READ •
              </span>
            </div>
            <div className="flex items-center gap-8 mx-4">
              <span className="text-2xl md:text-4xl font-bold text-accent/20 font-mono tracking-widest uppercase">
                PROBLEMS FIRST, CODE SECOND • AUTOMATE THE BORING • DESIGN FOR SCALE • DEBUG DEEPLY • WRITE CODE HUMANS CAN READ •
              </span>
            </div>
            <div className="flex items-center gap-8 mx-4">
              <span className="text-2xl md:text-4xl font-bold text-accent/20 font-mono tracking-widest uppercase">
                PROBLEMS FIRST, CODE SECOND • AUTOMATE THE BORING • DESIGN FOR SCALE • DEBUG DEEPLY • WRITE CODE HUMANS CAN READ •
              </span>
            </div>
          </div>
          {/* Gradient Edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mindsetItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-accent rounded-full group-hover:w-full transition-all duration-500" />

                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-accent font-mono">
                    {item.pattern}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
