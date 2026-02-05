'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Coffee, Zap, X } from 'lucide-react'

interface TimeMessage {
    message: string
    subtitle: string
    icon: typeof Moon
    gradient: string
    glow: string
}

const timeMessages: Record<string, TimeMessage> = {
    lateNight: {
        message: "Late-night builders are a different breed.",
        subtitle: "🌙 You found the night owl easter egg!",
        icon: Moon,
        gradient: "from-purple-900/90 to-blue-900/90",
        glow: "from-purple-500/20 to-blue-500/20"
    },
    earlyMorning: {
        message: "Early bird gets the code!",
        subtitle: "☀️ You found the early riser easter egg!",
        icon: Sun,
        gradient: "from-orange-900/90 to-yellow-900/90",
        glow: "from-orange-500/20 to-yellow-500/20"
    },
    lunchTime: {
        message: "Lunch break coder? Respect.",
        subtitle: "☕ You found the midday easter egg!",
        icon: Coffee,
        gradient: "from-amber-900/90 to-orange-900/90",
        glow: "from-amber-500/20 to-orange-500/20"
    },
    nightGrind: {
        message: "The grind never stops!",
        subtitle: "⚡ You found the night grind easter egg!",
        icon: Zap,
        gradient: "from-indigo-900/90 to-purple-900/90",
        glow: "from-indigo-500/20 to-purple-500/20"
    }
}

export default function TimeBanner() {
    const [currentMessage, setCurrentMessage] = useState<TimeMessage | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isDismissed, setIsDismissed] = useState(false)

    useEffect(() => {
        // Check if banner was previously dismissed in this session
        const dismissed = sessionStorage.getItem('timeBannerDismissed')
        if (dismissed) {
            setIsDismissed(true)
            return
        }

        // Check current time and set appropriate message
        const checkTime = () => {
            const now = new Date()
            const hours = now.getHours()

            let message: TimeMessage | null = null

            // 12am-4am: Late night
            if (hours >= 0 && hours < 4) {
                message = timeMessages.lateNight
            }
            // 5am-7am: Early morning
            else if (hours >= 5 && hours < 8) {
                message = timeMessages.earlyMorning
            }
            // 12pm-2pm: Lunch time
            else if (hours >= 12 && hours < 14) {
                message = timeMessages.lunchTime
            }
            // 9pm-11pm: Night grind
            else if (hours >= 21 && hours < 24) {
                message = timeMessages.nightGrind
            }

            if (message) {
                setCurrentMessage(message)
                // Delay visibility for entrance animation
                setTimeout(() => setIsVisible(true), 500)
            } else {
                setCurrentMessage(null)
                setIsVisible(false)
            }
        }

        checkTime()
        // Check every minute in case time changes while user is on site
        const interval = setInterval(checkTime, 60000)

        return () => clearInterval(interval)
    }, [])

    const handleDismiss = () => {
        setIsVisible(false)
        setTimeout(() => {
            setIsDismissed(true)
            sessionStorage.setItem('timeBannerDismissed', 'true')
        }, 300)
    }

    if (!currentMessage || isDismissed) return null

    const Icon = currentMessage.icon

    return (
        <div
            className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 w-[calc(100%-2rem)] max-w-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
        >
            <div className={`relative bg-gradient-to-r ${currentMessage.gradient} backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-2xl max-w-md`}>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentMessage.glow} rounded-2xl blur-xl -z-10`} />

                <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex-1">
                        <p className="text-white font-medium text-sm md:text-base">
                            "{currentMessage.message}"
                        </p>
                        <p className="text-white/60 text-xs mt-1">
                            {currentMessage.subtitle}
                        </p>
                    </div>

                    {/* Dismiss button */}
                    <button
                        onClick={handleDismiss}
                        className="flex-shrink-0 p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4 text-white/80" />
                    </button>
                </div>
            </div>
        </div>
    )
}
