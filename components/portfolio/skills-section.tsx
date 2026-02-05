'use client'

import { useEffect, useState, useRef } from 'react'

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'C++', icon: '💻' },
            { name: 'Python', icon: '🐍' },
            { name: 'JavaScript', icon: '⚡' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'SQL', icon: '🗄️' }
        ]
    },
    {
        title: 'Data Structures & Algorithms',
        skills: [
            { name: 'DSA (C++)', icon: '🧮' },
            { name: 'Problem Solving', icon: '🧩' },
            { name: 'Algorithmic Thinking', icon: '🎯' }
        ]
    },
    {
        title: 'Web Development',
        skills: [
            { name: 'HTML5', icon: '🌐' },
            { name: 'CSS3', icon: '🎨' },
            { name: 'React.js', icon: '⚛️' },
            { name: 'Next.js', icon: '▲' },
            { name: 'Node.js', icon: '🟢' }
        ]
    },
    {
        title: 'Backend & APIs',
        skills: [
            { name: 'REST APIs', icon: '🔌' },
            { name: 'Express.js', icon: '🚂' },
            { name: 'FastAPI', icon: '⚡' },
            { name: 'JWT & OAuth2', icon: '🔐' }
        ]
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MongoDB', icon: '🍃' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'Supabase', icon: '⚡' }
        ]
    },
    {
        title: 'Version Control & Tooling',
        skills: [
            { name: 'Git', icon: '🔀' },
            { name: 'GitHub', icon: '🐙' }
        ]
    }
]

export default function SkillsSection() {
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
            ref={sectionRef}
            className="relative py-12 px-4 md:px-8 bg-[#050505] overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <div className={`mb-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-[0.3em] block mb-2">
                        🛠️ What I Work With
                    </span>

                </div>

                {/* Skills Categories */}
                <div className="space-y-5">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.title}
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${categoryIndex * 50}ms` }}
                        >
                            {/* Category Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">

                                {/* Left: Category Title */}
                                <div className="md:col-span-3">
                                    <h3 className="text-xs md:text-sm font-bold text-white/60 uppercase tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Right: Skills Grid */}
                                <div className="md:col-span-9">
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                                            >
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-sm">{skill.icon}</span>
                                                    <span className="text-xs md:text-sm font-medium text-white group-hover:text-accent transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Divider */}
                            {categoryIndex < skillCategories.length - 1 && (
                                <div className="mt-5 border-t border-white/5" />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
