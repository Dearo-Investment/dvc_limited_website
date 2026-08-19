# DVCCL Website

Development Venture Capital Corporation Limited (DVCCL) corporate website —
built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

- `app/` — routes (App Router). Each folder under `app/` is a page:
  `about`, `subsidiaries`, `investor-relations`, `community-environment`,
  `careers`, `contact`, `leadership`, plus the homepage `page.tsx`.
- `components/` — shared UI: `TopBar`, `Navbar`, `Footer`, `Hero`,
  `StatsBar`, `AboutSection`, `Milestones`, `Awards`,
  `SubsidiariesPreview`, `ContactSection`, `AnimatedSection` (scroll-reveal
  wrapper), `PageHero` (interior page banner).
- `lib/data.ts` — all site copy and content in one place. Edit this file to
  update text, stats, subsidiaries, awards, milestones, contact info, etc.
  without touching component code.

## Things to confirm / fill in before launch

- Confirm the real domain for email/website (currently `dvccl.lk` placeholder
  in `lib/data.ts`).
- Add real leadership photos and bios in `lib/data.ts` (`leadership` array)
  and `app/leadership/page.tsx`.
- Wire the contact form in `components/ContactSection.tsx` to a real backend
  or email service (currently a client-side stub).
- Replace the Google Maps embed query in `lib/data.ts` (`mapEmbedSrc`) with
  the exact pinned location if needed.
- Add `/login` and `/register` destinations (currently linked from the top
  utility bar with no pages built).
- Drop award/partner logo images into `public/` and swap the icon-based
  `Awards` grid for real logos if available.
- Add real open-role data/ATS link in `app/careers/page.tsx`.

## Design system

Colors, fonts, and spacing tokens live in `tailwind.config.ts`
(`primary-deep`, `primary-darker`, `accent.gold`, `accent.violet`, etc.) and
reusable utility classes (`.btn-primary`, `.card-surface`, `.eyebrow`, etc.)
live in `app/globals.css`. Fonts are Fraunces (display/serif) + Inter (body)
+ IBM Plex Mono (labels/data), loaded via `next/font/google` in
`app/layout.tsx`.
