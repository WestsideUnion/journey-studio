# 15 — Antigravity Master Prompt

Use this prompt after opening the project.

---

Read `AGENTS.md`, every file in `/docs`, and inspect `assets/references/journey-studio-blue-mockup.png`.

Build a production-ready Journey Studio website.

Start with the homepage and use the reference mockup as the primary visual direction.

The site must feel cinematic, editorial, artistic, and custom. Use near-black backgrounds, white typography, electric blue accents, thin grid lines, asymmetric layouts, cinematic imagery, and restrained motion.

Journey Studio is a creative studio spanning photography, film, content, creative direction, social strategy, community/events, and art. It should clearly support freelance inquiries and brand collaborations without feeling like a traditional marketing agency.

Technical stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion only where useful
- GitHub / Vercel deployment
- Resend for inquiry emails
- Supabase optional for inquiry persistence

Build reusable components and typed content structures.

Do not fabricate project metrics, client names, awards, testimonials, exhibitions, or credentials. Use clear placeholders when verified content is missing.

Implement the homepage sections in `docs/03-homepage.md`.

Implement `/inquire` based on `docs/06-project-inquiry.md`.

Use real image assets when supplied. Until then, preserve intentional image placeholders with correct aspect ratios rather than inserting random stock photography.

Ensure responsive behavior from 390px through large desktop.

Respect accessibility and reduced-motion preferences.

Before finishing, evaluate against `docs/12-acceptance-checklist.md`.
