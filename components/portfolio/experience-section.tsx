'use client'

import { useEffect, useState, useRef } from 'react'
import { Briefcase, MapPin } from 'lucide-react'

const experiences = [
    {
        id: 1,
        role: 'Freelance Full-Stack Web Developer',
        company: 'Beauty Salon',
        location: 'Remote',
        description: 'Built a full-stack salon website with online appointment booking and product browsing.',
        highlights: [
            'Implemented booking flow and service management',
            'Designed clean, mobile-first UI with secure backend logic'
        ],
        tech: ['Next.js', 'Node.js', 'MongoDB', 'REST APIs']
    },
    {
        id: 2,
        role: 'SDE Intern',
        company: 'Hindalco Industries Ltd (Aditya Birla Group)',
        location: 'On-site',
        description: 'Developed automation-driven internal tools to improve issue resolution workflows.',
        highlights: [
            'Built priority-based issue tracking with auto-assignment',
            'Reduced average response time by 15%'
        ],
        tech: ['Next.js', 'TypeScript', 'MongoDB', 'JWT']
    }
]

export default function ExperienceSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
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
            id="experience"
            ref={sectionRef}
            className="relative py-20 px-4 md:px-8 bg-[#080808] overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-[0.3em] block mb-4">
                        💼 Professional Journey
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Work <br />
                        <span className="text-white/40">Experience</span>
                    </h2>
                </div>

                {/* Horizontal Timeline */}
                <div className="relative">

                    {/* Timeline Line */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20" />

                    {/* Experience Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-[#080808] z-10" />

                                {/* Card */}
                                <div className="group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-500 mt-8">

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                                    <div className="relative">
                                        {/* Role & Company */}
                                        <div className="mb-4">
                                            <div className="flex items-start gap-2 mb-2">
                                                <Briefcase className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground/70 mt-1">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground/80 mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="mb-4">
                                            <h4 className="text-xs font-mono text-accent/70 uppercase tracking-wider mb-2">
                                                Highlights
                                            </h4>
                                            <ul className="space-y-2">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground/70 flex items-start gap-2">
                                                        <span className="text-accent mt-1">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        <div>
                                            <h4 className="text-xs font-mono text-muted-foreground/40 uppercase tracking-wider mb-2">
                                                Tech Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
