export const portfolioData = {
  // Hero Section
  hero: {
    headline: "Building Intelligent Systems",
    subheadline: "at the intersection of AI, code, and creativity.",
    description: "AI/ML Engineer passionate about solving real-world problems through data-driven solutions and innovative technology.",
    cta: {
      primary: "View Projects",
      secondary: "Download Resume",
      tertiary: "Connect on LinkedIn"
    }
  },

  // About Section
  about: {
    title: "About Me",
    content: "I'm an AI/ML engineer focused on building intelligent systems that solve real problems. With a strong foundation in Python, machine learning frameworks, and full-stack development, I create data-driven solutions from concept to deployment. Active in hackathons, always learning, and driven by the challenge of turning complex data into actionable insights. Currently exploring the intersection of AI, quantitative systems, and automation."
  },

  // Skills Section
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: "Advanced", icon: "code-2" },
        { name: "C++", level: "Intermediate", icon: "cpu" },
        { name: "JavaScript", level: "Advanced", icon: "terminal" },
        { name: "TypeScript", level: "Intermediate", icon: "file-code" }
      ]
    },
    {
      category: "AI/ML",
      items: [
        { name: "NumPy", level: "Advanced", icon: "brain" },
        { name: "Pandas", level: "Advanced", icon: "database" },
        { name: "Scikit-learn", level: "Advanced", icon: "network" },
        { name: "PyTorch", level: "Learning", icon: "zap" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "React", level: "Advanced", icon: "layout" },
        { name: "Next.js", level: "Advanced", icon: "layers" },
        { name: "Tailwind CSS", level: "Advanced", icon: "palette" },
        { name: "Node.js", level: "Intermediate", icon: "server" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git/GitHub", level: "Advanced", icon: "git-branch" },
        { name: "VS Code", level: "Advanced", icon: "code" },
        { name: "Linux", level: "Intermediate", icon: "terminal-square" },
        { name: "Docker", level: "Learning", icon: "box" }
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        { name: "SQL", level: "Advanced", icon: "database" },
        { name: "Data Visualization", level: "Advanced", icon: "bar-chart" },
        { name: "Statistical Analysis", level: "Intermediate", icon: "trending-up" },
        { name: "ETL Pipelines", level: "Intermediate", icon: "workflow" }
      ]
    }
  ],

  // Projects Section
  projects: [
    {
      id: 1,
      category: "AI/ML",
      name: "Sentiment Analysis Engine",
      description: "Real-time sentiment analysis for social media data using NLP and deep learning.",
      problem: "Analyze customer sentiment from thousands of reviews in real-time.",
      tech: ["Python", "PyTorch", "NLP", "FastAPI", "Docker"],
      github: "https://github.com/yourusername/sentiment-engine",
      demo: "https://sentiment-demo.vercel.app",
      highlights: ["95% accuracy", "Processes 10K reviews/min", "RESTful API"]
    },
    {
      id: 2,
      category: "AI/ML",
      name: "Predictive Stock Analyzer",
      description: "ML-powered stock price prediction using historical data and technical indicators.",
      problem: "Predict stock trends using quantitative analysis and machine learning.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "yFinance"],
      github: "https://github.com/yourusername/stock-predictor",
      demo: null,
      highlights: ["LSTM model", "Multi-timeframe analysis", "Backtesting engine"]
    },
    {
      id: 3,
      category: "Hackathon",
      name: "HealthTrack AI",
      description: "AI-powered health assistant that analyzes symptoms and suggests potential diagnoses.",
      problem: "Make preliminary health assessments accessible to everyone.",
      tech: ["React", "Python", "TensorFlow", "Firebase", "Tailwind"],
      github: "https://github.com/yourusername/healthtrack",
      demo: "https://healthtrack-ai.vercel.app",
      highlights: ["Won 2nd place", "24-hour build", "1000+ users"]
    },
    {
      id: 4,
      category: "Automation",
      name: "Smart Task Scheduler",
      description: "Intelligent task management system that prioritizes work using ML algorithms.",
      problem: "Automate task prioritization based on deadlines, importance, and user behavior.",
      tech: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "Redis"],
      github: "https://github.com/yourusername/task-scheduler",
      demo: null,
      highlights: ["Priority scoring", "Calendar sync", "Slack integration"]
    },
    {
      id: 5,
      category: "Web App",
      name: "DevConnect Platform",
      description: "Developer networking platform with project matching and collaboration tools.",
      problem: "Connect developers with complementary skills for hackathons and side projects.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
      github: "https://github.com/yourusername/devconnect",
      demo: "https://devconnect.vercel.app",
      highlights: ["500+ users", "Real-time chat", "AI matching"]
    },
    {
      id: 6,
      category: "Automation",
      name: "Data Pipeline Automator",
      description: "Automated ETL pipeline for processing and analyzing large datasets.",
      problem: "Streamline data collection, transformation, and analysis workflows.",
      tech: ["Python", "Apache Airflow", "Pandas", "PostgreSQL", "Docker"],
      github: "https://github.com/yourusername/data-pipeline",
      demo: null,
      highlights: ["Processes 1M+ records", "Scheduled workflows", "Error handling"]
    }
  ],

  // Hackathons Section
  hackathons: [
    {
      id: 1,
      name: "MLH Local Hack Day",
      year: 2024,
      role: "Team Lead",
      outcome: "1st Place - Built AI-powered study assistant",
      tech: ["Python", "OpenAI API", "React"]
    },
    {
      id: 2,
      name: "HackMIT",
      year: 2024,
      role: "Full-Stack Developer",
      outcome: "Finalist - Created real-time collaboration tool",
      tech: ["Next.js", "WebRTC", "Firebase"]
    },
    {
      id: 3,
      name: "AI for Good Hackathon",
      year: 2023,
      role: "ML Engineer",
      outcome: "2nd Place - Health diagnosis assistant",
      tech: ["TensorFlow", "Flask", "React"]
    },
    {
      id: 4,
      name: "TreeHacks Stanford",
      year: 2023,
      role: "Backend Developer",
      outcome: "Built prototype for sustainability tracker",
      tech: ["Python", "FastAPI", "PostgreSQL"]
    }
  ],

  // Certifications Section
  certifications: [
    {
      id: 1,
      name: "Machine Learning Specialization",
      issuer: "Stanford Online (Coursera)",
      year: 2024,
      skills: ["ML Algorithms", "Neural Networks", "Python"]
    },
    {
      id: 2,
      name: "Deep Learning Specialization",
      issuer: "deeplearning.ai",
      year: 2024,
      skills: ["CNN", "RNN", "Transformers"]
    },
    {
      id: 3,
      name: "Full-Stack Web Development",
      issuer: "freeCodeCamp",
      year: 2023,
      skills: ["React", "Node.js", "APIs"]
    },
    {
      id: 4,
      name: "Data Structures & Algorithms",
      issuer: "Princeton University",
      year: 2023,
      skills: ["DSA", "Problem Solving", "Optimization"]
    }
  ],

  // Research Interests
  research: {
    title: "Research & Interests",
    description: "Exploring the convergence of AI, quantitative systems, and real-world applications. Passionate about leveraging data-driven approaches to solve complex problems in finance, healthcare, and automation.",
    interests: [
      {
        title: "Quantitative Finance",
        description: "Applying ML to trading strategies, risk management, and market prediction.",
        icon: "trending-up"
      },
      {
        title: "AI Systems",
        description: "Building scalable, efficient ML pipelines and production systems.",
        icon: "cpu"
      },
      {
        title: "Data Science",
        description: "Extracting insights from large datasets using statistical methods and visualization.",
        icon: "bar-chart"
      },
      {
        title: "Automation",
        description: "Creating intelligent automation tools to optimize workflows and decision-making.",
        icon: "zap"
      }
    ]
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com",
    resume: "/resume.pdf"
  }
};
