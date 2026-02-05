'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  scrollProgress: number
}

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

export default function Navigation({ scrollProgress }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'translate-y-0 bg-background/80 backdrop-blur-md border-b border-border'
        : '-translate-y-full md:translate-y-0 bg-background/80 backdrop-blur-md border-b border-border md:bg-transparent md:backdrop-blur-none md:border-none'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-foreground text-lg hover:text-accent transition-colors">
          ○
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:hello@example.com"
            className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary/50 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:vaibhavsaini709@gmail.com"
              className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
