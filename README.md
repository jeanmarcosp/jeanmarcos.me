# jeanmarcos.me

Personal portfolio site for Jeanmarcos Perez — built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev      # start the dev server with hot reload
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # run ESLint
```

## Deployment

Hosted on [Vercel](https://vercel.com), connected to this repository's GitHub integration — every push to `main` deploys automatically. No manual deploy step or `vercel.json` is needed; Vercel's zero-config Vite preset handles the build (`npm run build`, output `dist/`).

The custom domain (`jeanmarcos.me`) is managed through Cloudflare DNS, pointed at Vercel.
