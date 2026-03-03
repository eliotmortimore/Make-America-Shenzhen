# Agent Context: Make America Shenzhen

This file contains critical context for future AI agents contributing to this project. Please read this before making changes.

## 1. Project Philosophy
**"Interactive Article" > "Landing Page"**
- **Goal:** This is not a SaaS landing page selling a product. It is a digital essay selling an *idea*.
- **Tone:** Serious, data-driven, urgent, yet optimistic. Think "high-end magazine feature" meets "modern dashboard."
- **Visuals:** Dark mode default. High contrast. Data density is good, but it must be structured. Use cards, grids, and subtle animations to break up text.
- **Source of Truth:** The content is derived from `article.md`. Any factual changes should be cross-referenced there.

## 2. Technical Architecture
- **Framework:** Next.js 15+ (App Router).
- **Styling:** Tailwind CSS. Use utility classes for almost everything.
- **Animation:** Framer Motion. Use for scroll-triggered entrances (`whileInView`) and interactive hover states. Keep animations subtle (duration ~0.4s-0.8s).
- **Icons:** Lucide React. Consistent stroke width and style.

## 3. Component Structure
- **`components/features/`**: This is where the main "blocks" of the article live. Each section of the essay (Intro, Speed Thesis, Dual-Use, etc.) should be its own self-contained component here.
  - Example: `SpeedThesis.tsx` contains the entire "Part I" section logic and UI.
- **`components/ui/`**: Small, reusable primitives (Cards, Badges, Section wrappers).
- **`app/page.tsx`**: This file should remain clean. It acts as the "outline" of the article, simply importing and stacking the feature components.

## 4. Key Data Models
- **Industries:** The 12 manufacturing categories are defined in `data/industries.ts`. This is the central database for the "Stack Rank" section.
  - **Schema:** `id`, `rank`, `name`, `tier` (Foundations/Accelerators/Enablers), `score` (EC/VR/DU), `description`, `companies`.

## 5. Design Patterns to Maintain
- **Bento Grids:** Use grid layouts (`grid-cols-1 md:grid-cols-2`) to present related concepts side-by-side.
- **"Social Proof" Cards:** When referencing people (@sdamico, @oyhsu), use a card style that mimics a social media snippet or quote.
- **Data Visualization:** Whenever possible, turn a statistic (e.g., "14.7x EBITDA") into a visual element (bar chart, progress bar, big number) rather than just text.
- **Gradients:** Use subtle background gradients (`bg-gradient-to-b`) to create depth, especially in dark mode.

## 6. Known Quirks
- **Git:** If running in this specific environment, note that we use a Homebrew-installed git (`/opt/homebrew/bin/git`) to bypass license issues. Standard `git` commands may fail if they alias to the system Apple git.
- **Hydration:** Many components use `framer-motion` and `window` events, so they must be marked `"use client"`.

## 7. Future Roadmap
- **Mobile Optimization:** Ensure all complex grids stack gracefully on mobile.
- **Performance:** Watch out for too many heavy animations affecting scroll performance.
- **SEO:** The article content is currently locked in client-side components. Future refactoring could move static text to server components for better indexing.
