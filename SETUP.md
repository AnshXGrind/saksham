# 🚀 AI/ML Engineer Portfolio - Setup Guide

## ✨ Features

- 🎨 **Dark Theme** with neon blue, purple, and green accents
- ⚡ **Lightning Fast** - Built with Next.js 14 & TypeScript
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Desktop-first, mobile-friendly
- 🎯 **SEO Optimized** - Meta tags, semantic HTML
- 🔧 **Easy to Customize** - Single data file configuration
- 🚀 **Production Ready** - Deploy to Vercel in minutes

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (for deployment)

### Step 1: Install Dependencies

```bash
cd ai-portfolio
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

### Step 2: Customize Your Data

Edit **`src/data/portfolio.ts`** with your information:

```typescript
// Update these sections:
- hero: Your headline and description
- about: Your bio
- skills: Your technical skills
- projects: Your portfolio projects
- hackathons: Your hackathon achievements
- certifications: Your courses and certs
- research: Your interests
- social: Your links (GitHub, LinkedIn, email)
```

### Step 3: Add Your Resume

Place your `resume.pdf` file in the `public/` directory.

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio!

### Step 5: Customize Theme (Optional)

Edit **`tailwind.config.ts`** to change colors:

```typescript
colors: {
  primary: "#00d4ff",    // Your main color
  secondary: "#7c3aed",  // Secondary accent
  accent: "#10b981",     // Highlight color
}
```

### Step 6: Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next/`

### Step 7: Deploy

See **DEPLOYMENT.md** for detailed deployment instructions to:
- Vercel (recommended)
- Netlify
- GitHub Pages

## 📂 Project Structure

```
ai-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills grid
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Hackathons.tsx     # Hackathons timeline
│   │   ├── Certifications.tsx # Certifications
│   │   ├── Research.tsx       # Research interests
│   │   └── Contact.tsx        # Contact/Social links
│   └── data/
│       └── portfolio.ts       # ⭐ YOUR DATA HERE
├── public/
│   └── resume.pdf            # Your resume
├── tailwind.config.ts        # Theme configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Customization Guide

### Quick Customizations

1. **Change Colors:**
   - Edit `tailwind.config.ts`

2. **Change Fonts:**
   - Edit `src/app/globals.css` (Google Fonts import)
   - Update `tailwind.config.ts` (fontFamily)

3. **Add/Remove Sections:**
   - Create new component in `src/components/`
   - Import in `src/app/page.tsx`

4. **Modify Animations:**
   - Edit Framer Motion props in each component
   - Change `initial`, `animate`, `transition` values

### Advanced Customizations

See **CUSTOMIZATION.md** for detailed guides on:
- Adding new sections
- Modifying layouts
- Customizing animations
- Adding integrations
- SEO optimization

## 🎯 Sections Overview

### 1. Hero Section
- Bold headline with gradient text
- Action buttons (Projects, Resume, LinkedIn)
- Animated background with gradient orbs
- Scroll indicator

### 2. About Me
- Professional bio
- Glassmorphism card design
- Fade-in animation

### 3. Skills & Tech Stack
- Grid layout with categories
- Skill cards with icons
- Proficiency levels
- Hover effects

### 4. Projects Section
- Filterable by category
- Project cards with:
  - Tech stack tags
  - Problem statement
  - GitHub + Demo links
  - Key highlights
- Hover animations

### 5. Hackathons & Achievements
- Timeline layout
- Year badges
- Role and outcome
- Tech stack tags

### 6. Certifications
- Grid of certification cards
- Issuer and year
- Skills learned
- Icon indicators

### 7. Research & Interests
- Interest cards
- Icons and descriptions
- 4-column grid

### 8. Contact & Social
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Resume download button
- Footer with credits

## 🚀 Performance Features

- ✅ Code splitting by route
- ✅ Image optimization (Next.js Image)
- ✅ Font optimization (Google Fonts)
- ✅ CSS purging (Tailwind)
- ✅ Lazy loading components
- ✅ SEO meta tags
- ✅ Responsive images
- ✅ Smooth scroll behavior

## 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are tested on:
- iPhone (375px)
- iPad (768px)
- Desktop (1440px+)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Types errors
```bash
npm install --save-dev @types/node @types/react
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Support

For issues or questions:
1. Check CUSTOMIZATION.md
2. Check DEPLOYMENT.md
3. Review Next.js docs
4. Open an issue on GitHub

## 📄 License

MIT License - Free to use for personal portfolios!

---

## 🎯 Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Update `src/data/portfolio.ts` with your info
3. ✅ Add your `resume.pdf` to `public/`
4. ✅ Run `npm run dev` to preview
5. ✅ Customize colors and fonts (optional)
6. ✅ Build and deploy to Vercel

**Ready to launch your portfolio? Let's go! 🚀**
