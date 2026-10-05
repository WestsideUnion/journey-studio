# 09 — Supabase Optional Backend

Supabase is not required for the first version if the only backend feature is sending inquiry emails.

Use it when Journey Studio wants:

- persistent lead storage
- inquiry history
- lead status
- notes
- art / print inventory
- collector CRM
- project content editing
- private admin tools later

## Inquiry table

Suggested SQL:

```sql
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  first_name text not null,
  email text not null,
  company text,
  role text,
  website_or_social text,

  project_type text not null,
  distribution text[],
  story text not null,
  priorities text[],

  budget text,
  timeline text,
  location text,

  discovery_source text,
  attraction text[],
  additional_notes text,

  status text not null default 'new',
  internal_notes text
);
```

## Security

If inserts go through a server route using the service-role key:

- do not expose service role key to browser
- keep table inaccessible to anonymous reads
- validate every input before insert

If inserting directly from the browser, create a narrow RLS insert policy, but server-side is preferred for this form.

## Future tables

Potential:
- `projects`
- `artworks`
- `prints`
- `journal_posts`
- `collectors`
- `brand_leads`

Do not create them until the product actually needs them.
