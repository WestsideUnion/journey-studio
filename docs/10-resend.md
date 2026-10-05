# 10 — Resend Email Flow

## Purpose

Every valid project inquiry should generate:

1. an internal notification
2. a confirmation to the person who submitted

## Internal email

Subject example:

`New Journey Studio inquiry — {projectType} — {company or firstName}`

Body should show:

- name
- email
- company
- role
- website/social
- project type
- platforms / distribution
- story
- priorities
- budget
- timeline
- location
- discovery source
- what attracted them
- notes
- submission time

Add a `Reply` link / mailto to the sender.

## Confirmation email

Subject:

`Your Journey Studio inquiry is in`

Suggested copy:

Hi {firstName},

Thanks for reaching out to Journey Studio.

I’ve received your project details and will take a look at the idea, scope and timing. If it feels like a fit, I’ll follow up with next steps.

Maheen  
Journey Studio

Keep the confirmation understated.

## Domain

For production, verify the sending domain in Resend.

Use a branded sender such as:

`Journey Studio <hello@yourdomain.com>`

Do not send production mail from an unverified personal address.

## Failure behavior

If Supabase insert succeeds but email fails:
- keep the lead saved
- log the email error server-side
- return a cautious response based on desired UX

If no persistence is used and email fails:
- show error
- preserve form data
