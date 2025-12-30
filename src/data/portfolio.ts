export const portfolioData = {
  // Hero Section
  hero: {
    headline: "Hi, I'm Saksham",
    subheadline: "Vibe Coder → Quant Developer",
    description: "Built 15+ full end-to-end projects. Currently mastering Python, ML fundamentals, and quantitative finance to build intelligent trading systems.",
    cta: {
      primary: "View Projects",
      secondary: "My Agency",
      tertiary: "Let's Talk"
    }
  },

  // About Section
  about: {
    title: "Vibe Coder Building the Future",
    content: "I'm a vibe coder who's built 10-15+ full end-to-end projects, ranging from AI-powered legal tech to food ordering platforms. Now transitioning into quantitative finance and algorithmic trading, I'm mastering Python (NumPy, Pandas, Scikit-learn, PyTorch), C++, Jupyter notebooks, and ML fundamentals to build intelligent trading systems. Won hackathons with machine learning projects. Currently diving deep into quant strategies, backtesting frameworks, and predictive models for financial markets."
  },

  // Skills Section
  skills: [
    {
      category: "Currently Mastering 🚀",
      items: [
        { name: "Python (NumPy, Pandas)", level: "Mastering", icon: "code" },
        { name: "Scikit-learn & ML Fundamentals", level: "Mastering", icon: "brain" },
        { name: "PyTorch & Deep Learning", level: "Mastering", icon: "cpu" },
        { name: "Jupyter Notebooks", level: "Mastering", icon: "book-open" }
      ]
    },
    {
      category: "AI/ML & Data Science",
      items: [
        { name: "Machine Learning", level: "Advanced", icon: "brain" },
        { name: "Data Analysis (Pandas)", level: "Advanced", icon: "bar-chart" },
        { name: "Natural Language Processing", level: "Advanced", icon: "message-square" },
        { name: "Computer Vision", level: "Intermediate", icon: "eye" }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "Python (Expert)", level: "Expert", icon: "terminal" },
        { name: "C++ (Learning)", level: "Learning", icon: "code-2" },
        { name: "JavaScript/TypeScript", level: "Advanced", icon: "code" },
        { name: "SQL", level: "Advanced", icon: "database" }
      ]
    },
    {
      category: "Quantitative Finance",
      items: [
        { name: "Algorithmic Trading", level: "Learning", icon: "activity" },
        { name: "Quant Strategies", level: "Learning", icon: "trending-up" },
        { name: "Portfolio Management", level: "Learning", icon: "pie-chart" },
        { name: "Risk Analysis", level: "Learning", icon: "shield" }
      ]
    },
    {
      category: "Full-Stack Development",
      items: [
        { name: "React & Next.js", level: "Expert", icon: "layout" },
        { name: "Node.js & Express", level: "Advanced", icon: "server" },
        { name: "MongoDB & PostgreSQL", level: "Advanced", icon: "database" },
        { name: "REST APIs", level: "Expert", icon: "link" }
      ]
    }
  ],

  // Projects Section
  projects: [
    {
      id: 1,
      category: "AI/ML - Hackathon Winner 🏆",
      name: "LexiScanAI - Legal Document Analyzer",
      description: "Won hackathon with this AI-powered legal tech platform using machine learning for document analysis. Best project till now with ML teaching capabilities and intelligent document scanning.",
      problem: "Revolutionize legal document analysis using cutting-edge machine learning and NLP.",
      tech: ["Python", "Machine Learning", "NLP", "React", "AI Models"],
      github: "https://github.com/sakshamgrg",
      demo: "https://lexiscanai.vercel.app/",
      highlights: ["🏆 Hackathon Winner", "ML Teaching", "Best Project"]
    },
    {
      id: 2,
      category: "Full-Stack Web App",
      name: "Medaiii - Medical Platform",
      description: "My favorite and most time-consuming project. Full end-to-end medical platform with complex features and extensive development.",
      problem: "Create comprehensive medical platform with advanced features and seamless UX.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/sakshamgrg",
      demo: "https://medaiii.vercel.app/",
      highlights: ["💖 Favorite Project", "Most Complex", "Full E2E"]
    },
    {
      id: 3,
      category: "Backend Development",
      name: "FoodCourt - Ordering Platform",
      description: "Currently working on the backend architecture for this food ordering platform. Building robust APIs and database systems.",
      problem: "Develop scalable backend infrastructure for high-traffic food ordering platform.",
      tech: ["Node.js", "Express", "PostgreSQL", "REST API", "Backend"],
      github: "https://github.com/sakshamgrg",
      demo: "https://foodcourt-k318.vercel.app/",
      highlights: ["🚧 In Progress", "Backend Focus", "Scalable APIs"]
    },
    {
      id: 4,
      category: "AI Legal Tech",
      name: "LawMind - Legal AI Assistant",
      description: "Early-stage legal AI project that's partially working. Future-focused platform for intelligent legal assistance and automation.",
      problem: "Build AI-powered legal assistant for future of legal tech industry.",
      tech: ["Python", "AI", "React", "Natural Language", "Legal Tech"],
      github: "https://github.com/sakshamgrg",
      demo: "https://law-mind.vercel.app/",
      highlights: ["🔮 Future Project", "AI Assistant", "Legal Tech"]
    }
  ],

  // Hackathons Section
  hackathons: [
    {
      id: 1,
      name: "LexiScanAI Hackathon 🏆",
      year: 2024,
      role: "Winner - AI/ML Legal Tech",
      outcome: "WON HACKATHON with LexiScanAI project using machine learning for legal document analysis",
      tech: ["Python", "Machine Learning", "NLP", "React", "AI Models"]
    },
    {
      id: 2,
      name: "GeeksforGeeks Hackathon",
      year: 2024,
      role: "Participant - Algorithmic Challenge",
      outcome: "Built AI trading algorithm using ensemble learning and gradient boosting",
      tech: ["Python", "Scikit-learn", "XGBoost", "Backtrader"]
    },
    {
      id: 3,
      name: "MurFAI - IIT Bombay",
      year: 2024,
      role: "Participant - AI in Finance",
      outcome: "Featured Project - RL trading agent using deep reinforcement learning",
      tech: ["Python", "PyTorch", "OpenAI Gym", "DQN"]
    }
  ],

  // Agency Business
  agency: {
    title: "Saksham's Digital Agency",
    tagline: "Building Tomorrow's Digital Solutions",
    description: "Full-service digital agency specializing in cutting-edge web development, AI automation, and creative design. From concept to deployment, we craft premium digital experiences.",
    services: [
      {
        id: 1,
        icon: "code",
        name: "Website Development",
        description: "Custom websites & web applications built with React, Next.js, and modern tech stack",
        features: ["Responsive Design", "SEO Optimized", "Lightning Fast", "Full-Stack Solutions"]
      },
      {
        id: 2,
        icon: "smartphone",
        name: "App Development",
        description: "Cross-platform mobile applications with seamless UX and powerful backends",
        features: ["iOS & Android", "Real-time Features", "API Integration", "Cloud Backend"]
      },
      {
        id: 3,
        icon: "palette",
        name: "Thumbnail & Graphic Design",
        description: "Eye-catching thumbnails, social media graphics, and brand identity design",
        features: ["YouTube Thumbnails", "Social Media Posts", "Brand Identity", "UI/UX Design"]
      },
      {
        id: 4,
        icon: "brain",
        name: "AI Agents & Automation",
        description: "Custom AI agents, chatbots, and automation solutions powered by machine learning",
        features: ["AI Chatbots", "Automation Tools", "ML Integration", "Custom AI Models"]
      },
      {
        id: 5,
        icon: "zap",
        name: "End-to-End Solutions",
        description: "Complete digital transformation from ideation to deployment and maintenance",
        features: ["Full Project Management", "Cloud Deployment", "Ongoing Support", "Scalable Infrastructure"]
      }
    ],
    pricing: {
      note: "Flexible pricing based on project scope and requirements",
      contact: "Get a custom quote tailored to your needs"
    },
    cta: "Let's Build Something Amazing"
  },

  // Certifications Section (Optional - can be hidden)
  certifications: [],

  // Research Interests
  research: {
    title: "Research & Focus Areas",
    description: "Passionate about applying cutting-edge AI and machine learning to quantitative finance. Exploring reinforcement learning for trading, high-frequency trading systems, sentiment analysis for alpha generation, and advanced portfolio risk management techniques.",
    interests: [
      {
        title: "Reinforcement Learning for Trading",
        description: "Exploring Deep Q-Networks and PPO algorithms for automated trading decisions in volatile markets.",
        icon: "brain"
      },
      {
        title: "High-Frequency Trading Systems",
        description: "Research on low-latency execution systems, order book dynamics, and market microstructure.",
        icon: "zap"
      },
      {
        title: "Sentiment-Driven Alpha Generation",
        description: "Using NLP and transformer models to extract trading signals from alternative data sources.",
        icon: "trending-up"
      },
      {
        title: "Portfolio Risk Management",
        description: "Advanced risk metrics, VaR calculations, and stress testing for institutional portfolios.",
        icon: "shield"
      }
    ]
  },

  // Social Links
  social: {
    github: "https://github.com/sakshamgrg",
    linkedin: "https://www.linkedin.com/in/sakshamgrg",
    twitter: "https://twitter.com/sakshamgrg",
    email: "grgsaksham25@gmail.com",
    resume: "/resume.pdf"
  },

  // Stats for About Section
  stats: {
    projects: "15+ Full E2E Projects",
    experience: "Vibe Coding Master",
    dedication: "100%",
    skills: "Python | ML | Quant"
  }
};
