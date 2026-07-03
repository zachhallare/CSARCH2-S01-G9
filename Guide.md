# Guide — ARM vs x86 Interactive Explorer

## Project Setup

```bash
cd CSARCH2-S01-G9
npm install
npm run dev      # start dev server
npm run build    # production build
```

## Where to Change Content

All architecture data is in **one file**:

→ **`src/data.ts`**

Edit only this file to change:
- Overview text
- Performance metrics & scores (0–100)
- Use cases lists
- Key devices
- Pros and cons
- Comparison table rows

### Example: Editing ARM's overview

Find `armData` in `src/data.ts`, change the `overview` string:

```ts
overview: "ARM is a RISC architecture known for..."
```

### Example: Adding a performance metric

Add an entry to the `performance` array (score 0–100, higher = better):

```ts
{ metric: "Your Metric", arm: 85, x86: 70 }
```

### Example: Editing the comparison table

Edit any row in the `comparisonTable` array:

```ts
{ attribute: "ISA Type", arm: "RISC", x86: "CISC" },
```

## File Structure

| File | Purpose |
|---|---|
| `src/data.ts` | **All text content** — the only file you need to edit |
| `src/App.tsx` | Routes between Landing → Categories → Detail |
| `src/LandingPage.tsx` | Home screen with two CPU chip SVGs |
| `src/CategoryPage.tsx` | Grid of category buttons |
| `src/DetailPage.tsx` | Shows full content for a selected category |
| `src/AnimatedBars.tsx` | Benchmark bar animation |
| `src/index.css` | Colors, fonts, background patterns |
| `src/main.tsx` | Entry point — leave alone |
| `index.html` | HTML shell — leave alone |

## The 3 Screens

1. **Landing** — pick ARM or x86
2. **Categories** — pick a topic (Overview, Performance, etc.)
3. **Detail** — read the full content

Back buttons navigate you back through each screen.

## Color Reference

- ARM accent: `#00C2D1` (teal)
- x86 accent: `#FF8C42` (orange)
- Background: `#0F1117`
- Panels: `#1A1F2B`

## Rules

- Edit **only** `src/data.ts` to change text, scores, or list items
- Don't touch `.tsx` files unless you're changing layout or adding new features
- Scores use 0–100 scale (higher = better for that metric)
