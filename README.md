# Pushkraj Kohok Portfolio

AI/ML and Full-Stack AI Engineer portfolio for Pushkraj Kohok. The site presents recruiter-friendly project case studies, measurable impact metrics, contact actions, and an AI portfolio agent that can answer questions from local portfolio context.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Vercel AI SDK
- shadcn/ui-ready component conventions

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is busy, run:

```bash
npm run dev -- -p 3002
```

## AI Agent

The portfolio agent works without an API key by using local fallback responses built from `data/portfolio.ts` and `lib/portfolio-context.ts`.

For live OpenAI-backed responses, add:

```bash
OPENAI_API_KEY=your_api_key_here
```

The app remains usable when the key is missing.

## Public Assets

The recruiter-facing assets live in `public/` so they are available from stable site URLs:

- `public/Pushkraj_Kohok_Resume.pdf`
- `public/Pushkraj_Kohok_Picture.jpeg`
- `public/og-image.png` sized around `1200x630`

The profile picture is displayed in the hero section through `/Pushkraj_Kohok_Picture.jpeg`.
The resume can be opened in a new tab with the View Resume button through `/Pushkraj_Kohok_Resume.pdf` and downloaded with the Download Resume button through `/resume/download`.
The social preview image uses `/og-image.png`.

## SEO Routes

- `/sitemap.xml` is generated from the homepage, project index, and project case-study slugs.
- `/robots.txt` allows indexing and points crawlers to the sitemap.
- Page metadata includes Open Graph and Twitter preview fields.

## Quality Checks

```bash
npm run lint
npm run build
```

## Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Set `OPENAI_API_KEY` only if live model responses are desired.
3. Confirm the resume PDF, profile picture, and OG image are present under `public/`.
4. Keep the production URL aligned with `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
5. Deploy with the default Next.js settings.
