# 🎨 Customization Guide

## Quick Start Customization

### 1. Update Your Personal Information

Edit **`src/data/portfolio.ts`** - This is your single source of truth!

```typescript
// Change your name, headline, description
hero: {
  headline: "Your Custom Headline",
  subheadline: "Your tagline",
  // ...
}

// Update social links
social: {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email: "your.email@example.com",
  // ...
}
```

### 2. Change Colors & Theme

Edit **`tailwind.config.ts`**:

```typescript
colors: {
  primary: "#00d4ff",     // Change to your brand color
  secondary: "#7c3aed",   // Secondary accent
  accent: "#10b981",      // Highlight color
}
```

Popular color schemes:
- **Cyber Blue:** `#00d4ff, #0066ff, #00ffcc`
- **Purple Dream:** `#7c3aed, #a78bfa, #c084fc`
- **Neon Green:** `#10b981, #34d399, #6ee7b7`
- **Orange Fire:** `#f59e0b, #fb923c, #fbbf24`

### 3. Change Fonts

Edit **`src/app/globals.css`**:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

Then update **`tailwind.config.ts`**:

```typescript
fontFamily: {
  sans: ["Your Font", "sans-serif"],
  mono: ["Your Mono Font", "monospace"],
}
```

Recommended fonts:
- **Modern:** Inter, Outfit, Plus Jakarta Sans
- **Tech:** Space Grotesk, IBM Plex Sans, Archivo
- **Mono:** JetBrains Mono, Fira Code, Source Code Pro

### 4. Add Your Projects

In **`src/data/portfolio.ts`**, update the projects array:

```typescript
projects: [
  {
    id: 1,
    category: "AI/ML",
    name: "Your Project Name",
    description: "Short description",
    problem: "What problem does it solve?",
    tech: ["Python", "React", "..."],
    github: "https://github.com/...",
    demo: "https://...",
    highlights: ["Key feature 1", "Key feature 2"]
  },
  // Add more projects...
]
```

### 5. Update Skills

Modify the skills array in **`src/data/portfolio.ts`**:

```typescript
skills: [
  {
    category: "Your Category",
    items: [
      { name: "Skill Name", level: "Advanced", icon: "code-2" }
    ]
  }
]
```

Available icons: Check [Lucide Icons](https://lucide.dev/)

### 6. Add Resume PDF

1. Place your resume in **`public/resume.pdf`**
2. Update the path in **`src/data/portfolio.ts`**:

```typescript
social: {
  resume: "/resume.pdf"
}
```

### 7. Modify Animations

Edit individual components to change animations:

```typescript
// Slower animation
transition={{ duration: 1.0 }}

// Different entrance effect
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}

// Custom hover effect
whileHover={{ scale: 1.1, rotate: 5 }}
```

### 8. Add New Sections

Create a new component in **`src/components/YourSection.tsx`**:

```typescript
"use client";
import { motion } from "framer-motion";

export default function YourSection() {
  return (
    <section id="your-section" className="relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Your Section Title
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

Then add it to **`src/app/page.tsx`**:

```typescript
import YourSection from "@/components/YourSection";

// In the Home component:
<YourSection />
```

### 9. Modify Background Effects

In **`src/components/Hero.tsx`**, customize the gradient orbs:

```typescript
// Change size
w-96 h-96  →  w-64 h-64

// Change color
bg-primary/20  →  bg-secondary/30

// Add more orbs
<div className="absolute ... bg-accent/20 ..."></div>
```

### 10. Update Metadata for SEO

Edit **`src/app/layout.tsx`**:

```typescript
export const metadata: Metadata = {
  title: "Your Name - AI/ML Engineer",
  description: "Your custom description",
  keywords: ["Your", "Custom", "Keywords"],
  // ...
};
```

## Advanced Customization

### Add Dark/Light Mode Toggle

1. Install next-themes:
```bash
npm install next-themes
```

2. Wrap your app with ThemeProvider
3. Add a toggle button component

### Add Blog Section

1. Create **`src/app/blog/page.tsx`**
2. Use MDX for blog posts
3. Add navigation to blog

### Add Contact Form

1. Use Formspree or EmailJS
2. Create form component
3. Add to Contact section

### Integrate Analytics

See **DEPLOYMENT.md** for Google Analytics setup.

---

**Pro Tip:** Test responsiveness with:
```bash
npm run dev
```
Then open DevTools (F12) and toggle device toolbar (Ctrl+Shift+M)
