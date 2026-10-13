# FamilyRoots Grounds & Landscaping

Responsive React + Vite website using **Tailwind CSS** and JavaScript.

## Run locally
1. Install Node.js LTS.
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints in the terminal.

To test the production build:
```bash
npm run build
npm run preview
```

## Business details to finish
Open `src/main.jsx` and edit the `BUSINESS` object near the top:
- `phoneDisplay`: the phone number customers should see.
- `phoneLink`: phone number for tap-to-call, with country code, e.g. `+2721...`.
- `whatsappNumber`: digits only with South African country code 27, e.g. `27721234567` (no plus sign or spaces).
- `email`: your real business email address.

The service area is set to **Rustenburg and surrounding areas**. Services are tailored for grass cutting, tree trimming, estate and office park maintenance, garden and grounds maintenance, industrial and mining sites, and government/municipal tender enquiries.

## Quote form
The form prepares a message using the visitor's default email application. It does not save submissions in a database. Before publishing, consider connecting a secure form backend or form service so every enquiry is received even if the visitor has not configured an email app.

## Images and name
The hero and about photos currently load from Unsplash and require an internet connection. Replace them with licensed business photos as you build a portfolio.

FamilyRoots Grounds & Landscaping is a suggested working name, not a verified registered business name or trademark. Check CIPC availability and relevant domain availability before registering.


## Company profile PDF and tender-readiness section
A draft company profile is included at `public/FamilyRoots-Company-Profile-DRAFT.pdf` and linked from the website. It includes services, target clients, working approach, a tender-readiness checklist, and blank business details to complete. Do not distribute it until you replace all bracketed placeholders and verify the business information.

The website's Tender Readiness section is a checklist only. It does not claim that FamilyRoots already holds CIPC registration, tax compliance, CSD registration, B-BBEE documentation, insurance or safety certificates.
