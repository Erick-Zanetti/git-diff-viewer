# Configure Automatic Deployment on Vercel

Your repository is on GitHub: `https://github.com/Erick-Zanetti/git-diff-viewer.git`

To enable automatic deployment, follow these steps:

## Step 1: Access Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Log in with your account (use GitHub if possible for easier setup)

## Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Look for **"git-diff-viewer"** or **"Erick-Zanetti/git-diff-viewer"**
4. Click **"Import"**

## Step 3: Configure Project

Vercel will automatically detect it's a Next.js project. Verify:

- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

**Important**: No need to change anything, just confirm.

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (1-2 minutes)
3. Your app will be available at a URL like: `https://git-diff-viewer.vercel.app`

## Step 5: Verify Automatic Deployment

After the first deploy, Vercel automatically:

✅ Connects to your GitHub repository
✅ Configures webhooks for automatic deployment
✅ Deploys on every push to the `main` branch

**Test**: Make a new commit and push:
```bash
git add .
git commit -m "Test automatic deployment"
git push origin main
```

Vercel should start a new deployment automatically within seconds!

## Check Deployment Status

1. In Vercel Dashboard → Your Project → **"Deployments"**
2. You'll see all deployments, including automatic ones

## Troubleshooting

### If automatic deployment doesn't work:

1. **Check GitHub permissions:**
   - Vercel Dashboard → Settings → Git
   - Make sure the repository is connected

2. **Check webhooks:**
   - GitHub → Your Repository → Settings → Webhooks
   - There should be a Vercel webhook configured

3. **Check the branch:**
   - Vercel Dashboard → Settings → Git
   - Make sure it's configured for the `main` branch

### If you need to reconfigure:

1. Vercel Dashboard → Your Project → Settings → Git
2. Click **"Disconnect"** and then **"Connect Git Repository"** again

## Alternative: Use Vercel CLI

If you prefer using the CLI (requires login):

```bash
# 1. Log in
vercel login

# 2. Link to project (creates or connects)
vercel link

# 3. Deploy initially
vercel --prod
```

After that, future pushes to GitHub will also trigger automatic deployments.
