# FamilyRoots Grounds & Landscaping website

React + Vite + JavaScript + Tailwind CSS. This project is organised into separate page and shared component files.

## Pages
- `src/pages/Home.jsx` — home page
- `src/pages/Services.jsx` — services
- `src/pages/About.jsx` — about the business
- `src/pages/Tenders.jsx` — tenders and tender-readiness checklist
- `src/pages/Contact.jsx` — contact details and quote form

## Shared code
- `src/components/Navbar.jsx` — navigation
- `src/components/Footer.jsx` — footer
- `src/components/Layout.jsx` — shared page layout
- `src/components/SectionTitle.jsx` — reusable page heading
- `src/data.js` — business contact details and service list

## Run locally
1. Install Node.js.
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.
4. Before publishing, confirm all contact details in `src/data.js`.

The quote form opens the visitor's email application; it does not store submissions. The company profile in `public/` is a draft and contains placeholders that must be completed before use in a tender.

## Build and deploy
Run `npm run build`. Deploy the generated `dist` folder to the separate Firebase project for FamilyRoots. Configure Firebase Hosting rewrites for SPA routing if direct visits to nested routes do not resolve.
