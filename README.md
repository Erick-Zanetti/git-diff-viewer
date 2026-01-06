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

### Deploy Automático no Vercel

Para habilitar deploy automático a cada push:

1. **Acesse o Vercel Dashboard:**
   - Vá para [vercel.com](https://vercel.com) e faça login

2. **Importe o Projeto:**
   - Clique em **"Add New..."** → **"Project"**
   - Selecione o repositório `git-diff-viewer` do GitHub
   - Clique em **"Import"**

3. **Configure (automático):**
   - O Vercel detecta Next.js automaticamente
   - Não precisa alterar nada, apenas clique em **"Deploy"**

4. **Pronto!**
   - Após o primeiro deploy, todos os pushes na branch `main` farão deploy automático
   - Você pode ver os deploys em: Vercel Dashboard → Deployments

### Deploy Manual (CLI)

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
