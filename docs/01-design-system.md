# 01 — Design System

## Visual concept

**Midnight cinema + electric blue + editorial gallery.**

The blue should feel like light coming through darkness, not like a corporate brand fill.

## Color tokens

Recommended starting palette:

```css
--bg: #050708;
--bg-soft: #090D10;
--panel: #0C1115;
--text: #F4F7F8;
--text-muted: #A7B2BA;
--line: rgba(255,255,255,.14);
--line-strong: rgba(255,255,255,.24);
--blue: #19BDF2;
--blue-bright: #41D7FF;
--blue-deep: #086EAD;
--blue-night: #061E33;
--error: #FF6B6B;
--success: #56E3A1;
```

Optional lighting gradient:

```css
background:
  radial-gradient(circle at 70% 40%, rgba(25,189,242,.18), transparent 35%),
  #050708;
```

Do not use blue for long text.

## Typography

Preferred:

### Display
`Inter Tight`, `Arial Narrow`, or a comparable grotesk.

Characteristics:
- bold
- compact
- modern
- editorial
- strong at very large sizes

### Body
`Inter` or `Geist Sans`.

### Utility / metadata
Same body family, uppercase, wide tracking.

Suggested scale:

```txt
hero: clamp(4.5rem, 11vw, 11rem)
display-xl: clamp(3.5rem, 8vw, 8rem)
display-lg: clamp(2.8rem, 6vw, 6rem)
h2: clamp(2.2rem, 4vw, 4.5rem)
h3: clamp(1.35rem, 2vw, 2rem)
body-lg: 1.125rem
body: 1rem
small: .8125rem
micro: .6875rem
```

Display headings may use `line-height: .82–.95`.

Use uppercase intentionally, not universally.

## Grid

Desktop:
- 12-column grid
- max content width around 1600px
- 24 to 40px gutters
- visible 1px separators where useful

Mobile:
- 4-column conceptual grid
- 18 to 22px side padding

## Borders

Use thin, subtle borders:

`1px solid rgba(255,255,255,.12)`

Avoid heavy card borders.

## Radius

Most UI:
- 0 to 4px

Buttons:
- either squared editorial
- or restrained pill for primary CTA only

Do not make every element rounded.

## Buttons

### Primary

Dark or blue fill depending on context.
High contrast.
Arrow on right.
Hover introduces blue glow / sweep.

### Secondary

Transparent.
1px border.
White text.
Blue hover accent.

## Images

Image treatment should prioritize:

- deep blacks
- cool highlights
- blue / cyan practical light
- restrained warmth where it adds human contrast
- grain
- cinematic crops
- shadow detail

Use real Journey Studio imagery whenever available.

## Texture

Optional subtle noise overlay:
- opacity 2–5%
- pointer-events none
- no obvious repeating pattern

## Icons

Prefer:
- arrows
- plus signs
- simple line icons
- custom SVG

Avoid decorative icon sets unless necessary.

## Logo treatment

Wordmark:
`JOURNEY STUDIO`

Use strong stacked lockup in hero/footer.
Use compact horizontal or stacked version in navigation.

## Accessibility

Maintain WCAG AA contrast for text.
Blue-on-black can be used for decorative accents, but key text should remain highly legible.
