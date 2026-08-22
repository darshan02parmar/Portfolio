# 💼 Portfolio -[ darshan.dev](https://darshan-parmar.vercel.app/)

Welcome to the repository for my personal portfolio website, showcasing my projects, skills, professional experience, and hidden interactive developer easter eggs as a full-stack developer.

---

## ✨ Features

- **Modern Split-Screen Layout**: Fixed Left Branding panel coupled with a smooth-scrolling Right Content section, responsive for mobile and desktop viewports.
- **Three.js Visual Effects**: A WebGL-powered custom shader grid distortion hero image that reacts dynamically to mouse movement.
- **Markdown-Powered Developer Blog**:
  - **Glassmorphic Feed Layout**: Articles presented in semi-transparent interactive cards (`TiltCard` with backdrop-blur) floating over a vibrant, blurred background vector.
  - **Dynamic Article View**: Native markdown parsing (`react-markdown` & GFM), inline syntax-highlighted code blocks, custom reading-progress tracker, and a personalized neo-brutalist wrapping CTA pointing to external development portals (Hashnode & GitHub).
- **Responsive Experience Timeline**:
  - Structured, responsive timeline with clean neo-brutalist connector bars and interactive tilt vectors.
  - Shows professional milestones in chronological order with primary job titles and customized tech-stack badges.
- **Developer Easter Eggs & Achievements System**:
  - **🏆 Secrets Progress Badge**: A floating golden trophy widget (`🏆 X/5 Secrets Found`) tracking unlocked secrets with a neo-brutalist checklist tooltip, persistent via `localStorage`.
  - **🛠️ God Mode Developer Sandbox** (*Triggered by typing `konami` or keyboard arrows: `↑ ↑ ↓ ↓ ← → ← → B A`*): Opens an interactive, draggable control panel enabling recruiters to inspect:
    - *Wireframe Blueprint Mode*: Outlines all DOM elements with dashed green strokes.
    - *Page Editor*: Sets `designMode = 'on'` to edit any text directly on the page.
    - *Slow Motion*: Runs transitions/animations at 0.2x speed.
    - *Click to Explode*: Explodes page elements (they fly away in random directions with an 8-bit synth sound effect).
    - *Accent Hue Customizer*: Rotates the HSL color palette of the entire UI, leaving images natural.
  - **📟 Neo Matrix Rain Console** (*Triggered by typing `matrix` or `neo`*): Blackout digital rain streams showing a typewriter intro, responsive mouse force distortion (brighten, bend, repel), and a typewriter exit sequence ("*Disconnecting... Reality restored.*").
  - **🖥️ CRT Whoami Terminal** (*Triggered by typing `darshan`*): Retro monochrome hacker terminal printing developer profile info.
  - **📊 Diagnostic Console** (*Triggered by typing `secrets`*): Neon-themed drawer reporting active bundle diagnostics and frequencies.
- **Live Integrations**:
  - **GitHub Calendar**: Live contribution graph showing yearly Git commits.
  - **GitRoll Card**: Live developer skill ratings badge.
- **Functional Contact Form**: Clean form integrated with **Web3Forms API** and `react-hot-toast` notifications.

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI Library
- **Vite 7** - Ultra-fast bundler and dev server
- **TypeScript** - Type-safe programming
- **Tailwind CSS v3** - Utility-first styling and custom theme variables
- **Framer Motion v12** - Fluid gesture animations, exit transitions, and drag controls
- **Three.js** - 3D WebGL rendering (Grid Distortion Shader)
- **AOS (Animate On Scroll)** - Page-scroll entrance effects
- **React Snowfall** - Decorative canvas snow particles in the Experience section

### Backend & APIs
- **Web3Forms** - Secure, serverless email delivery
- **GitHub API** - Repository contribution data fetching
- **Web Audio API** - Oscillator synthesis for retro sound effects

### Development & Linters
- **ESLint** & **TypeScript-ESLint** - Code quality enforcement
- **PostCSS** & **Autoprefixer** - CSS compilation and vendor prefixing

---

## 🏗️ Project Structure

```text
├── public/                 # Static assets (images, fonts, shapes)
│   ├── favicon.svg         # Brand letter 'D' favicon
│   ├── DarshanParmar.pdf   # Developer PDF Resume
│   └── background/         # Gradient overlays and texture images
├── src/
│   ├── assets/             # Font styles and images
│   ├── components/         # Modular React Components
│   │   ├── AchievementBadge.tsx # Secrets trophy status & tracker
│   │   ├── CodeBlock.tsx        # Styled markdown syntax viewer
│   │   ├── CommandPalette.tsx   # Ctrl+K modal quick links
│   │   ├── ConfettiOverlay.tsx  # God Mode canvas confetti burst
│   │   ├── Contact.tsx          # Form inputs and Web3Forms action
│   │   ├── CustomCursor.tsx     # Magnetic pointer tracker
│   │   ├── DevSandbox.tsx       # Draggable Developer Control Dashboard
│   │   ├── DevSecretsDrawer.tsx # Active bundle diagnostics panel
│   │   ├── FloatingShape.tsx    # Wavy background SVG shapes
│   │   ├── GitRoll.tsx          # Developer grade card
│   │   ├── Github.tsx           # GitHub contributions calendar
│   │   ├── GridDistortion.tsx   # Three.js mouse-distortion shader
│   │   ├── HintModal.tsx        # Clues modal for Easter eggs
│   │   ├── MatrixRain.tsx       # Matrix rain screen with mouse distortion
│   │   ├── ProjectDetail.tsx    # Full page case studies
│   │   ├── ProjectList.tsx      # Cards grid for projects
│   │   ├── ScrollButton.tsx     # Neo-brutalist scroll-to-top button
│   │   ├── TechStack.tsx        # Tool category grids
│   │   ├── WhoamiTerminal.tsx   # Monochromatic command line overlay
│   │   └── WorkExperience.tsx   # Work history cards
│   ├── lib/
│   │   └── aos.tsx              # AOS scroll animations wrapper
│   ├── App.tsx             # Main App layout, keydown hooks & routing
│   ├── index.css           # Design tokens, variables, & utility layers
│   └── main.tsx            # App bootstrap entry
├── index.html              # HTML shell & SEO meta/open-graph tags
├── tailwind.config.js      # Custom animations, fonts, and HSL tokens
└── vite.config.ts          # Vite build and react compiler config
```

---

## 🎨 Design System

- **Color Palette**: Minimalist white/slate background contrasted with vibrant retro accents (lime, amber, emerald, cyan) styled using thick borders and flat shadow depths.
- **Typography**:
  - `Chromate` (Custom Local Font) - Retro-modern titles
  - `Inter` (Google Fonts) - Clean body text
- **Layout Philosophy**: High impact UI featuring clean, responsive grid systems, tactile click animations (`whileTap`), and micro-interactions.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- `npm` (packaged by default with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darshan02parmar/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add your Web3Forms access key:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   ```
   *(You can generate a free key instantly at [web3forms.com](https://web3forms.com/))*

4. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```
   Deploy the resulting `dist/` directory to your static hosting provider (Vercel, Netlify, Cloudflare Pages, or GitHub Pages).

---

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contact

- **Website**: [darshan.dev](https://darshan-parmar.vercel.app/)
- **Email**: [darshanparmar0302@gmail.com](mailto:darshanparmar0302@gmail.com)
- **GitHub**: [@darshan02parmar](https://github.com/darshan02parmar)
- **LinkedIn**: [Parmar Darshan](https://linkedin.com/in/parmar-darshan)
- **Twitter**: [@darshan02parmar](https://twitter.com/darshan02parmar)
