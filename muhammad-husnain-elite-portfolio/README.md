# Muhammad Husnain — Elite Content-Driven Portfolio

A premium personal portfolio built with React, Vite, React Router, Framer Motion, and editable JSON content.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Keep the detected Vite settings.
4. Deploy.

The included `vercel.json` supports direct access to dynamic routes such as `/projects/project-slug`.

## Edit personal information

Open:

`src/content/site.json`

This contains the name, role, education, hero text, WhatsApp number, GitHub, LinkedIn, Fiverr, CTA labels, capability list, and About content.

## Add a new service

1. Copy any JSON file in `src/content/services/`.
2. Rename it using a unique slug, for example `ui-ux-design.json`.
3. Update the `slug`, title, descriptions, capabilities, tools, outcomes, and CTA.
4. Save and redeploy.

The Services page and dynamic service route are generated automatically.

## Add a new project

1. Open `/content-studio` in the running website and download the project template, or copy an existing file in `src/content/projects/`.
2. Rename the file to match the unique `slug`.
3. Set `service` to an existing service slug. Add optional slugs in `secondaryServices`.
4. Add the images to `public/projects/` and update `image` and `gallery` paths.
5. Add real live, demo, and GitHub links.
6. Save and redeploy.

The project appears automatically on the Projects page, its related Service page, and its own dynamic case-study URL.

## Replace image placeholders

All current placeholders are inside:

`public/placeholders/`

Recommended ratios:

- Featured project image: 1600 × 1000 or 16:10
- Project gallery wide: 1600 × 900
- Standard gallery image: 1200 × 900
- Profile image: square, at least 1200 × 1200
- Blog cover: 1600 × 900

## Testimonials and achievements

The files are intentionally empty to avoid fake claims:

- `src/content/testimonials.json`
- `src/content/achievements.json`

They can be connected to components after real content is available.

## Content management note

This is a source-driven content system, similar to managing structured theme files. It is not a hosted authenticated CMS. For browser-based global editing, connect Sanity, Contentful, Strapi, or another CMS later. The frontend architecture can remain the same.

## Premium motion system (v3)

This version adds:

- Apple/Linear/Framer-inspired word-reveal hero animation
- Pointer-responsive 3D capability ecosystem
- Animated scroll progress and smoother route transitions
- Continuous tilted technology marquee
- 3D service-card tilt, glass reflection, and logo motion
- Project image parallax and depth effects
- Auto-progressing interactive work-process cards
- Responsive portrait component with optimized cropping and fallback
- Reduced-motion accessibility support

## Add your real profile image

1. Export your portrait as WebP (recommended size: 1400 × 1800 px).
2. Put it in `public/profile/muhammad-husnain-profile.webp`.
3. Change `profileImage` in `src/content/site.json` to:

```json
"profileImage": "/profile/muhammad-husnain-profile.webp"
```

The portrait automatically uses responsive cropping, glass framing, reflection, and a safe fallback.
