# DesignSystems.One — Website Clone 🎨

A responsive design-system showcase inspired by DesignSystems.One. This project explores **CUBE CSS**, reusable layout patterns, design tokens, and fluid typography in a practical website.

## 🎯 Project purpose

This project demonstrates how a clear CSS architecture and shared design decisions can make an interface easier to build, adapt, and maintain. It brings together CUBE CSS principles and Tailwind CSS v4, using custom properties and reusable CSS patterns alongside utility classes.

## ✨ What the project demonstrates

- **CUBE CSS architecture:** Styles are organized around compositions, utilities, blocks, and exceptions. This separates reusable layout behavior from component styling and contextual overrides.
- **Responsive design:** The layouts use flexible compositions and responsive styling to adapt to different viewport sizes.
- **Design system and tokens:** Shared tokens define colors, spacing, typography, radii, and shadows, helping keep visual decisions consistent and easier to update.
- **Fluid typography and spacing:** Token scales use fluid values so type and spacing can adjust smoothly across viewport sizes.
- **Reusable CSS architecture:** Compositions such as `flow`, `stack`, `cluster`, `grid`, `sidebar`, and `switcher` provide repeatable layout patterns. Blocks provide styles for interface elements such as buttons, cards, navigation, and forms.

## 🧰 Tech stack

- HTML
- CSS, including Tailwind CSS v4
- JavaScript (vanilla; used as the Vite entry point)
- [Vite](https://vite.dev/) for development and production builds
- [Bun](https://bun.sh/) for package management and scripts
- Biome and Prettier for code checks and formatting

## 🚀 Getting started

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

Vite prints the local development URL in the terminal.

### Build for production

```bash
bun run build
```

The production output is generated in `dist/`.

### Preview the production build

```bash
bun run preview
```

### Check and format the project

```bash
bun run lint
bun run format
```

`bun run lint:fix` runs Biome with automatic fixes enabled.

## 📁 Project structure

```text
.
├── index.html                 # Main website page
├── pages/                     # Additional standalone design-system pages
│   ├── layout.html
│   ├── motion.html
│   └── spacing.html
├── public/                    # Public static assets
├── src/
│   ├── assets/                # Fonts, icons, and images
│   ├── main.js                # Vite entry point; imports the CSS entry point
│   └── styles/
│       ├── components/
│       │   ├── blocks/        # Component-level styles
│       │   └── compositions/  # Reusable layout patterns
│       ├── exceptions/        # Context-specific overrides
│       ├── tokens/            # Color, type, spacing, radius, and shadow tokens
│       ├── utilities/         # Small, single-purpose styles
│       ├── base.css           # Base styles
│       ├── fonts.css          # Local font-face declarations
│       ├── index.css          # Main CSS entry point
│       └── theme.css          # Semantic theme aliases
├── package.json               # Dependencies and scripts
└── vite.config.js             # Vite and Tailwind CSS configuration
```

## 🧱 CSS architecture

The stylesheet entry point, `src/styles/index.css`, imports the project’s styles in layers:

1. **Tokens and theme** — foundational values and semantic aliases.
2. **Base styles** — shared element-level defaults.
3. **Compositions** — reusable layout patterns.
4. **Blocks** — component-level styles.
5. **Utilities** — focused styling helpers.
6. **Exceptions** — contextual overrides where a general pattern needs a specific variation.

This organization is intended to keep styles composable and reduce reliance on one-off, tightly coupled rules.

## 📝 Notes

This repository is a front-end demonstration project. The site is delivered as static assets through Vite; it does not require a backend service to run locally.
