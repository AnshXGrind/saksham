# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI/ML Engineer Portfolio"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

Your site will be live in ~2 minutes! 🎉

## Alternative: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Alternative: Deploy to Netlify

1. **Push to GitHub (same as above)**

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site"
   - Import from Git
   - Build command: `npm run build`
   - Publish directory: `.next`

## Environment Variables

If you add any APIs or services later, create a `.env.local` file:

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
```

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### On Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## Performance Tips

- ✅ All images should be in WebP format
- ✅ Use Next.js Image component for optimization
- ✅ Lazy load components below the fold
- ✅ Minimize bundle size

## SEO Checklist

- ✅ Update metadata in `src/app/layout.tsx`
- ✅ Add meta description
- ✅ Create sitemap.xml
- ✅ Add robots.txt
- ✅ Submit to Google Search Console

## Analytics Setup (Optional)

Add Google Analytics to `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

// In the <body> tag:
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

## Monitoring

- Use Vercel Analytics (built-in)
- Add error tracking: Sentry
- Monitor performance: Lighthouse CI

---

**Need help?** Check the [Next.js Deployment docs](https://nextjs.org/docs/deployment)
