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
                className={`relative w-full max-w-5xl aspect-[1.4/1] md:aspect-[1.8/1] transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform-style-3d ${isVisible ? 'rotate-x-10 translate-y-0 opacity-100' : 'rotate-x-45 translate-y-20 opacity-0'
                    }`}
            >
                {/* Book Cover/Spine Effect (Behind pages) */}
                <div className="absolute inset-0 bg-[#0a0a0a] rounded-sm transform translate-z-[-2px] shadow-2xl shadow-black/80" />

                <div className="flex w-full h-full">

                    {/* LEFT PAGE - MEDIUM BLOG */}
                    <div
                        className={`relative w-1/2 h-full bg-[#111] origin-right transition-transform duration-1000 delay-300 ease-out border-r border-white/5 ${isVisible ? 'rotate-y-0' : 'rotate-y-12'
                            }`}
                        style={{
                            boxShadow: 'inset -20px 0 40px -10px rgba(0,0,0,0.5)',
                            borderTopLeftRadius: '4px',
                            borderBottomLeftRadius: '4px'
                        }}
                    >
                        {/* Paper Texture */}
                        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Content Container */}
                        <div className="p-6 md:p-12 h-full flex flex-col relative z-10 group cursor-pointer">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                                        <PenTool className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Medium Blog</span>
                                </div>
                                {/* Live Dot */}
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white/90 mb-6 leading-tight group-hover:text-white transition-colors">
                                    Some Stories Don’t Stay as Drafts
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground/60 font-serif leading-relaxed italic">
                                    “Essays on growth, identity, and systems. Not tutorials—lived insights.”
                                </p>
                            </div>

                            {/* Footer / CTA */}
                            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between group-hover:border-accent/20 transition-colors">
                                <a href="https://medium.com/@vaibhavsaini709/some-stories-dont-stay-as-drafts-b445a2d719af" className="flex flex-col">
                                    <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mb-1">Latest Entry</span>
                                    <span className="text-xs md:text-sm text-white/70 font-medium group-hover:text-accent transition-colors">Read Here</span>
                                </a>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </div>

                        </div>
                    </div>


                    {/* RIGHT PAGE - KINDLE BOOK */}
                    <div
                        className={`relative w-1/2 h-full bg-[#111] origin-left transition-transform duration-1000 delay-300 ease-out border-l border-white/5 ${isVisible ? 'rotate-y-0' : '-rotate-y-12'
                            }`}
                        style={{
                            boxShadow: 'inset 20px 0 40px -10px rgba(0,0,0,0.5)',
                            borderTopRightRadius: '4px',
                            borderBottomRightRadius: '4px'
                        }}
                    >
                        {/* Paper Texture */}
                        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Content Container */}
                        <div className="p-6 md:p-12 h-full flex flex-col relative z-10 group cursor-pointer">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/30 transition-colors">
                                        <BookOpen className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Authorship - Book</span>
                                </div>
                                {/* Visual Hint Icon */}
                                <Hash className="w-4 h-4 text-muted-foreground/20" />
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white/90 mb-6 leading-tight group-hover:text-white transition-colors">
                                    The Illusion of Change: Reflections on Stability, Chaos, and Becoming
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground/60 font-serif leading-relaxed italic">
                                    “Structured, intentional, and published. Represents patience and clarity.”
                                </p>
                            </div>

                            {/* Footer / CTA */}
                            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between group-hover:border-accent/20 transition-colors">
                                <a href="https://tinyurl.com/y9a6hb6f" className="flex flex-col">
                                    <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mb-1">Amazon Kindle</span>
                                    <span className="text-xs md:text-sm text-white/70 font-medium group-hover:text-accent transition-colors">Available Now</span>
                                </a>
                                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </div>
                        </div>

                    </div>

                    {/* Center Fold Gradient Overlay (Spine Shadow) */}
                    <div className="absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 pointer-events-none bg-gradient-to-r from-transparent via-black/40 to-transparent mix-blend-multiply opacity-80" />

                </div>
            </div>
        </section>
    )
}
