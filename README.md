# Mazi Kelvin — Portfolio

A responsive portfolio built with Next.js, TypeScript and Tailwind CSS.

## Run locally

Install a recent Node.js LTS release, open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. To create a production static export, run `npm run build`. The export will be created in `out/`.

## Personalize

Edit `app/page.tsx` to update the introduction, project details, project URLs, technologies and GitHub link. Edit `app/globals.css` for colors and layout. The project artwork is decorative and does not depict actual product screenshots. Add verified screenshots and an email or other contact links when available.

## Where to find things

- `app/page.tsx` — puts the page sections together and manages shared interactions.
- `app/globals.css` — the site's styles and animations.
- `components/Header.tsx`, `Hero.tsx`, `Projects.tsx`, `About.tsx`, `Toolkit.tsx`, `Contact.tsx` — individual sections.
- `components/InterfaceCarousel.tsx` — the interactive interface carousel.
- `components/Marquee.tsx` and `ToolSymbol.tsx` — the scrolling strip and toolkit icons.
- `data/portfolio.ts` — project descriptions, links, technologies and toolkit details.
- `public/` — the logo and project screenshots.
