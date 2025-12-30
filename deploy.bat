@echo off
echo 🚀 Building portfolio for deployment...
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Installation failed
    exit /b %errorlevel%
)

REM Build the project
echo 🔨 Building Next.js project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed. Please check errors above.
    exit /b %errorlevel%
)

echo.
echo ✅ Build successful! Ready to deploy.
echo.
echo To deploy:
echo   Vercel: vercel --prod
echo   Netlify: netlify deploy --prod
echo.
pause
