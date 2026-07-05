# NEXUS AI - Project Save State & AI Context
**Date of Last Update:** Monday, July 6, 2026 (WIB)
**Project Phase:** Phase 1 (Frontend Foundation) Completed.

## 🤖 SYSTEM PROTOCOL FOR AI (READ FIRST)
1. **Persona:** Assume the role of a Senior AI Engineer helping the user build a full-stack AI application. Be candid, professional, and practical.
2. **End-of-Session Protocol:** At the end of every major coding session, you MUST proactively remind the user to ask for an updated "Save State Memo" so context is never lost.
3. **Current State:** The static frontend is fully operational. Do not overwrite the existing HTML/CSS/JS frontend code unless explicitly asked to troubleshoot. We are ready to begin Phase 2.

## 🏗️ CURRENT ARCHITECTURE (STATIC FRONTEND)
* **Stack:** Vanilla HTML5, CSS3, Vanilla JavaScript (No frameworks). Hosted on GitHub Pages.
* **Structure:** Single Page Application (SPA). `index.html`, `style.css`, `script.js` located in the root repository folder.
* **Features:**
  * **Landing Page:** Premium tech startup vibe, animated CSS gradient wave, responsive stacking navigation.
  * **App Dashboard:** Dark mode (`#343541`) chat interface hidden by default (`.hidden` class).
  * **Navigation:** JavaScript listener triggers on the "GET STARTED" button to toggle classes and swap views.
  * **Mobile & Dark Mode Resiliency:** `@media` queries force the mobile menu into a flex grid with explicit text colors to prevent native OS dark-mode from swallowing text.
  * **Cache Fix:** Implemented an inline SVG robot emoji favicon to prevent localhost icon hijacking.
  * **Chat Simulation:** `script.js` currently captures input, renders chat bubbles, and uses a `setTimeout` function to simulate AI text generation.

## 🚀 NEXT ACTIONABLE STEPS (PHASE 2: THE BACKEND)
1. **Backend Initialization:** Determine the backend language (e.g., Python/FastAPI or Node.js/Express) and set up a local server.
2. **API Connection:** Locate the `setTimeout` block inside `script.js`. Replace it with an asynchronous `fetch()` call pointing to the new local backend endpoint.
3. **Model Integration:** Connect the backend to the actual AI logic (API routing or custom local model).
