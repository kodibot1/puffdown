# PuffDown

A vaping cessation PWA (Progressive Web App) that helps users quit vaping through puff tracking, gradual reduction plans, and personalized progress insights.

## What It Does

- **Puff counter** — tap to log each puff throughout the day
- **Gradual reduction** — auto-adjusting daily targets that decrease over a 45-day plan
- **Savings tracker** — calculates money saved based on puffs avoided
- **Health timeline** — shows real-time health recovery milestones (heart rate, lung function, etc.)
- **22-screen onboarding** — personalized flow that collects goals, triggers, vape type, spend habits, and builds a custom quit plan
- **Quick Log widget** — standalone vape-shaped tap widget (`widget.html`) for fast logging
- **Notifications** — periodic reminders via service worker to keep users on track
- **Education tab** — science-backed facts about vaping health effects

## Tech Stack

- **React 18** (loaded via CDN/unpkg, not bundled)
- **Babel standalone** (in-browser JSX transpilation)
- **Single-file app** — all UI in `index.html` (inline CSS + JSX)
- **Service Worker** (`sw.js`) — offline support, notification handling, cache management
- **localStorage** — all user data persisted client-side
- **PWA** — installable via `manifest.json`, works on home screen
- **No build step** — open `index.html` directly or serve with any static server
- **sharp** (dev only) — icon generation via `generate-icons.js`

## Project Files

| File | Purpose |
|------|---------|
| `index.html` | Main app — onboarding, dashboard, timeline, learn tabs |
| `quicklog.html` | One-tap puff logger — auto-logs on open, add to home screen as widget |
| `widget.html` | Interactive vape pen tap-to-log page |
| `sw.js` | Service worker — caching, notifications, puff logging from notification tap |
| `manifest.json` | PWA manifest — app name, icons, shortcuts |
| `generate-icons.js` | Dev script to generate icon sizes from source |
| `generate-vape-icon.js` | Dev script to generate vape-themed icons |

## Adding to Your Phone

1. Open your PuffDown site in your phone's browser
2. **Install the main app**:
   - **iOS**: Tap Share (box with arrow) → "Add to Home Screen"
   - **Android**: Tap the three-dot menu → "Add to Home Screen" or "Install App"
3. **Add the Quick Log widget** (one-tap puff logging, no app opening):
   - Navigate to `quicklog.html` (e.g. `yoursite.com/quicklog.html`)
   - **iOS**: Tap Share → "Add to Home Screen" → name it "Puff" or whatever you want
   - **Android**: Tap menu → "Add to Home Screen"
   - Now tapping that icon instantly logs a puff — no second tap needed

## Do Not Change

These decisions are intentional and must be preserved:

1. **Vape icons, not cigarettes** — PuffDown is a vaping cessation app. All icons, emojis, and imagery use vape references (vape pen SVG, cloud animations). Never swap to cigarette imagery.

2. **Spend tracking supports multiple periods** — The spend screen (Screen 6) has a toggle for Weekly / Every 2 Weeks / Monthly. The "every 2 weeks" option exists because disposable vapes typically last ~2 weeks before needing replacement. All three options must remain.

3. **Vape replacement cycle is every 2 weeks** — This is the default spend period (`spendPeriod: 'every2weeks'`). The pricing and savings calculations are built around this assumption.

4. **`spendRaw` and `weeklySpend` are separate fields** — `spendRaw` stores the amount in the user's chosen period. `weeklySpend` is the normalized weekly value used for savings calculations. Both must be maintained.

5. **All screens are closure-based inside `App()`** — Screen components are defined inside the `App` function and access state (`data`, `setData`, `update`, `next`, `displayName`) via closure. Do not extract them to top-level components without providing these values through context or props.

6. **Dark theme color scheme** — Background `#0D1117`, card `#161B22`, primary teal `#2DD4BF`. Matches the existing design system throughout.

7. **Widget uses vanilla JS** — `widget.html` is intentionally plain JavaScript (no React) for fast load times as a PWA shortcut.
