'use client'

import { useEffect, useState, useRef } from 'react'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
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
            className="relative py-32 px-4 md:px-8 bg-[#050505] overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
        >
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className={`mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        My <br />
                        <span className="text-white/40">Philosophy</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* Left Layout - Profile Image */}
                    <div className={`md:col-span-4 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                            <img
                                src="/IMG-20251129-WA0008.jpg"
                                alt="Vaibhav Saini"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>
                    </div>

                    {/* Right Layout - Quote */}
                    <div className={`md:col-span-8 relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        {/* Quote Icon */}
                        <div className="mb-8">
                            <span className="inline-block p-3 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400">
                                <Quote className="w-8 h-8 text-white fill-current" />
                            </span>
                        </div>

                        <blockquote className="text-2xl md:text-4xl font-medium text-white leading-snug mb-8">
                            "Great software isn't just about code; it's about empathy, systems thinking, and the relentless pursuit of simplicity in a complex world."
                        </blockquote>

                        <div className="border-t border-white/10 pt-6">
                            <p className="text-lg font-semibold text-white">Vaibhav Saini</p>
                            <p className="text-sm text-white/50">Full Stack Developer</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
