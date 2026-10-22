# DesignSystems.One — Website Clone 🎨

A responsive design-system showcase inspired by DesignSystems.One. The project focuses first on how the interface adapts across screen sizes, and on using **Tailwind CSS v4 alongside CUBE CSS** as complementary tools—without one undermining or conflicting with the other.

## 🎯 Project purpose

This project demonstrates responsive design across a range of viewport sizes while exploring how Tailwind CSS utilities can coexist with a CUBE CSS architecture. CUBE CSS provides a clear structure for reusable compositions, component blocks, utilities, and contextual exceptions; Tailwind CSS offers utility classes for styling directly in markup. Used with deliberate boundaries and shared design tokens, both approaches can contribute to the same interface without competing for the same responsibilities.

Supporting goals include showcasing a consistent design system, fluid typography and spacing, and reusable CSS patterns that make the site easier to adapt and maintain.

## ✨ What the project demonstrates

1. **Responsive design:** Flexible layouts and responsive styling adapt the site across different screen sizes and viewport widths.
2. **Tailwind CSS alongside CUBE CSS:** Tailwind CSS v4 utilities and CUBE CSS patterns are used together, demonstrating how each can serve a distinct role in the styling system.
3. **CUBE CSS architecture:** Styles are organized around compositions, utilities, blocks, and exceptions, distinguishing reusable layout behavior from component styling and contextual overrides.
4. **Design system and tokens:** Shared tokens define colors, spacing, typography, radii, and shadows, helping keep visual decisions consistent and easier to update.
5. **Fluid typography and spacing:** Token scales use fluid values so type and spacing can adjust smoothly across viewport sizes.
6. **Reusable CSS patterns:** Compositions such as `flow`, `stack`, `cluster`, `grid`, `sidebar`, and `switcher` provide repeatable layouts. Blocks provide styles for elements such as buttons, cards, navigation, and forms.

## 📄 Pages available

The **Foundations** page (`index.html`) and the **Layout** page (`pages/layout.html`) are the only pages currently linked and working. Together, they provide the core examples needed to demonstrate this project’s goals. Other pages may be added and linked as the project develops.

## 📸 Responsive screenshots

The `screenshots/` folder contains screenshots of the Foundations and Layout pages at a range of mobile, tablet, laptop, and desktop viewport sizes. Use them to review how the layouts adapt across screen sizes.

- `screenshots/foundations-page/` — responsive captures of the Foundations page.
- `screenshots/layout-page/` — responsive captures of the Layout page.

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
├── screenshots/               # Responsive screenshots by page
│   ├── foundations-page/       # Foundations page across device sizes
│   └── layout-page/            # Layout page across device sizes
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
