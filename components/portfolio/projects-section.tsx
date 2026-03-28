'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Zephyr',
    subtitle: 'Intelligent Issue Tracking',
    description: 'Automation-driven platform for real-time, multi-department issue reporting and resolution.',
    stack: ['Next.js', 'TypeScript', 'MongoDB'],
    link: 'https://github.com/VSaini11/Issue-Tracking-web-app',
    image: '/2.jpg',
    color: '#3b82f6'
  },
  {
    id: '02',
    title: 'GoLinkHub',
    subtitle: 'Link Analytics Platform',
    description: 'Scalable link management and analytics platform for tracking engagement.',
    stack: ['Next.js', 'Recharts', 'Vercel'],
    link: 'https://golinkhub.vercel.app/',
    image: '/3.jpg',
    color: '#8b5cf6'
  },
  {
    id: '03',
    title: 'Error Analysis AI',
    subtitle: 'GenAI Debugging Agent',
    description: 'AI-assisted debugging tool that converts raw error logs into actionable insights.',
    stack: ['Python', 'Gemini AI', 'REST APIs'],
    link: 'https://github.com/VSaini11/backend_code_debugger',
    image: '/4.jpg',
    color: '#ef4444'
  },
  {
    id: '04',
    title: 'SafeDrop',
    subtitle: 'Secure File Exchange',
    description: 'Secure file-sharing system with time-limited access and strong authentication.',
    stack: ['Next.js', 'Supabase', 'JWT'],
    link: 'https://safe-drop-blond.vercel.app/',
    image: '/5.jpg',
    color: '#10b981'
  },
  {
    id: '05',
    title: 'Zerodup',
    subtitle: 'Advanced Duplicate File Detector',
    description: 'Scalable web tool that detects duplicate files across entire directories.',
    stack: ['Next.js', 'Web Workers', 'SHA-256'],
    link: 'https://zerodup.vercel.app/',
    image: '/6.jpg',
    color: '#f59e0b'
  }
]

function ProjectCard({ project, index, scrollXProgress }: { project: any, index: number, scrollXProgress: any }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Mouse position for tilt
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const tiltXSpring = useSpring(tiltX, { damping: 25, stiffness: 200 })
  const tiltYSpring = useSpring(tiltY, { damping: 25, stiffness: 200 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    tiltX.set((y - 0.5) * 15)
    tiltY.set((x - 0.5) * -15)
  }

  const handleMouseLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
    setIsHovered(false)
  }

  // Perspective scroll transforms based on vertical-to-horizontal progress
  const step = 1 / (projects.length - 1)
  const mid = index * step
  const range = [mid - step, mid, mid + step]
  
  const rotateYScroll = useTransform(scrollXProgress, range, [20, 0, -20])
  const scaleScroll = useTransform(scrollXProgress, range, [0.92, 1, 0.92])
  const opacityScroll = useTransform(scrollXProgress, range, [0.5, 1, 0.5])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="flex-shrink-0 w-[85vw] md:w-[450px] h-[580px] relative group cursor-pointer py-5 outline-none"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        style={{
          rotateY: rotateYScroll,
          scale: scaleScroll,
          opacity: opacityScroll,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        <motion.div
          style={{
            rotateX: tiltXSpring,
            rotateY: tiltYSpring,
            transformStyle: 'preserve-3d',
          }}
          className="w-full h-full relative glass-card rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20"
        >
          <div className="absolute -top-10 -right-10 text-[180px] font-bold text-white/[0.03] select-none pointer-events-none">
            {project.id}
          </div>

          <div className="h-[280px] w-full relative overflow-hidden bg-black/40">
            <motion.img
              src={project.image}
              alt={project.title}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <motion.div 
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              className="absolute inset-0"
              style={{ backgroundColor: project.color, mixBlendMode: 'overlay' }}
            />
          </div>

          <div className="p-8 h-full flex flex-col pt-4">
            <motion.div animate={{ y: isHovered ? -5 : 0 }}>
              <span className="text-[10px] lowercase tracking-[0.4em] text-white/40 font-mono mb-2 block">
                {project.subtitle}
              </span>
              <h3 className="text-3xl font-bold text-white mb-3 tracking-tighter">
                {project.title}
              </h3>
            </motion.div>

            <p className="text-sm text-white/40 leading-relaxed mb-6 line-clamp-3 font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech: string) => (
                <span key={tech} className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[9px] text-white/40 font-mono uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-3 text-sm font-semibold text-white group/link transition-all">
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-500 group-hover/link:-translate-y-full uppercase tracking-widest text-[10px]">
                    Launch View
                  </span>
                  <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover/link:translate-y-0 text-accent uppercase tracking-widest text-[10px]">
                    Launch View
                  </span>
                </span>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-white group-hover/link:text-black transition-all duration-500"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Pixel-perfect horizontal mapping
  const cardWidth = 450
  const gap = 64
  const totalShift = (projects.length - 1) * (cardWidth + gap)
  
  const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const xSpring = useTransform(scrollSpring, [0, 1], [0, -totalShift])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleGlobalMouseMove)
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove)
  }, [])

  const scrollToIndex = (index: number) => {
     if (!containerRef.current) return
     const totalHeight = containerRef.current.offsetHeight
     const targetPos = (index / (projects.length - 1)) * (totalHeight - window.innerHeight)
     window.scrollTo({
        top: containerRef.current.offsetTop + targetPos,
        behavior: 'smooth'
     })
  }

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      className="relative h-[300vh] bg-[#030303] z-20"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-30">
        <div className="absolute inset-0 noise-bg opacity-40 pointer-events-none" />
        
        {/* Immersive Background Lighting */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full blur-[200px] opacity-[0.05] pointer-events-none transition-all duration-1000 ease-out z-0"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            left: mousePosition.x - 500,
            top: mousePosition.y - 500,
          }}
        />

        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-20 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-[1px] bg-accent/40" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-[0.6em]">
                  Selected Works
                </span>
              </motion.div>
              <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4">
                WORK <br />
                <span className="text-transparent outline-text bg-clip-text bg-gradient-to-b from-white/40 to-white/5">
                  STREAMS
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-8 md:items-end">
               <div className="flex gap-4">
                <button
                  onClick={() => {
                    const currentIdx = Math.round(scrollYProgress.get() * (projects.length - 1))
                    scrollToIndex(Math.max(0, currentIdx - 1))
                  }}
                  className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                   onClick={() => {
                    const currentIdx = Math.round(scrollYProgress.get() * (projects.length - 1))
                    scrollToIndex(Math.min(projects.length - 1, currentIdx + 1))
                  }}
                  className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full z-10 flex">
          <motion.div
            style={{ 
              x: xSpring,
              paddingLeft: windowWidth > 0 ? `calc(50vw - 225px)` : "10vw"
            }}
            className="flex gap-16"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                scrollXProgress={scrollYProgress} 
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <div className="w-64 h-[1px] bg-white/[0.05] rounded-full relative overflow-hidden">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-accent"
               style={{ 
                 width: useTransform(scrollYProgress, [0, 1], ['10%', '100%']) 
               }}
             />
           </div>
           <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.8em] animate-pulse">
             Scroll Down to Explore
           </span>
        </div>
      </div>
    </section>
  )
}
