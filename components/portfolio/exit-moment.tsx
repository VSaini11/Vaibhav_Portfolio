'use client'

import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/VSaini11',
    icon: Github,
    color: 'hover:text-foreground'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vaibhav-saini-522398252/',
    icon: Linkedin,
    color: 'hover:text-foreground'
  },
  {
    label: 'Twitter',
    href: 'https://x.com/Vaibhav11032004',
    icon: Twitter,
    color: 'hover:text-foreground'
  },
  {
    label: 'Email',
    href: 'mailto:vaibhavsaini709@gmail.com',
    icon: Mail,
    color: 'hover:text-accent'
  }
]

export default function ExitMomentSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Let's Talk
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light max-w-2xl mx-auto">
            Whether you're a founder building something ambitious, a recruiter looking for someone who thinks differently, or just curious about problems I'm working on.
          </p>

          <div className="mb-12">
            <p className="text-accent font-mono text-sm mb-6">
              REACH OUT
            </p>
            <a
              href="mailto:vaibhavsaini709@gmail.com"
              className="inline-flex items-center gap-2 text-lg sm:text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors group break-all sm:break-normal"
            >
              vaibhavsaini709@gmail.com
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 sm:gap-8 mb-16 flex-wrap">
            {socialLinks.map(link => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`w-12 h-12 rounded-lg border border-border flex items-center justify-center transition-all duration-300 hover:border-accent hover:bg-accent/10 ${link.color}`}
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Human layer */}
        <div
          className={`transition-all duration-1000 delay-300 max-w-2xl mx-auto p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-foreground leading-relaxed mb-4">
            <strong>About me:</strong> I'm a final-year engineering student with a passion for building. I climb, read voraciously, and spend an unhealthy amount of time thinking about how things work.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm not looking to just land a job—I'm looking to contribute to something meaningful and learn alongside talented people who push me to think bigger.
          </p>
        </div>

        {/* Closing statement */}
        <div
          className={`transition-all duration-1000 delay-500 mt-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-lg text-muted-foreground italic font-light">
            "I'm ready to build. The question is: are you building something worth my time?"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-12 border-t border-border w-full text-center">
        <p className="text-sm text-muted-foreground mb-2">
          © 2026. Designed & built by hand.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Every pixel intentional.
        </p>
      </div>
    </section>
  )
}
