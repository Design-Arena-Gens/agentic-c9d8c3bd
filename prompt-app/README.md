## Cinematic Prompt Lab

A focused Next.js experience that outputs a polished dolly-out camera prompt for showcasing a forklift. The interface delivers a copy-ready directive plus supporting notes that describe motion, framing, and atmosphere.

## Running Locally

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the lab.

## Key Files

- `src/app/page.tsx` – UI and prompt logic (clipboard copy, content layout).
- `src/app/layout.tsx` – App metadata and font wiring.
- `src/app/globals.css` – Tailwind layers and base styling.

## Deploy

Deploy with Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-c9d8c3bd
```

Once live, confirm the production domain:

```bash
curl https://agentic-c9d8c3bd.vercel.app
```
