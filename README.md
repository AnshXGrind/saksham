# AI/ML Engineer Portfolio

A modern, premium, tech-focused portfolio website for an ambitious AI/ML engineer and builder.

## Features

- **Dark Theme** with neon blue, purple, and green accents
- **Lightning Fast** - Built with Next.js 14 & TypeScript
- **Smooth Animations** - Powered by Framer Motion
- **Fully Responsive** - Desktop-first, mobile-friendly design
- **SEO Optimized** - Meta tags, semantic HTML
- **Easy to Customize** - Single data file configuration
- **Production Ready** - Deploy to Vercel in minutes

## What is Included

**8 Complete Sections:**

1. **Hero** - Bold headline with 3 CTA buttons
2. **About** - Professional bio
3. **Skills** - Tech stack grid with 5 categories
4. **Projects** - Filterable project showcase (6 samples)
5. **Hackathons** - Achievement timeline (4 samples)
6. **Certifications** - Course grid (4 samples)
7. **Research** - Interest areas (4 focus areas)
8. **Contact** - Social links + resume download

## Quick Start

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Customize Your Data

Edit `src/data/portfolio.ts` with your information:

- Lines 3-12: Hero section (name, title, description)
- Lines 14-17: About section
- Lines 20-70: Skills (5 categories)
- Lines 72-130: Projects (4 real projects + 2 optional)
- Lines 132-165: Hackathons (3 entries)
- Lines 167-230: Agency business services
- Lines 232-245: Social links (IMPORTANT!)

### Step 3: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 to view your portfolio!

### Step 4: Deploy (Optional)

**Easiest: Deploy to Vercel in 2 minutes**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

**Or use the deployment scripts:**
- Windows: Double-click `deploy.bat`
- Mac/Linux: Run `./deploy.sh`

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

## Design Features

- **Dark Background:** #0a0a0a
- **Neon Blue:** #00d4ff (primary)
- **Purple:** #7c3aed (secondary)
- **Green:** #10b981 (accent)
- **Fonts:** Inter (headings) + JetBrains Mono (code)

## Key Files

```plaintext
saksham/
 src/data/portfolio.ts      YOUR CONTENT HERE
 tailwind.config.ts         THEME COLORS
 public/resume.pdf          YOUR RESUME
 src/components/           All 8 sections
```

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (port 3000)
npm run build  # Build for production
npm run start  # Start production server
```

## Documentation

- **START-HERE.txt** - Complete overview
- **SETUP.md** - Detailed setup instructions
- **CUSTOMIZATION.md** - How to customize
- **DEPLOYMENT.md** - Deploy to production

## Pro Tips

1. Update `src/data/portfolio.ts` with YOUR info first
2. Add your `resume.pdf` to `public/` folder
3. Deploy to Vercel for free hosting

## Tech Stack

- Next.js 14 | TypeScript 5.4 | Tailwind CSS 3.4
- Framer Motion 11 | Lucide React

---

**Ready to launch?**

```bash
npm install && npm run dev
```

Good luck! 
