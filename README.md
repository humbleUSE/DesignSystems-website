# DesignSystems Website

[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A responsive design-system showcase inspired by DesignSystems.One, focused on layout adaptability, reusable patterns, and scalable front-end styling.

## Overview

This project demonstrates how a design system can support consistent UI decisions while remaining flexible across screen sizes and content patterns. The emphasis is on structure, reusable components, and maintainable styling rather than one-off visual fixes.

The work combines Tailwind CSS utilities with CUBE CSS principles to show how these methodologies can work together in a real-world interface.

## What This Project Demonstrates

- Responsive design across multiple device sizes
- Tailwind CSS and CUBE CSS used together
- Design tokens for color, spacing, and type scales
- Reusable layout patterns such as grid, cluster, switcher, and sidebar
- Fluid typography and spacing for smoother screen adaptation
- A modular stylesheet organization built around tokens, base styles, compositions, blocks, and utilities

## Tech Stack

- HTML
- CSS
- Tailwind CSS v4
- JavaScript
- Vite
- Bun
- Biome and Prettier

## Getting Started

### Prerequisites

Install [Bun](https://bun.sh/) before continuing.

### Install dependencies

```bash
bun install
```

### Run the development server

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview the production build

```bash
bun run preview
```

### Lint and format

```bash
bun run lint
bun run format
```

## Project Structure

```text
DesignSystems-website/
├── index.html
├── pages/
│   ├── layout.html
│   ├── motion.html
│   └── spacing.html
├── public/
├── screenshots/
│   ├── foundations-page/
│   └── layout-page/
├── src/
│   ├── assets/
│   ├── main.js
│   └── styles/
│       ├── base.css
│       ├── fonts.css
│       ├── index.css
│       ├── theme.css
│       ├── components/
│       ├── compositions/
│       ├── exceptions/
│       ├── tokens/
│       └── utilities/
├── package.json
├── vite.config.js
├── README.md
└── dist/
```

## CSS Architecture

The stylesheet entry point is organized in layers to make styling easier to reason about:

1. Tokens and theme
2. Base styles
3. Compositions
4. Blocks
5. Utilities
6. Exceptions

This layered structure helps keep the codebase composable and reduces the need for one-off, tightly coupled rules.

## Key Focus Areas

- Layout consistency across breakpoints
- Reusable design-system primitives
- Clean separation between utility classes and structural patterns
- Scaleable front-end styling without sacrificing maintainability

## Notes

This is a front-end demonstration project rather than a backend-driven application. It is intentionally structured as a static build with Vite, making it ideal for design-system exploration and frontend pattern work.

## License

This project does not currently declare a license.

---

Built to explore responsive design systems, reusable UI patterns, and maintainable front-end architecture.
