'use client'

export default function MarqueeSection() {
    return (
        <div className="relative w-full overflow-hidden py-12 bg-background pointer-events-none">
            <div className="flex w-max whitespace-nowrap animate-marquee will-change-transform">
                {/* We render two groups of content to ensure a seamless loop */}
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex shrink-0">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center pr-16">
                                <span className="text-xl md:text-4xl font-bold text-accent/80 font-mono tracking-widest uppercase">
                                    PROBLEMS FIRST, CODE SECOND • AUTOMATE THE BORING • DESIGN FOR SCALE • DEBUG DEEPLY • WRITE CODE HUMANS CAN READ •
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* Gradient Edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
    )
}
