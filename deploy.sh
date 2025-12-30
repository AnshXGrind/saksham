#!/bin/bash

echo "🚀 Building portfolio for deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building Next.js project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build successful! Ready to deploy."
  echo ""
  echo "To deploy:"
  echo "  Vercel: vercel --prod"
  echo "  Netlify: netlify deploy --prod"
else
  echo "❌ Build failed. Please check errors above."
  exit 1
fi
