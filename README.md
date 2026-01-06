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

This project is ready to deploy on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Usage

1. Paste a git diff in the textarea
2. The diff will be automatically parsed and displayed in a GitHub-like interface
3. Click on file headers to expand/collapse files
4. View line-by-line changes with color coding:
   - Green: additions
   - Red: deletions
   - Neutral: context lines
