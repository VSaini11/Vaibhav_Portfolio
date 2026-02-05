'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, BookOpen, PenTool, Hash } from 'lucide-react'

export default function CredibilitySection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative py-32 px-4 md:px-8 bg-[#050505] overflow-hidden flex flex-col items-center justify-center min-h-screen perspective-[2000px]"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            {/* Header */}
            <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">
                    Intellectual Artifacts
                </span>
            </div>

            {/* The Book Container */}
            <div
                className={`relative w-full max-w-5xl aspect-[0.65/1] md:aspect-[1.8/1] transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-style-3d ${isVisible ? 'rotate-x-10 translate-y-0 opacity-100' : 'rotate-x-45 translate-y-20 opacity-0'
                    }`}
            >
                {/* Book Cover/Spine Effect (Behind pages) */}
                <div className="absolute inset-0 bg-[#0a0a0a] rounded-sm transform translate-z-[-2px] shadow-2xl shadow-black/80" />

                <div className="flex flex-col md:flex-row w-full h-full">

                    {/* LEFT PAGE - MEDIUM BLOG */}
                    <div
                        className={`relative w-full h-1/2 md:w-1/2 md:h-full bg-[#f4f1ea] origin-bottom md:origin-right transition-transform duration-1000 delay-300 ease-out border-b md:border-b-0 md:border-r border-[#d4c5a9]/30 ${isVisible ? 'rotate-x-0 md:rotate-y-0' : 'rotate-x-12 md:rotate-y-12'
                            }`}
                        style={{
                            boxShadow: 'var(--left-page-shadow)',
                            borderTopLeftRadius: '4px',
                            borderTopRightRadius: '4px', // Mobile top corners
                            borderBottomLeftRadius: '0px', // Reset for mobile
                            borderBottomRightRadius: '0px', // Reset for mobile
                        }}
                    >
                        <style jsx>{`
                            div[style] {
                                --left-page-shadow: inset 0 -20px 40px -10px rgba(139,115,85,0.3);
                            }
                            @media (min-width: 768px) {
                                div[style] {
                                    --left-page-shadow: inset -20px 0 40px -10px rgba(139,115,85,0.3);
                                    border-top-right-radius: 0px !important;
                                    border-bottom-left-radius: 4px !important;
                                }
                            }
                        `}</style>
                        {/* Paper Texture */}
                        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Subtle aging/staining effect */}
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at 30% 40%, rgba(139,115,85,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(139,115,85,0.15) 0%, transparent 50%)'
                            }}
                        />

                        {/* Content Container */}
                        <div className="p-6 md:p-12 h-full flex flex-col relative z-10 group cursor-pointer">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 md:mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#8b7355]/10 flex items-center justify-center border border-[#8b7355]/20 group-hover:border-accent/40 transition-colors">
                                        <PenTool className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <span className="text-xs font-mono tracking-widest uppercase text-[#5a4a3a]">Medium Blog</span>
                                </div>
                                {/* Live Dot */}
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-xl md:text-3xl lg:text-4xl font-serif font-medium text-[#2a2218] mb-4 md:mb-6 leading-tight group-hover:text-[#1a1410] transition-colors">
                                    Some Stories Don't Stay as Drafts
                                </h3>
                                <p className="text-sm md:text-base text-[#5a4a3a]/80 font-serif leading-relaxed italic">
                                    "Essays on growth, identity, and systems. Not tutorials—lived insights."
                                </p>
                            </div>

                            {/* Footer / CTA */}
                            <div className="mt-auto pt-6 md:pt-8 border-t border-[#d4c5a9]/40 flex items-center justify-between group-hover:border-accent/30 transition-colors">
                                <a href="https://medium.com/@vaibhavsaini709/some-stories-dont-stay-as-drafts-b445a2d719af" className="flex flex-col">
                                    <span className="text-[10px] text-[#8b7355]/60 uppercase tracking-widest mb-1">Latest Entry</span>
                                    <span className="text-xs md:text-sm text-[#3a2a1a] font-medium group-hover:text-accent transition-colors">Read Here</span>
                                </a>
                                <ArrowUpRight className="w-4 h-4 text-[#8b7355]/60 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </div>

                        </div>
                    </div>


                    {/* RIGHT PAGE - KINDLE BOOK */}
                    <div
                        className={`relative w-full h-1/2 md:w-1/2 md:h-full bg-[#f4f1ea] origin-top md:origin-left transition-transform duration-1000 delay-300 ease-out border-t md:border-t-0 md:border-l border-[#d4c5a9]/30 ${isVisible ? 'rotate-x-0 md:rotate-y-0' : '-rotate-x-12 md:-rotate-y-12'
                            }`}
                        style={{
                            boxShadow: 'var(--right-page-shadow)',
                            borderBottomLeftRadius: '4px',
                            borderBottomRightRadius: '4px',
                            borderTopRightRadius: '0px',
                        }}
                    >
                        <style jsx>{`
                            div[style] {
                                --right-page-shadow: inset 0 20px 40px -10px rgba(139,115,85,0.3);
                            }
                            @media (min-width: 768px) {
                                div[style] {
                                    --right-page-shadow: inset 20px 0 40px -10px rgba(139,115,85,0.3);
                                    border-top-right-radius: 4px !important;
                                    border-bottom-left-radius: 0px !important;
                                }
                            }
                        `}</style>
                        {/* Paper Texture */}
                        <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Subtle aging/staining effect */}
                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at 70% 40%, rgba(139,115,85,0.2) 0%, transparent 50%), radial-gradient(ellipse at 30% 60%, rgba(139,115,85,0.15) 0%, transparent 50%)'
                            }}
                        />

                        {/* Content Container */}
                        <div className="p-6 md:p-12 h-full flex flex-col relative z-10 group cursor-pointer">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-4 md:mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#8b7355]/10 flex items-center justify-center border border-[#8b7355]/20 group-hover:border-accent/40 transition-colors">
                                        <BookOpen className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <span className="text-xs font-mono tracking-widest uppercase text-[#5a4a3a]">Authorship - Book</span>
                                </div>
                                {/* Visual Hint Icon */}
                                <Hash className="w-4 h-4 text-[#8b7355]/30" />
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-xl md:text-3xl lg:text-4xl font-serif font-medium text-[#2a2218] mb-4 md:mb-6 leading-tight group-hover:text-[#1a1410] transition-colors">
                                    The Illusion of Change: Reflections on Stability, Chaos, and Becoming
                                </h3>
                                <p className="text-sm md:text-base text-[#5a4a3a]/80 font-serif leading-relaxed italic">
                                    "Structured, intentional, and published. Represents patience and clarity."
                                </p>
                            </div>

                            {/* Footer / CTA */}
                            <div className="mt-auto pt-6 md:pt-8 border-t border-[#d4c5a9]/40 flex items-center justify-between group-hover:border-accent/30 transition-colors">
                                <a href="https://tinyurl.com/y9a6hb6f" className="flex flex-col">
                                    <span className="text-[10px] text-[#8b7355]/60 uppercase tracking-widest mb-1">Amazon Kindle</span>
                                    <span className="text-xs md:text-sm text-[#3a2a1a] font-medium group-hover:text-accent transition-colors">Available Now</span>
                                </a>
                                <ArrowUpRight className="w-4 h-4 text-[#8b7355]/60 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </div>
                        </div>

                    </div>

                    {/* Center Fold Gradient Overlay (Vertical Spine Shadow - Desktop) */}
                    <div className="hidden md:block absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 pointer-events-none bg-gradient-to-r from-transparent via-[#8b7355]/50 to-transparent mix-blend-multiply opacity-60" />

                    {/* Horizontal Fold Gradient Overlay (Horizontal Spine Shadow - Mobile) */}
                    <div className="block md:hidden absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 pointer-events-none bg-gradient-to-b from-transparent via-[#8b7355]/50 to-transparent mix-blend-multiply opacity-60" />

                </div>
            </div>
        </section>
    )
}
