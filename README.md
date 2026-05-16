# Sahar Dolatyari — Artist Portfolio

The personal portfolio website of [Sahar Dolatyari](https://sahardolatyari.com), painter and visual artist. The site presents her gallery of work, a short biography, and a way to get in touch.

## Stack

- **[Next.js 16](https://nextjs.org/)** with the App Router
- **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (CSS-based config via `@theme`)
- **[next/image](https://nextjs.org/docs/app/api-reference/components/image)** for image optimization
- **[next/font](https://nextjs.org/docs/app/api-reference/components/font)** with Inter (sans) + Cormorant Garamond (serif)
- **ESLint 9** (flat config) via `eslint-config-next`
- Deployed on **[Vercel](https://vercel.com/)** with DNS managed through **Cloudflare**

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) **18.18 or newer** (Node 20+ recommended)
- npm (bundled with Node)

### Install and run

```bash
git clone https://github.com/Mbn27/sahardolatyari.git
cd sahardolatyari
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>. Edits to files under `src/` hot-reload automatically.

### Available scripts

| Command         | What it does                    |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the local dev server      |
| `npm run build` | Build the production bundle     |
| `npm start`     | Run the built production bundle |
| `npm run lint`  | Run ESLint                      |

## Project structure

```
sahardolatyari/
├── public/
│   └── images/
│       ├── gallery/    # artwork images — drop new pieces here
│       ├── about/      # portrait / studio photos
│       └── hero/       # homepage hero imagery
├── src/
│   ├── app/            # App Router routes
│   │   ├── layout.tsx  # root layout (Navbar, Footer, fonts, metadata)
│   │   ├── page.tsx    # /            — home
│   │   ├── gallery/    # /gallery
│   │   ├── about/      # /about
│   │   └── contact/    # /contact
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   ├── gallery/    # GalleryGrid, ArtworkCard
│   │   └── ui/         # shared building blocks (Container, etc.)
│   └── lib/
│       └── artworks.ts # typed source of truth for gallery items
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Adding artwork

Artworks are listed in [`src/lib/artworks.ts`](src/lib/artworks.ts) as a typed array. To add a new piece:

1. Place the image file in `public/images/gallery/`.
2. Add an entry to the `artworks` array:

```ts
{
  slug: "morning-light",
  title: "Morning Light",
  year: 2024,
  medium: "Oil on canvas, 80 × 100 cm",
  image: "/images/gallery/morning-light.jpg",
  description: "A study of natural light on linen.",
}
```

The gallery page renders all entries automatically.

## Deployment

The site deploys to [Vercel](https://vercel.com/) on every push to `main`. Production URL: **sahardolatyari.com** (DNS via Cloudflare).

To deploy manually:

```bash
npm run build
```

Then push to `main` — Vercel picks up the change.

## License

All artwork and content © Sahar Dolatyari. The site source code is private to the artist.
