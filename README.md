# Candlix

Candlix is a showcase app built with the Next.js App Router that visualizes candlestick chart patterns on an interactive grid. Users can browse bullish, bearish, and neutral formations by category, preview quick details on hover, and open an animated card view for the selected pattern.

## Features
- **Category grouping:** Single-, double-, neutral, and multi-candle patterns are listed under headings sourced from `app/data/patterns.ts`.
- **Interactive cards:** Pattern cards use `CardTitles`, `CardFlags`, `CardHeader`, and `CardDesc` components to surface the title, trend direction (bullish/bearish/neutral), and description when selected.
- **Animated transitions:** `motion`/`AnimatePresence` transitions provide smooth changes between the grid and detail views.
- **Customizable drawings:** Components in `app/components/patterns` define each pattern's drawing with Tailwind CSS 4 utility classes; follow the same structure to add new patterns.
- **Modern Next.js stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, and ESLint 9.

## Requirements
- Node.js 18+ (compatible with Next.js 16)
- PNPM or NPM (`pnpm-lock.yaml` is included; PNPM recommended)

## Setup and Run
```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Production build
pnpm build
pnpm start
```
The app runs at `http://localhost:3000` by default.

## Project Structure
```
app/
  components/         # Cards, sidebar, and pattern drawings
  data/patterns.ts    # Pattern data and helper types
  globals.css         # Global styles (Tailwind 4)
  layout.tsx          # Application shell
  page.tsx            # Main grid and interaction logic
```

## Development Tips
- To add a new pattern, create an entry in `app/data/patterns.ts` and a matching React component under `app/components/patterns`, then export it via `app/components/index.ts`.
- Grid column counts are controlled by the `getGridCols` function in `page.tsx`; adjust per category as needed.
- Tune animation parameters (`duration`, `ease`) on the `motion.div` components in `page.tsx` to refine transition behavior.
