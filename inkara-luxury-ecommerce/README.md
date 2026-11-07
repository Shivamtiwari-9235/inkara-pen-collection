# INKARA — Luxury Writing Instruments E-Commerce Platform

> **"Precision, Held in Hand."**  
> *The Art of Writing — Handcrafted Fountain, Rollerball, and Ballpoint Pens.*

Welcome to the official source repository for **INKARA**, a complete, luxury e-commerce platform engineered for discerning writers, entrepreneurs, executives, students, and fine stationery collectors.

---

## ✒️ Brand Identity & Creative Direction

INKARA is inspired by the timeless discipline of international bespoke penmaking. Every element of the interface embodies tactile permanence, mechanical precision, and quiet prestige.

- **Primary Canvas (Matte Black):** `#101010`
- **Secondary Surface (Charcoal):** `#1B1B1B`
- **Deep Slate Backdrop:** `#161616`
- **Primary Accent (Antique Gold):** `#C4A477`
- **Highlight (Champagne Gold):** `#E1C79C`
- **Body Typography (Warm Ivory):** `#EEE9DF`
- **Editorial Subtitle (Muted Grey):** `#A9A39A`
- **Typography Pairing:**
  - *Headings & Manifesto:* **Cormorant Garamond** & **Playfair Display** (Serif)
  - *Interface, Specifications & Buttons:* **DM Sans** & **Inter** (Sans-Serif)

---

## 🚀 Quick Start Guide (Windows, Mac, Linux)

This project is built with **Next.js**, **React**, and **Tailwind CSS**. It can be opened directly in **VS Code** on your Windows laptop.

### 1. Extract and Open in VS Code
1. Extract the downloaded `inkara-luxury-ecommerce.zip` to your preferred folder.
2. Open **VS Code**, go to **File &rarr; Open Folder...**, and select the extracted `inkara-luxury-ecommerce` directory.
3. Open the integrated terminal (`Ctrl + ~` or `` Ctrl + ` ``).

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Launch Application
Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📂 Architecture & Directory Structure

```text
inkara-luxury-ecommerce/
├── public/
│   ├── images/
│   │   ├── hero-reference-pen.jpg       # Reference pen photo (Black matte with gold emblem)
│   │   ├── fountain-journal.jpg         # Luxury fountain pen resting on leather journal
│   │   ├── craftsmanship-workshop.jpg   # Artisan hand-assembling gold nib at brass bench
│   │   ├── imperial-gift-box.jpg        # Collector velvet gift box with ink bottle & pen rest
│   │   ├── rollerball-drafting.jpg      # Gunmetal rollerball on architectural drawings
│   │   └── burgundy-ballpoint.jpg       # Deep burgundy & rose gold twist ballpoint
│   ├── robots.txt                       # Search engine crawler instructions
│   └── sitemap.xml                      # Structured XML sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Sticky header with active gold underline & live badges
│   │   ├── Footer.jsx                   # 5-column editorial footer with concierge details
│   │   ├── PenAnimation.jsx             # SVG/CSS pen separation & ink line interactive engine
│   │   ├── ProductCard.jsx              # Product card with hover zoom, quick view, & wishlist
│   │   ├── CartDrawer.jsx               # Slide-out bag with real "Buy 3 Get 1 Free" calculation
│   │   ├── WishlistDrawer.jsx           # Slide-out saved pens drawer with move-to-bag
│   │   ├── QuickViewModal.jsx           # Instant preview modal with color & nib selectors
│   │   ├── SearchModal.jsx              # Full-screen instant live search overlay
│   │   └── WritingQuizModal.jsx         # "Find Your Writing Style" 4-step interactive quiz
│   ├── context/
│   │   └── ShopContext.jsx              # Global state (Cart, Wishlist, Promos, Toasts, LocalStorage)
│   ├── data/
│   │   ├── products.js                  # 12 detailed luxury pen models across 3 disciplines
│   │   ├── articles.js                  # 3 complete educational long-form guides
│   │   └── reviews.js                   # Curated verified patron testimonials
│   ├── pages/
│   │   ├── _app.jsx                     # Global Next.js app wrapper & toast notification layer
│   │   ├── index.jsx                    # Cinematic homepage with 12 distinct luxury sections
│   │   ├── shop.jsx                     # Complete catalog with category, price & color filters
│   │   ├── collections.jsx              # 3 distinct category deep dives + comparative matrix
│   │   ├── offers.jsx                   # "Buy 3 Get 1 Free" campaign & privilege gift suites
│   │   ├── journal/
│   │   │   ├── index.jsx                # The INKARA Journal editorial listing
│   │   │   └── [slug].jsx               # Individual article reader with drop-caps & recommendations
│   │   ├── story.jsx                    # Brand heritage, 48-step craftsmanship & pillars
│   │   ├── product/
│   │   │   └── [slug].jsx               # Dedicated individual product page with multi-angle gallery
│   │   └── checkout.jsx                 # Interactive demo checkout & order confirmation invoice
│   └── styles/
│       └── globals.css                  # Custom Tailwind styling, scrollbars & gold shimmer
├── .env.example                         # Environment variable template
├── next.config.js                       # Next.js configuration
├── package.json                         # Dependencies & project scripts
├── postcss.config.js                    # PostCSS configuration
├── tailwind.config.js                   # Custom INKARA theme colors & typography
└── README.md                            # Comprehensive platform documentation
```

---

## 🎁 Promotional Engine & "Buy 3, Get 1 Free"

The shopping bag implements an authentic promotional algorithm:
- Every pen in the catalog is eligible.
- When 4 or more pens are placed in the bag, the engine sorts all units by price ascending.
- For every 4 pens added, the lowest-priced pen is automatically deducted at **100% discount**.
- A real-time progress bar prompts the user: *"Add 1 more pen to receive the 4th pen FREE!"*
- Also supports promo codes:
  - `BUY3GET1` (Auto-activated when conditions are met)
  - `INKARA10` (10% off when purchasing 2 or more instruments)
  - `WELCOME10` (10% introductory subscriber privilege)

---

## 🛠️ Verification & Testing Log

- **Navigation Verification:** All navbar routes (`/`, `/shop`, `/collections`, `/offers`, `/journal`, `/story`) link to distinct, dedicated pages with active gold indicators.
- **Product Interaction:** Every product card supports live color swatch changes, quick view, wishlist toggling, and add to bag.
- **Pen Animation:** The hero section features an interactive pen cap separation animation showing the engraved nib and ink stroke, with a toggle for play/pause and reduced motion accessibility.
- **Search & Filter:** Shop page supports instantaneous live search, category pills, color finish filters, price range slider (₹1,999 to ₹11,000+), and sorting by price, rating, and new arrivals.
- **Wishlist & Cart Persistence:** Cart and wishlist persist locally via `localStorage` safely wrapped in `try/catch` blocks.
- **Responsive Layout:** Tested across desktop (1440px), laptop (1024px), tablet (768px), and mobile (375px) with zero horizontal overflow.
- **Standalone Live Preview:** A single-file HTML version (`inkara-luxury-pens.html`) with all inlined images and full functionality is also generated and verified via `check_web_app.py`.

---

&copy; 2026 INKARA Luxury Writing Instruments. All rights reserved.
