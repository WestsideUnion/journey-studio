# 05 — Component Inventory

Implement reusable components.

## Global

### `SiteHeader`
Props:
- transparent / solid
- current route

Behavior:
- transparent over hero
- gains dark backdrop after scroll
- mobile full-screen menu

### `SiteFooter`
Includes:
- wordmark
- nav
- social links
- location
- copyright

### `SectionLabel`
Examples:
`01 HERO`
`02 APPROACH`
`03 SERVICES`

### `ArrowLink`
Text + minimal animated arrow.

### `PrimaryCTA`
For `Start a Project`.

### `CinematicImage`
Wrapper around `next/image`.
Supports:
- aspect ratio
- optional blue glow
- optional grain overlay
- reveal animation

---

## Homepage

### `Hero`
Full-bleed cinematic composition.

### `ManifestoSection`
Large typography + short copy + image.

### `ServiceGrid`
Data-driven services.

### `ServiceCard`
Image / index / title / description / arrow.

### `ProjectMosaic`
Mixed aspect-ratio gallery.

### `ProjectCard`
Title / category / year / image / hover state.

### `AudienceStrip`
Brands / founders / creators / communities / culture.

### `ArtFeature`
Editorial two-column image and copy.

### `JournalGrid`
Four post cards.

### `InquiryPreview`
Homepage version of inquiry form.

---

## Work

### `WorkGrid`
### `WorkFilter`
### `CaseStudyHero`
### `ProjectMetadata`
### `MediaGallery`
### `NextProject`

---

## Art

### `ArtworkGrid`
### `ArtworkCard`
### `ExhibitionTimeline`
### `ArtistStatement`
### `PrintInquiryCTA`

---

## Forms

### `TextField`
### `TextArea`
### `RadioGroup`
### `CheckboxGroup`
### `SelectField`
### `FormMessage`
### `SubmitButton`

Avoid building every component as a card.

Let layout, typography, borders, and media create hierarchy.
