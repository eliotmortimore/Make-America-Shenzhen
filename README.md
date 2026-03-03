# Make America Shenzhen

An interactive long-form article visualizing the thesis for American reindustrialization. This project transforms a dense policy and economic argument into an engaging, data-rich web experience.

## The Thesis

The core argument is that the United States can build its own manufacturing ecosystem ("American Shenzhen") by focusing on:
1.  **Speed:** Digitizing the factory floor to collapse lead times.
2.  **Dual-Use:** Combining commercial scale (75%) with defense utility (25%).
3.  **Density:** Building a "2-hour supply chain" radius.

## Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/eliotmortimore/Make-America-Shenzhen.git
    cd Make-America-Shenzhen/american-shenzhen
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/page.tsx`: The main entry point, composing feature sections.
- `components/features/`: Large, interactive sections (e.g., `ThesisIntro`, `SpeedThesis`, `IndustryStackRank`).
- `components/ui/`: Reusable UI primitives (Cards, Badges, etc.).
- `data/industries.ts`: The source of truth for the 12 manufacturing categories.

## License

MIT
