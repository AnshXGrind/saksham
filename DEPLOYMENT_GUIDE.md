# 🚀 Easy Deployment Guide

## Deploy to Vercel (Recommended - 2 minutes)

### Method 1: GitHub + Vercel (Automatic)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)
6. Done! Your site is live 🎉

### Method 2: Vercel CLI (Fast)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from project root)
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### Method 3: Direct Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_URL)

---

## Deploy to Netlify (Alternative)

### Method 1: Netlify Web UI
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Method 2: Netlify CLI
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## Before Deploying - Checklist ✅

1. **Update Portfolio Data**
   - Edit `src/data/portfolio.ts` with your information
   - Add your real email, GitHub, LinkedIn links

2. **Add Resume (Optional)**
   - Place `resume.pdf` in `public/` folder
   - Or remove resume download button

3. **Test Locally**
   ```bash
   npm install
   npm run build
   npm start
   ```
   Visit http://localhost:3000 to verify

4. **Environment Variables (if needed)**
   - Create `.env.local` for secrets
   - Add to Vercel/Netlify dashboard under "Environment Variables"

---

## Custom Domain (Optional)

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS configuration

---

## Troubleshooting

### Build fails?
- Run `npm run build` locally first
- Check console for errors
- Ensure all dependencies in package.json

### Site loads but broken?
- Check browser console for errors
- Verify all file paths are correct
- Ensure images exist in `public/` folder

### Need help?
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

---

## Quick Commands

```bash
# Local Development
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm start           # Start production server

# Deployment
vercel              # Deploy to Vercel
netlify deploy      # Deploy to Netlify
```

**Your portfolio will be live in under 5 minutes! 🚀**
