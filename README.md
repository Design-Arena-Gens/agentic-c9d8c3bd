# Cinematic Prompt Lab

A single-page Next.js experience that delivers a polished camera-direction prompt for a smooth dolly-out reveal of a forklift. The page presents the final wording, contextual framing notes, and quick production guidance so cinematographers or prompt engineers can execute immediately.

## Quick Start

```bash
cd prompt-app
npm install
npm run dev
```

Then visit `http://localhost:3000` to explore the prompt lab.

## Tech Stack

- Next.js 14 (App Router)
- React 18 with client interactions for clipboard copy
- Tailwind CSS for styling and gradient-driven atmosphere

## Project Layout

```
prompt-app/
├── src/app/page.tsx      # Cinematic prompt page
├── src/app/layout.tsx    # Root layout and metadata
├── src/app/globals.css   # Tailwind + base styles
└── public/               # Static assets
```

## Available Scripts

Inside `prompt-app`:

- `npm run dev` – start the local development server
- `npm run build` – create an optimized production build
- `npm run start` – run the production server locally
- `npm run lint` – lint the source

## Deployment

Deploy straight to Vercel:

```bash
cd prompt-app
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-c9d8c3bd
```

After deployment, verify the live site:

```bash
curl https://agentic-c9d8c3bd.vercel.app
```

Repeat the `curl` check up to three times if DNS propagation takes a moment.
