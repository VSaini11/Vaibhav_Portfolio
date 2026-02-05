'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Zap, Plus, Minus } from 'lucide-react'
import { getIdeaOfTheDay, type ProjectIdea, projectIdeas } from '@/lib/ideas'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// Constellation Component
function IdeaConstellation({ activeIndex }: { activeIndex: number }) {
    // Generate a static deterministic set of positions based on the 12 ideas
    // Using a simple circular or spiral layout for "constellation" feel
    const dots = projectIdeas.map((idea, i) => {
        const total = projectIdeas.length
        const angle = (i / total) * Math.PI * 2
        // Spiral modifier
        const radius = 120 + (i % 3) * 30

        return {
            id: idea.id,
            x: 50 + Math.cos(angle) * (radius / 5), // approximate percent-ish
            y: 50 + Math.sin(angle) * (radius / 5),
            isActive: i + 1 === activeIndex
        }
    })

    return (
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
            {/* Using a fixed container for the galaxy/dots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
                {dots.map((dot, i) => (
                    <motion.div
                        key={dot.id}
                        initial={false}
                        animate={{
                            opacity: dot.isActive ? 1 : 0.3,
                            scale: dot.isActive ? 1.5 : 1,
                            boxShadow: dot.isActive ? "0 0 15px rgba(255,255,255,0.8)" : "none"
                        }}
                        transition={{ duration: 1.5 }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white transition-colors duration-1000"
                        style={{
                            left: `${50 + (i % 2 === 0 ? 1 : -1) * (Math.cos(i) * 40)}%`, // Randomized artistic scatter
                            top: `${50 + (i % 2 === 0 ? -1 : 1) * (Math.sin(i) * 30)}%`
                        }}
                    />
                ))}

                {/* Connecting lines for effect (optional/subtle) */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    <circle cx="50%" cy="50%" r="30%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-zinc-500 animate-[spin_120s_linear_infinite]" />
                </svg>
            </div>
        </div>
    )
}

export default function ThinkerMode() {
    const [currentIdea, setCurrentIdea] = useState<ProjectIdea | null>(null)
    const [dayIndex, setDayIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const { idea, dayIndex } = getIdeaOfTheDay()
        setCurrentIdea(idea)
        setDayIndex(dayIndex)
    }, [])

    if (!currentIdea) return null

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-amber-500/30">

            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
                <IdeaConstellation activeIndex={dayIndex} />
            </div>

            {/* Thinking Context Layer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute top-24 left-0 right-0 text-center text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mix-blend-plus-lighter pointer-events-none"
            >
                Thinking about {currentIdea.theme}...
            </motion.div>

            {/* Navigation */}
            <Link
                href="/"
                className="fixed top-8 left-8 flex items-center gap-3 text-zinc-500 hover:text-zinc-100 transition-colors group z-50 mix-blend-difference"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-xs tracking-wider">BUILDER SCOPE</span>
            </Link>

            {/* Main Card */}
            <div className="max-w-xl w-full z-10 perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIdea.id}
                        initial={{ opacity: 0, y: 30, rotateX: 5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="relative bg-zinc-900/30 backdrop-blur-2xl rounded-sm p-8 md:p-12 border border-white/5 shadow-[0_0_50px_-10px_rgba(0,0,0,0.7)]"
                    >
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {/* Top Meta */}
                        <div className="flex items-center justify-between mb-10 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                            <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${dayIndex % 2 === 0 ? 'bg-amber-500' : 'bg-indigo-500'} shadow-[0_0_10px_currentColor] animate-pulse`} />
                                <span>Thinking Cycle: {currentIdea.theme}</span>
                            </div>
                        </div>

                        {/* Core Content */}
                        <div className="space-y-8">
                            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-white/90 leading-tight">
                                {currentIdea.title}
                            </h1>

                            <p className="text-base text-zinc-400 font-light leading-relaxed max-w-md">
                                {currentIdea.problem}
                            </p>

                            <div className="pl-6 border-l border-white/10 py-1">
                                <p className="text-lg text-zinc-200 leading-relaxed font-normal">
                                    {currentIdea.coreIdea}
                                </p>
                            </div>

                            <div className="pt-2">
                                <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2 font-mono">Why it matters</div>
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    {currentIdea.whyItMatters}
                                </p>
                            </div>

                            {/* Expand Interaction */}
                            <div className="pt-4">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="group flex items-center gap-2 text-xs text-zinc-500 hover:text-amber-400/80 transition-colors focus:outline-none"
                                >
                                    {isExpanded ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                    <span className="font-mono tracking-wide">
                                        {isExpanded ? "COLLAPSE THOUGHT" : "EXPAND THOUGHT"}
                                    </span>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4  pl-5 border-l border-amber-500/10 mt-2">
                                        <p className="text-sm text-amber-500/70 italic leading-relaxed">
                                            "{currentIdea.expansion}"
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Tech Stack Footer */}
                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-2">
                            {currentIdea.techStack?.map((tech) => (
                                <div key={tech} className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Philosophy Anchor */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-8 text-center max-w-md px-6"
            >
                <p className="text-xs text-zinc-500 font-serif italic tracking-wide">
                    {currentIdea.philosophy}
                </p>
            </motion.div>

        </div>
    )
}
