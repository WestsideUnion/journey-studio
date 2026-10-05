# 08 — Motion and Interaction

## Principle

Motion should feel like camera movement, light movement, or editorial reveal.

Never make the site feel like a motion-demo portfolio.

## Page load

Hero:
- wordmark rises 16–24px and fades in
- background image scale settles from ~1.03 to 1.00
- blue highlight may bloom subtly
- stagger supporting text by 60–100ms

Total impression should remain fast.

## Scroll

Use:
- opacity + translate reveal
- clip-path image reveal
- subtle image parallax, max 3–5%
- horizontal line expansion
- number labels fading slightly before content

## Hover

Project cards:
- image scale 1.00 → 1.025
- title underline or arrow movement
- blue accent appears subtly

Buttons:
- arrow translates 3–5px
- blue edge / glow appears

Navigation:
- underline or blue dot

## Optional desktop detail

A very soft pointer-following blue glow can appear behind hero imagery.

Rules:
- low opacity
- never over text
- disabled on touch devices
- disabled for reduced motion

## Reduced motion

When `prefers-reduced-motion: reduce`:
- disable parallax
- disable scale reveals
- keep simple opacity transitions
- no animated grain
