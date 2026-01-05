# Hack at UCI Club Site

This website uses Vite + React + Typescript + Tailwind.

## Getting started

_Note: no .env file is needed here_

Make sure you have [Node](https://nodejs.org/en/download) installed.

In this `client` folder, run:

```bash
npm ci
```

To start the development server, run the following command and navigate to http://localhost:5173/:

```bash
npm run dev
```

## Helpful VSCode Extensions

Make sure you have the following tools installed before contributing:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for code formatting on file save or set to a keybind
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for linting Javascript

## Overview of Project

This project was bootstrapped with Vite, so it's structured mostly from Vite's starting point.

### Global Styles

Theme colors, fonts, and sizes are found in `index.css`.
Because of the way Tailwind works, these variables can be used as classes like `bg-main` to use the main color for the background.

### Routes and Components Used in Every Page

Definitions for routes like the `/about` page and components used in every page like the `Navbar` and `Footer` are found in `App.tsx`

### Pages

The actual components for pages are found in the `pages` folder.

### Shared Components and Utilities

Shared components like `PrimaryButton` and utilities like the `useScrollFromTop` hook are found in the `lib` folder.

### Images

For the most part, images are found in the `assets` folder.

Some images are found in the `public` folder. The `hack-banner.jpg` is for social media previews.

## Miscellaneous Notes

### GitHub Pages Single Page Application (SPA) Workaround

To serve our website, we build the application and place the resulting files in the `gh-pages` branch. Then we ask Github to serve the files from that branch (see `deploy-main.yml` for more details).

However, GitHub Pages does not support SPAs due to its handling of URLs. (ex. given website.com/about, GH Pages will try to find an about.html, but we use an SPA, which means we only have an index.html, so GH Pages shows a 404)

From `package.json`, we added a simple 404.html which acts as the index.html, circumventing this issue:

```
"postbuild": "cp dist/index.html dist/404.html"
```

Note: this could have SEO implications. Previously, when this site used Create React App, a [script](https://github.com/HackAtUCI/Club-Site/blob/e34de09e0348d45229a3b5ba68296d6ddb4bc6e0/client/link-build-pages.sh) was used to link all pages together so that the site returned a 200 instead of a 404. A future task should include testing the SEO status of the website with this workaround and potentially bringing that script back to work with Vite.
