# De Prime Lounge — Digital Menu

A classy, dark & gold themed single-page website showcasing **De Prime Lounge's** drinks menu, with instant search.

## ✅ Currently Completed Features
- Responsive single-page site (desktop, tablet, mobile) with sticky header + mobile hamburger nav
- Hero section using the De Prime Lounge logo and a lounge-themed background photo
- **Live search bar** — type any drink name (e.g. "Hennessy", "Moët") to instantly filter all menu items across every category, with matching text highlighted and a "no results" message when nothing matches
- Menu organized into categories, each with a banner image and a card grid of items:
  - **Champagne**
  - **Whisky & Cognac** (Top Shelf / Premium Tier)
  - **Standard Tier**
- Prices displayed in Nigerian Naira (₦), formatted with thousands separators
- "Back to top" floating button, smooth scroll navigation, active-link highlighting on scroll
- Footer with logo, social icons (placeholders), and contact note
- Clean semantic HTML, Google Fonts (Cinzel for headings, Poppins for body), Font Awesome icons

## 🔗 Entry Points
- `index.html` — the entire site (single page, in-page anchors):
  - `#hero` — landing / search
  - `#champagne` — Champagne menu
  - `#whisky-cognac` — Whisky & Cognac menu
  - `#standard-tier` — Standard Tier menu
  - `#contact` — footer contact area

No backend / API routes — this is a fully static site; all menu data lives in `js/menu-data.js`.

## 📂 Project Structure
```
index.html          Main page markup
css/style.css        All styling (dark/gold luxury theme, responsive)
js/menu-data.js      ⭐ EDIT HERE to add/remove/update menu items & prices
js/main.js           Rendering, search, nav, scroll logic
images/logo.png      De Prime Lounge logo (user-provided)
images/hero-bg.jpg   Hero background photo
images/champagne.jpg Champagne section banner
images/whisky.jpg    Whisky & Cognac section banner
images/cocktail.jpg  (extra asset, available for future "Cocktails" section)
assets/menu.docx     Original uploaded menu document (reference)
```

## ⚠️ Important Note About the Menu Data
Your uploaded **Menu List.docx** file could not be fully parsed by the document tool — only the text visible directly in your chat message was captured, which covered:
- Full **Champagne** list
- Full **Whisky & Cognac (Top Shelf)** list
- **Standard Tier** list up to "Martell VS – ₦80,000"

If your original document has **more categories or items beyond that point** (e.g. more of Standard Tier, Cocktails, Beer, Wine, Food, etc.), please paste the remaining text here in chat and I will add it directly into `js/menu-data.js`.

## 🚧 Features Not Yet Implemented
- Remaining/undiscovered menu categories from the docx (pending the text above)
- Real social media / contact links (currently placeholder `#` links)
- Shopping cart / ordering functionality (not requested — this is a display menu only)
- Multi-language support

## 🔜 Recommended Next Steps
1. Send any remaining menu items/categories so the list is 100% complete
2. Replace placeholder social links in the footer with real Instagram/WhatsApp/phone links
3. Optionally add opening hours, address, and a reservation/WhatsApp-order button
4. When ready, publish via the **Publish tab** to get your live URL

## 💾 Data Storage
Fully static — no database or Table API used. All menu content is defined as plain JavaScript data in `js/menu-data.js`, making it easy to edit without touching HTML/CSS.

## 🌐 Public URLs
Not yet deployed. Use the **Publish tab** to generate a live shareable URL.
