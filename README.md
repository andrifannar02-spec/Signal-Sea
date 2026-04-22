# Signal & Sea

Static browser prototype for a GOC radio-procedure revision game.

## What it does

- Drills the difference between `MAYDAY`, `PAN PAN`, and `SECURITE`
- Uses 10 levels with 10 mixed transmit/receive scenarios in each level
- Randomizes the answer order on each scenario
- Plays a level-end animation based on the score for that level
- Adds a signal-flags starter deck with a flag-to-letter quiz
- Shows a bird's-eye animated map with own ship, the other vessel, range, and hazard marker
- Includes a mobile-ready web app shell for iPhone and Android browsers

## How to use it

1. Open `index.html` in a browser.
2. Pick a level from the row above the scenario panel.
3. Choose the best action for each scenario in that 10-question level.
4. Read the feedback panel to compare your choice with the recommended protocol.

You can also answer with the number keys `1` to `5`.

## Mobile notes

- The layout is tuned for phone screens, touch targets, and safe-area insets.
- If you serve the folder over `https` or `localhost`, the game can register its service worker for a more app-like mobile experience.
- If you open `index.html` directly as a file, the game still works, but home-screen and offline behavior may be limited by the browser.

## Content note

This prototype is inspired by *GMDSS: A User's Handbook (6th edition)*, but it does **not** reproduce the book text. The scenarios were written from scratch as revision exercises and grounded in current official guidance on distress, urgency, and safety procedures.

Because GOC preparation is safety-critical, treat this as a study aid and cross-check the exact exam phraseology with:

- your instructor or approved course material
- current MCA / Coastguard procedure sheets
- the latest version of your handbook and training notes

## Main files

- `index.html` - app structure
- `styles.css` - layout, visual design, and animations
- `script.js` - scenario data, scoring, and interaction logic
