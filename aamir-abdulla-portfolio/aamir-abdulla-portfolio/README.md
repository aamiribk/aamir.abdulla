# Aamir Abdulla | Investment Operations Portfolio

Single-page portfolio for an investment operations manager (trade lifecycle, settlements, reconciliations, controls, automation). Content comes only from the candidate's resume and LinkedIn profile.

Suggested repository name: `aamir-abdulla-portfolio`

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables. System fonts only, dark mode follows the OS setting.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Production check: `npm run build && npm start`.

## Customize
Edit `data/content.js`: profile, lifecycle strip, headline figures, selected work, experience, skills, education and certifications. Colors and fonts are in `tailwind.config.js`; layout is in `app/page.jsx` and `components/`.

## Structure
```
app/            layout.jsx, page.jsx, globals.css
components/     Nav.jsx, Section.jsx
data/           content.js
```

## Deploy
Push to GitHub and import into Vercel (no configuration needed).
