# Journey Studio — Workspace Instructions

You are building the production website for Journey Studio.

Read every Markdown file in `/docs` before making major architectural or visual decisions.

## Primary objective

Create a polished portfolio and creative-business website that:

1. communicates Journey Studio's cinematic visual identity
2. showcases Maheen's photography, film, art, creative direction, and community work
3. converts qualified visitors into freelance inquiries and brand-deal conversations
4. supports art / print discovery without making the site feel like an ecommerce template
5. feels custom, editorial, cinematic, and human

## Visual fidelity

Use `assets/references/journey-studio-blue-mockup.png` as the primary visual reference.

Preserve its core language:

- near-black background
- white editorial typography
- electric cinematic blue accents
- thin hairline borders
- strong asymmetric grids
- large type
- generous negative space
- photography-led storytelling
- small metadata labels and index numbers
- cinematic light streaks
- image crops that feel like film stills
- restrained motion

Do not copy the exact reference brand or third-party work. Recreate the design language for Journey Studio.

## Non-negotiable brand behavior

Journey Studio is not positioned as a conventional marketing agency.

Prefer language around:

- stories
- people
- culture
- connection
- visual worlds
- cinematic content
- thoughtful strategy
- communities
- experiences

Avoid overusing:

- scale
- funnels
- growth hacking
- performance marketing
- disruption
- game-changing
- full-service agency
- 360 marketing

## Technical preferences

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- semantic HTML
- accessible forms
- `next/image`
- server actions or route handlers for inquiry submission
- Resend for transactional email
- Supabase only if persistence is enabled

Keep dependencies minimal.

## Performance

Target:

- Lighthouse Performance >= 90 on production mobile where realistic
- Accessibility >= 95
- Best Practices >= 95
- SEO >= 95
- no horizontal overflow
- no layout shift from image sizing
- lazy-load below-the-fold media
- use AVIF/WebP where supported

## Interaction design

Animations must support the cinematic feel without slowing navigation.

Use:

- subtle reveal-on-scroll
- image mask / clip-path reveals
- tiny parallax offsets
- blue glow hover accents
- underlines / arrows that animate
- light grain or texture
- optional cursor-reactive glow on desktop

Avoid:

- constant floating elements
- excessive spring motion
- giant scroll-jacking sequences
- autoplay audio
- cursor effects that impair usability
- loading screens longer than necessary

Respect `prefers-reduced-motion`.

## Conversion

Every major page should provide a natural next step.

Primary CTA:
`Start a Project`

Secondary CTAs:
- `View Work`
- `Explore Art`
- `Work With Me`
- `See Case Study`

Do not make the experience feel sales-heavy.

## Inquiry flow

The inquiry page must feel like part of the design system, not an embedded generic form.

Use the fields described in `docs/06-project-inquiry.md`.

On submit:

1. validate input
2. prevent spam
3. optionally save to Supabase
4. send notification email via Resend
5. send a simple confirmation email to the inquirer
6. return a cinematic success state

Never expose service-role keys or Resend secrets client-side.

## Content editing

Structure project, service, journal, and art content as data whenever practical so Maheen can update content without rewriting layout code.

For the first version, local TypeScript/JSON content is acceptable.

## Do not invent factual credentials

Use only supplied content for exhibitions, clients, awards, metrics, and biography.

If content is missing, use an obvious placeholder token like:

`[ADD VERIFIED CLIENT LOGOS]`

Do not fabricate client names, campaign results, exhibitions, testimonials, or statistics.

## QA before completion

Run through `docs/12-acceptance-checklist.md` before declaring the build complete.
