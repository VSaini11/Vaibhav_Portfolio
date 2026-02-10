'use client'

import { useEffect, useState } from 'react'
import {
  Github,
  Code,
  Palette,
  Globe
} from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#050505] text-white p-4 pt-4 md:pt-28 md:p-8 flex items-center justify-center overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className={`w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* LEFT COLUMN: Profile Card */}
        <div className="lg:col-span-4 h-full">
          <div className="bg-white rounded-[2rem] p-6 h-full text-black flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">

            {/* Decorative Dash Line */}
            <div className="absolute top-10 left-10 w-24 h-24 border-[3px] border-dashed border-orange-500/30 rounded-full -z-0" />

            {/* Profile Image */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-neutral-100">
              <img
                src="/IMG-20251129-WA0008.jpg"
                alt="Vaibhav Saini"
                className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
              />
            </div>

            {/* Name & Title */}
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Vaibhav Saini</h2>

              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="bg-orange-500 rounded-full p-1">
                  <Globe className="w-1 h-1 text-white fill-current" />
                </span>
                <p className="text-sm font-medium text-neutral-600 leading-snug max-w-[250px]">
                  A Full Stack Developer .
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-6 mt-auto pb-4">
                <a href="https://github.com/VSaini11" className="text-orange-500 hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://leetcode.com/u/vstheone11/" className="text-orange-500 hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </a>
                <a href="https://www.behance.net/vaibhavsaini28" className="text-orange-500 hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Content Grid */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Top Text Section */}
          <div className="flex-1 flex flex-col justify-center py-8 lg:py-0 pl-4 relative">
            <h1 className="text-5xl sm:text-8xl md:text-8xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-4 text-white">
              Full Stack<br />
              <span className="text-orange-400/90 relative inline-flex items-center gap-4 align-middle">
                Developer
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-12">
              I am a final-year B.Tech student passionate about building impactful software solutions that blend problem-solving, full-stack development, and emerging AI technologies.
            </p>

            {/* Desktop Buttons - Side by Side */}
            <div className="hidden md:flex items-center gap-3 mb-4">
              <a
                href="https://amzn.in/d/0fMc2knZ"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300 group"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors uppercase">
                  A Book I Wrote
                </span>
              </a>

              <Link
                href="/thinker"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300 group"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-orange-400 group-hover:text-orange-300 transition-colors uppercase">
                  Thinker Mode
                </span>
              </Link>
            </div>

            {/* Mobile Buttons - Side by Side */}
            <div className="md:hidden flex items-center gap-3 mb-4">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                  A Book I Wrote
                </span>
              </a>

              <Link
                href="/thinker"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-orange-400 uppercase">
                  Thinker Mode
                </span>
              </Link>
            </div>


            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mb-12 border-white/5 pt-8">
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">2.5k+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">On <br />LinkedIn</span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">10+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Projects <br />Completed</span>
              </div>
            </div>
          </div>



        </div>

      </div>
    </section>
  )
}
