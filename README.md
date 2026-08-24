# 🎨 Designora — Premium Freelance Designer Marketplace

> Connect with vetted creative designers, upload freelance services, manage active workspace contracts, and review digital portfolios on a single, glassmorphic marketplace.
---

## ✨ Features Overview

### 1. Global Toast Notification System
Powered by a custom `ToastProvider` React Context hook (`useToast`), Designora features an animated floating toast stacking overlay.
* **Animations**: Responsive slide-in and spring animations driven via custom `@theme` CSS keyframes in Tailwind v4.
* **Contextual Styles**: Rich colors, borders, and checkmark SVGs mapped for `success`, `warning`, and `info` notification categories.
* **Auto-dismiss**: Toasts clear automatically after 3.5 seconds with absolute close click handlers.

### 2. Client & Designer Onboarding Card
Elegant, centralized forms positioned against visual gradient backdrops. Includes:
* Dynamic input borders with indigo focus rings (`focus:ring-indigo-650`).
* Submit buttons with tactile micro-interactions (`active:scale-[0.98] transition-all`).
* Success toast triggers on registration.

### 3. Freelancer Service Upload Card
A professional multi-column portal designed for freelancers to publish starting rates, location preferences, bio details, and filterable skill lists. Includes dynamic input verification and clear forms.

### 4. Interactive Talent Directory
Responsive 3-column designer card list featuring:
* Premium initial avatars with gradient backgrounds (`bg-gradient-to-tr from-indigo-500 to-violet-500`).
* Custom star ratings, location icons, starting rate metrics, and clamp descriptions.
* **UX State Tracking**: Clients can hire creators directly. Already-hired designers display a disabled `"Already Hired"` button state to avoid redundant contracts.

### 5. Workspace Contracts & My Hires
A dashboard tracking client resource contracts. Features real-time state metrics, email messaging shortcuts, and a stunning "No Active Hires" folder state with redirect links.

### 6. Shell Layout & Layout Elements
* **Navbar**: Sticky glassmorphism header (`sticky top-0 bg-white/70 backdrop-blur-md`) complete with active routes and a **fully responsive mobile hamburger drawer menu**.
* **Footer**: Corporate multi-column site footer with quick links, social lists, and custom inline SVG brand badges (GitHub, Twitter, LinkedIn).

---

## 🛠️ Technology Stack

* **Core Framework**: React 19 (`StrictMode` bootstrap)
* **Build System**: Vite 8
* **Routing**: React Router DOM 7
* **CSS & Style Engine**: Tailwind CSS v4 (`@tailwindcss/vite` compiler)
* **Iconography**: Lucide React 1.14 (and custom SVGs)
* **Database / Mock Data**: Local JSON configurations & browser `localStorage` persistence

---

## 📂 Directory Structure

```text
Designer-Marketplace/
├── components/
│   ├── Toast.jsx            # Toast Context, Provider, Hook, and Overlay
│   ├── Navbar.jsx           # Responsive glassmorphic navbar with mobile menu
│   └── footer.jsx           # Multi-column footer with brand SVG icons
├── data/
│   ├── designer.json        # Seed profiles for featured freelancers
│   ├── service.json         # Seed packages for service lists
│   ├── testimonial.json     # Client reviews
│   └── whychooseus.json     # Site platform benefits
├── pages/
│   ├── about/
│   │   └── about.jsx        # Company profiles, mission, and step timelines
│   ├── designers/
│   │   └── designers.jsx    # Complete talent directory and hire flow
│   ├── home/
│   │   ├── FeaturedDesignercard.jsx  # Featured profile preview cards
│   │   ├── Hero.jsx        # Dual-column interactive homepage hero banner
│   │   ├── Home.jsx        # Home page index mount
│   │   └── testimonals.jsx # Review slider quotes
│   ├── servcies/            # (spelled servcies in routes)
│   │   ├── cta.jsx          # Dark-gradient CTA onboarding banner
│   │   ├── heros.jsx        # Creative directory catalog header
│   │   ├── servicecard.jsx  # Standard service directories
│   │   ├── services.jsx     # Main services layout element
│   │   └── whychooseus.jsx  # Grid list of platform values
│   ├── sign up/
│   │   ├── continuecilent.jsx    # Client signup card
│   │   └── continuedesigner.jsx  # Designer signup card
│   └── viewhire/
│       └── viewhire.jsx     # Active client contracts dashboard
├── src/
│   └── assets/              # hero.png and default logos
├── App.jsx                  # Main index routes, state mounts, and ToastProvider wrappers
├── index.css                # Global fonts (Plus Jakarta Sans) and Tailwind imports
├── main.jsx                 # Client bootstrapping index mount
├── index.html               # Main index HTML entry point
└── package.json             # Build scripts and npm dependencies
```

---

## 🚀 Installation & Running

Follow these steps to launch the workspace locally:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```

3. **Verify Build Output**:
   ```bash
   npm run build
   ```

---

## 🎨 Design Philosophy & Aesthetics

Designora's user experience is constructed around premium web guidelines:
1. **Typography**: Utilizes `Plus Jakarta Sans` as its primary typeface, offering high readability and aesthetic geometry.
2. **Elevation**: Implements soft, multi-layered shadows (`shadow-lg shadow-indigo-100/50`) and glowing border states to establish visual hierarchies.
3. **Glassmorphism**: Combines translucent backgrounds (`bg-white/80`) with glass filters (`backdrop-blur-md`) and clean borders (`border-white`) to reflect depth.
4. **Tactile Interaction**: Maps CSS transformations on buttons and active states (`active:scale-[0.98] transition-all duration-200`) to imitate physically tactile elements.
