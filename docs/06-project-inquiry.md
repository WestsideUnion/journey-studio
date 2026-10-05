# 06 — Project Inquiry

## Purpose

The inquiry flow should qualify serious freelance and brand opportunities without feeling like a corporate procurement form.

Route:
`/inquire`

Also use a shorter version on the homepage if desired.

## Suggested fields

### Contact

1. Email *
2. First name *
3. Brand / company name
4. Role within the brand / organization
   - Founder / Co-Founder
   - Marketing / Brand
   - Creative / Art Director
   - Agency / Producer
   - Artist / Creator
   - Community / Events
   - Other
5. Primary website or social link

### Project

6. What are you looking to create? *
   - Photography
   - Film / Video
   - Social Content / UGC
   - Creative Direction
   - Brand / Campaign Strategy
   - Event / Community
   - Art / Commission
   - Something else

7. Where will the work live?
   - Instagram / Meta
   - TikTok
   - X / Twitter
   - YouTube
   - Website / landing page
   - Paid media
   - Physical / event
   - Multiple
   - Other

8. Tell us about the story you're trying to tell. *
   Long text.

9. What matters most about the project?
   Long text or multi-select:
   - strong visual identity
   - storytelling
   - reach / awareness
   - community
   - launch
   - event capture
   - conversions
   - cultural relevance
   - experimentation

### Logistics

10. Estimated production investment
   - Under CAD $3,000
   - CAD $3,000–$5,000
   - CAD $5,000–$15,000
   - CAD $15,000–$50,000
   - CAD $50,000+
   - Not defined yet

11. Ideal timeline
   - Within 2–4 weeks
   - 1–2 months
   - 3+ months
   - Ongoing
   - Flexible

12. Project location
   - Toronto
   - Greater Toronto Area
   - Canada outside GTA
   - International
   - Remote / digital
   - Other

13. How did you find Journey Studio?
   - Instagram
   - X / Twitter
   - Google / Search
   - Referral
   - Event
   - Previous work
   - Other

14. What attracted you to Journey Studio?
   - Cinematic storytelling style
   - Photography / film
   - Creative direction
   - Toronto perspective
   - Community / cultural work
   - Art practice
   - Recommendation / referral
   - Other

15. Anything else?
   Optional long text.

## Form UX

Use a two-column editorial grid on desktop.

Mobile:
single column.

Each field should carry an index:
`01`, `02`, `03`, etc.

Use blue only for:
- active focus
- selected radio state
- progress
- submit button accent
- success state details

## Submission states

### Idle
`START A PROJECT →`

### Sending
`SENDING...`

### Success

Large:
`THANK YOU.`

Copy:
Your project is in. If it feels like a fit, we'll get back to you with next steps.

CTA:
`Back to Work`

### Error

Copy:
Something went wrong while sending your inquiry. Your answers are still here, so you can try again.

## Validation

Use Zod server-side.

Minimum:
- first name
- email
- service / project type
- project story

Validate URLs only if entered.

## Spam

Implement:
- hidden honeypot
- server-side rate limiting
- optional Turnstile only if spam becomes a real problem

Do not add CAPTCHA by default unless needed.
