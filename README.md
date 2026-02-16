# Neon Dashboard - Premium Auth & Admin System

A high-end React dashboard built with Next.js, NextAuth, and Neon DB.

## ✨ Features
- **Premium Design**: Glassmorphism, animated backgrounds, and "Outfit" typography.
- **Role-based Access**: Admin and User roles.
- **AI Study Assistant**: Automatically generate structured study notes and summaries from YouTube transcripts using Gemini 1.5 Flash.
- **Manual Transcript Support**: Fallback to manual copy-paste when YouTube blocks automated scraping.

## 🚀 Setup

### 1. Database Configuration
1. Create a project at [Neon.tech](https://neon.tech).
2. Get your `DATABASE_URL` (Connection String).
3. Run the setup script to create the tables:
   ```bash
   node scripts/simple-setup.js
   ```

### 2. Environment Variables
Create a `.env.local` file with the following:
```env
# Neon Database
DATABASE_URL=your_neon_connection_string

# NextAuth
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Run Locally
```bash
npm install
npm run dev
```

## 🌍 Deployment to Vercel

1. **Push to GitHub**: Upload your project to a GitHub repository.
2. **Import to Vercel**: 
   - Go to [vercel.com](https://vercel.com) and click **"Add New" -> "Project"**.
   - Select your GitHub repository.
3. **Configure Environment Variables**:
   In the Vercel dashboard, add the following variables:
   - `DATABASE_URL`: Your Neon connection string.
   - `NEXTAUTH_SECRET`: Generate one using `openssl rand -base64 32`.
   - `NEXTAUTH_URL`: Your Vercel deployment URL (e.g., `https://your-app.vercel.app`).
4. **Deploy**: Click **"Deploy"**. Vercel will automatically build and host your application.

## 🛠 Tech Stack
- **Framework**: Next.js 15+
- **Auth**: NextAuth.js
- **Database**: Neon DB (PostgreSQL)
- **Styling**: Vanilla CSS (Premium Design System)
- **Icons**: Lucide React
