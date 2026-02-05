export interface ProjectIdea {
    id: number
    title: string
    problem: string
    coreIdea: string
    whyItMatters: string
    techStack?: string[]
    theme: string
    expansion: string
    philosophy: string
}

export const projectIdeas: ProjectIdea[] = [
    {
        id: 1,
        title: "Life Friction Logger",
        problem: "People feel “life is hard” but can’t pinpoint where friction comes from.",
        coreIdea: "User logs only moments of resistance (missed habits, procrastination points). App visualizes friction patterns, not productivity.",
        whyItMatters: "You can’t fix your life if you don’t know where it resists you.",
        techStack: ["Next.js", "TypeScript", "IndexedDB", "D3.js"],
        theme: "Systematic Self-Correction",
        expansion: "The hardest part is honest data entry. Does the act of logging friction create more friction? Maybe voice-first capture is essential.",
        philosophy: "Awareness is the first step of the debug loop."
    },
    {
        id: 2,
        title: "Minimalist Personal CRM",
        problem: "Traditional CRMs are bloated; spreadsheets are clunky. We lose touch simply due to forgetfulness.",
        coreIdea: "A contact manager that treats relationships like plants—watering reminders based on custom frequencies.",
        whyItMatters: "Reclaims social connection from algorithmic feeds and automated birthday texts.",
        techStack: ["Next.js", "SQLite", "Tailwind"],
        theme: "Digital Intimacy",
        expansion: "Should it integrate with calendar/texts? No. That breaks the intentionality. Manual updates force you to actually think about the person.",
        philosophy: "Relationships die in the quiet comfort of 'I'll text them tomorrow'."
    },
    {
        id: 3,
        title: "Ephemeral File Transfer",
        problem: "Sending a file across devices often involves emailing oneself, using cloud drives, or unsafe public tools.",
        coreIdea: "A P2P file transfer web app using WebRTC. No servers, no storage. Scan QR and transfer directly.",
        whyItMatters: "Privacy-first, speed-first. Solves the 'AirDrop for non-Apple devices' problem elegantly.",
        techStack: ["WebRTC", "Svelte", "Socket.io"],
        theme: "Data Sovereignty",
        expansion: "The challenge: signaling without central servers. How truly 'serverless' can we go before UX suffers behind NATs and firewalls?",
        philosophy: "Data should travel like sound—directly between us, fading when the conversation ends."
    },
    {
        id: 4,
        title: "Interactive Algorithm Visualizer",
        problem: "Learning algorithms from static textbooks or code blocks is unintuitive and boring.",
        coreIdea: "A beautifully designed, step-by-step visualizer for complex algorithms (A*, Dijkstra). Users control the speed and input.",
        whyItMatters: "Bridging the gap between abstract theory and visual understanding makes better engineers.",
        techStack: ["React", "Framer Motion", "D3.js"],
        theme: "Visual Cognition",
        expansion: "Could this evolve into a debugging tool? Visualizing your own running code's memory state is the ultimate end-game here.",
        philosophy: "We understand what we can see move."
    },
    {
        id: 5,
        title: "Focus-First Read-Later App",
        problem: "Pocket and Instapaper clutter lists with images and ads. We hoard articles but never read them.",
        coreIdea: "Parses content into raw text, estimates reading time, and forces you to 'archive or read' one item before adding more.",
        whyItMatters: "Combats digital hoarding and promotes deep reading over content consumption.",
        techStack: ["Remix", "Mozilla Readability", "PostgreSQL"],
        theme: "Information Diet",
        expansion: "The 'one-in, one-out' mechanic is hostile but necessary. We don't need better storage; we need better filters.",
        philosophy: "Collection is not consumption. Hoarding is not learning."
    },
    {
        id: 6,
        title: "Local-First Password Manager",
        problem: "Cloud password managers have security breaches; local ones have poor UX.",
        coreIdea: "Stores encrypted vaults in the user's file system, syncing only encrypted blobs via generic cloud storage without knowing the keys.",
        whyItMatters: "Sovereignty over credentials without sacrificing the convenience of sync.",
        techStack: ["WASM", "Rust", "React"],
        theme: "Zero Trust Architecture",
        expansion: "Browser extensions are fragile security boundaries. Is a standalone app with native messaging the only truly safe path?",
        philosophy: "Security is not a product features; it's a state of being."
    },
    {
        id: 7,
        title: "API Mock Server Generator",
        problem: "Frontend dev is blocked when backend APIs aren't ready. Hardcoding JSON is messy.",
        coreIdea: "CLI that reads a defined schema (TypeScript/OpenAPI) and spins up a local server with realistic, randomized fake data.",
        whyItMatters: "Decouples frontend velocity from backend progress with zero maintenance overhead.",
        techStack: ["Node.js", "Faker.js", "Express"],
        theme: "Developer Velocity",
        expansion: "Mocking logic often drifts from implementation. Can we verify the mock against the real API once it's built?",
        philosophy: "Wait for nothing. Build the interface to the future before it arrives."
    },
    {
        id: 8,
        title: "Browser Tab Bankruptcy",
        problem: "We keep 50+ tabs open 'just in case', destroying RAM and focus.",
        coreIdea: "Chrome extension that auto-archives tabs not touched in 4 hours into a daily 'Stashed' markdown list, then closes them.",
        whyItMatters: "Externalizes memory load (both cognitive and RAM) to a persistent, searchable format.",
        techStack: ["Chrome Extension API", "React", "Markdown"],
        theme: "Cognitive Offloading",
        expansion: "The fear of losing context drives the clutter. If search is perfect, closing a tab becomes a relief, not a risk.",
        philosophy: "Your browser state is a reflection of your mental state. Keep it clear."
    },
    {
        id: 9,
        title: "Markdown-based Slide Deck",
        problem: "PowerPoint and Keynote are too heavy for technical presentations. Developers prefer text.",
        coreIdea: "Web app that converts simple Markdown into a beautiful, animated slide deck with code highlighting and live-preview.",
        whyItMatters: "Allows developers to treat presentations as code—version controlled, diffable, and simple.",
        techStack: ["Next.js", "MDX", "Spectacle"],
        theme: "Code as Content",
        expansion: "Layout is the hard part. Can an LLM infer the best layout based on the text density of the slide?",
        philosophy: "The medium should not fight the message."
    },
    {
        id: 10,
        title: "Smart Journaling Assistant",
        problem: "Staring at a blank page is hard. We forget what we achieved or felt during the day.",
        coreIdea: "Prompts you based on calendar events and git commits. 'You pushed to repo Y. How did that go?'",
        whyItMatters: "Reduces friction to reflection by using existing digital footprints as context.",
        techStack: ["React Native", "Google Calendar API", "GitHub API"],
        theme: "Augmented Reflection",
        expansion: "The danger is automating the reflection itself. The AI should ask the question, never write the answer.",
        philosophy: "We live in the data we generate, but we understand in the stories we tell."
    },
    {
        id: 11,
        title: "Semantic Code Search",
        problem: "Grepping for strings misses intent. We want 'where is auth handled', not just 'auth'.",
        coreIdea: "Tool that generates embeddings for a codebase and allows natural language search ('Show me payment validation logic').",
        whyItMatters: "Drastically reduces onboarding time for new engineers entering complex codebases.",
        techStack: ["Python", "LangChain", "Faiss"],
        theme: "Semantic Understanding",
        expansion: "Code changes fast. Keeping embeddings fresh without re-indexing everything is the real engineering challenge.",
        philosophy: "Code is literature written for machines. We need better glasses to read it."
    },
    {
        id: 12,
        title: "Recipe Cleaner",
        problem: "Recipe sites are 90% SEO-spam life stories and 10% instructions.",
        coreIdea: "URL input box that scrapes a recipe page, extracts ingredients/steps, and presents a minimal, check-off interface.",
        whyItMatters: "Respects the user's time and goal: cooking, not reading a novella.",
        techStack: ["Next.js", "Cheerio", "OpenAI"],
        theme: "User Agency",
        expansion: "Is this fair to the creators? This is the eternal war between content distribution and content consumption.",
        philosophy: "Signal over noise. Always."
    }
]

export function getIdeaOfTheDay(): { idea: ProjectIdea; nextRefresh: number; dayIndex: number } {
    // Stable epoch time
    const now = new Date()
    const startOfEpoch = new Date(0) // Unix epoch

    // Calculate total days passed
    const msPerDay = 24 * 60 * 60 * 1000
    const daysPassed = Math.floor((now.getTime() - startOfEpoch.getTime()) / msPerDay)

    // Modulo to cycle through ideas
    const ideaIndex = daysPassed % projectIdeas.length

    // Calculate next refresh time (midnight of next day)
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)

    return {
        idea: projectIdeas[ideaIndex],
        nextRefresh: tomorrow.getTime(),
        dayIndex: ideaIndex + 1
    }
}
