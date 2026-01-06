# Git Diff Viewer

A frontend-only web application that renders GitHub-like Pull Request diff UI from raw git diff text.

## Features

- Parse unified git diff format
- GitHub-like diff visualization
- Dark/light theme support (system preference)
- Collapsible file sections
- Line-by-line diff with color coding
- Responsive design
- Client-side only (no backend required)

## Tech Stack

- Next.js 16+ (App Router)
- TypeScript
- Tailwind CSS
- parse-diff
- Shiki (for syntax highlighting)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

### Automatic Deployment on Vercel

To enable automatic deployment on every push:

1. **Access Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com) and log in

2. **Import Project:**
   - Click **"Add New..."** → **"Project"**
   - Select the `git-diff-viewer` repository from GitHub
   - Click **"Import"**

3. **Configure (automatic):**
   - Vercel automatically detects Next.js
   - No need to change anything, just click **"Deploy"**

4. **Done!**
   - After the first deploy, all pushes to the `main` branch will trigger automatic deployments
   - You can view deployments at: Vercel Dashboard → Deployments

### Manual Deployment (CLI)

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Usage

1. Paste a git diff in the textarea
2. The diff will be automatically parsed and displayed in a GitHub-like interface
3. Click on file headers to expand/collapse files
4. View line-by-line changes with color coding:
   - Green: additions
   - Red: deletions
   - Neutral: context lines
