# 07 — Technical Architecture

## Recommended baseline

### Framework
Next.js App Router.

### Language
TypeScript.

### Styling
Tailwind CSS with CSS variables for theme tokens.

### Motion
Framer Motion only where CSS transitions are insufficient.

### Hosting
Vercel.

### Repository
GitHub.

## Suggested directory structure

```txt
app/
  layout.tsx
  page.tsx
  work/
    page.tsx
    [slug]/
      page.tsx
  services/
    page.tsx
  art/
    page.tsx
    [slug]/
      page.tsx
  about/
    page.tsx
  journal/
    page.tsx
    [slug]/
      page.tsx
  inquire/
    page.tsx
  api/
    inquiry/
      route.ts

components/
  layout/
  ui/
  home/
  work/
  art/
  inquiry/

content/
  projects.ts
  services.ts
  artworks.ts
  journal.ts

lib/
  email/
  supabase/
  validation/
  seo/

public/
  images/
  video/
  textures/
```

## Content strategy

V1:
Use typed local content.

Later:
Move structured content to Supabase or a CMS only if editing frequency justifies it.

Do not build a CMS before it is needed.

## Inquiry pipeline

Recommended flow:

```txt
Browser
  ↓
Next.js form
  ↓
Server route/action
  ↓
Zod validation
  ↓
Anti-spam
  ↓
Optional Supabase insert
  ↓
Resend notification
  ↓
Resend confirmation
  ↓
Success response
```

## Environment variables

```env
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
INQUIRY_TO_EMAIL=
INQUIRY_FROM_EMAIL=

# Optional Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Never expose:
- `RESEND_API_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Deployment

Vercel should build from the GitHub main branch.

Use preview deployments for pull requests.

## Analytics

Optional:
- Vercel Web Analytics
- Vercel Speed Insights

Do not add invasive trackers by default.

## Image handling

Use `next/image`.

Prefer:
- AVIF
- WebP
- explicit width / height
- quality tuned per image
- priority only for hero assets

## Video

If using hero video:
- muted
- looped
- playsinline
- poster image
- low-size web-optimized version
- disable or replace on reduced-data contexts where possible
