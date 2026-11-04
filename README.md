# Máquina Team — Landing Page

A presentation website for Máquina Team, a fight club in Juiz de Fora, Brazil. Built with React, Vite, Tailwind CSS and Framer Motion, it combines gym photography, class information, membership-plan presentation and WhatsApp contact.

This is the standalone marketing site. It does not include checkout, a blog, member registration or the private gym-management application.

## Explore the page

Scroll from the video hero through the gym, training modalities, plans, timetable, testimonials and contact section. Compare plan periods, open the full pricing table and prepare a WhatsApp enquiry. Review the same page with a narrow viewport and reduced-motion settings.

Prices and testimonials are maintained as static content. They are not synchronized from billing or Google reviews.

## Run and build

Use Node.js 22 and npm.

```bash
git clone https://github.com/helberjf/MaquinaTeam-LandingPage.git
cd MaquinaTeam-LandingPage
npm ci
npm run dev
```

Open `http://localhost:5173`.

```bash
npm run build
npm run preview
```

The output is `dist`, suitable for static hosting. No automated test or lint script is currently configured; the build is a packaging check rather than proof of visual or interaction correctness.

## Maintain the content

- [src/data/content.js](src/data/content.js): texts, membership plans, schedule, contact details and testimonials. Update pricing here instead of duplicating a price table in the README.
- [src/App.jsx](src/App.jsx): section composition.
- [src/components/sections](src/components/sections): hero, plans, schedule, contact and other sections.
- [src/components/motion](src/components/motion): reveal effects and scroll progress.
- [src/lib/scrollToSection.js](src/lib/scrollToSection.js): section navigation.
- [public/images](public/images), [public/videos](public/videos): gym media.

The animation code includes reduced-motion branches. Manual review should cover keyboard navigation, menu focus, plan tabs, WhatsApp links and media behavior, rather than assuming every accessibility requirement is established by that support.

## Design tradeoffs

- **Static marketing scope:** deployment is small and does not require authentication or billing infrastructure, while enquiries and membership conversion continue outside the site.
- **Centralized content:** a single module keeps plan and contact updates consistent, but non-developer editing requires a content-management workflow that is not present here.
- **Video and scroll motion:** create a distinctive presentation, at the cost of media bandwidth and rendering work; reduced-motion behavior and a readable static layout matter.
- **Reusable React sections:** content and animation stay modular, while the JavaScript runtime is a larger dependency than a simple HTML-only landing page.
