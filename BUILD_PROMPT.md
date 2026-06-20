# CrescenFlow Landing Page — Build Prompt

## Task
Build a production-ready, single-page marketing landing page for **CrescenFlow** — a done-for-you LinkedIn outbound service. The copy is in `crescenflow-landing-page-copy.md` (same directory). Build the full page from that copy exactly as written. Do not invent or modify any copy.

---

## Project Setup

Scaffold the project inside the current directory (`/Users/sanjay/Documents/CrescenflowWebsite/`) using **Vite + React**:

```bash
npm create vite@latest . -- --template react
npm install
npm install tailwindcss @tailwindcss/vite
npm install framer-motion
npm install lucide-react
```

Configure Tailwind via the Vite plugin (`@tailwindcss/vite`). Import Tailwind in `src/index.css`. Use `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')` and set `font-family: 'Inter', sans-serif` as the base font.

Set `html { scroll-behavior: smooth; }` in `index.css`.

---

## Brand Tokens

Define these as Tailwind CSS custom colors in `tailwind.config.js` under `theme.extend.colors`:

```js
colors: {
  primary:   "#24352A",   // Deep Green — main brand color, nav, dark backgrounds
  secondary: "#2F4538",   // Slightly Lighter Green — secondary surfaces
  accent:    "#477C5E",   // Action Green — buttons, highlights, hover states
  cream:     "#EEE7DF",   // Cream — accent text, tags, small labels
  light_bg:  "#F9F7F5",   // Off-white — page background
  light_card:"#FFFFFF",   // White — card surfaces
}
```

Also define CSS variables in `:root` in `index.css` that mirror these hex values for any inline usage.

---

## Design System

### Typography
- Font: Inter
- Base body: `text-base` (16px), `font-normal`, `leading-relaxed`, color `#24352A` (primary)
- Headings:
  - H1 (hero): `text-4xl md:text-5xl lg:text-6xl`, `font-semibold`, `leading-tight`
  - H2 (section): `text-3xl md:text-4xl`, `font-semibold`
  - H3 (step/card titles): `text-xl`, `font-semibold`
- Subtext / labels: `text-sm`, `font-medium`, `tracking-widest`, `uppercase`

### Spacing
- Page horizontal padding: `px-6 md:px-12 lg:px-24`
- Section vertical padding: `py-24 md:py-32`
- Max content width: `max-w-5xl mx-auto`
- Between heading and body: `mt-6`
- Between sections: use generous whitespace — never feel cramped

### Colors (usage rules)
- Page background: `light_bg` (`#F9F7F5`)
- Cards: `light_card` (`#FFFFFF`) with `shadow-sm` and `rounded-2xl`
- Nav background: `primary` (`#24352A`) — dark, pinned to top
- Nav text: `cream` (`#EEE7DF`)
- Primary CTA button: `bg-accent text-white`, hover `bg-primary`, `rounded-full`, `px-7 py-3.5`, `font-medium`, `text-sm`
- Secondary / ghost CTA: `border border-primary text-primary`, hover `bg-primary text-white`
- Section label chips (e.g. "How It Works"): `bg-cream text-primary text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full`
- Accent dividers: thin `1px` lines in `#EEE7DF`

### Animations (Framer Motion)
Use `whileInView` with `viewport={{ once: true, margin: "-80px" }}` on all section content:
- Fade up: `initial={{ opacity: 0, y: 28 }}` → `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.55, ease: "easeOut" }}`
- Stagger children (steps, FAQ items): wrap in `motion.div` container with `variants` that stagger by `0.1s`
- Hero elements: fade in sequentially (headline → subheadline → qualifier → CTA) with 0.15s delay between each

---

## Page Architecture

### File structure:
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Problem.jsx
    Mechanism.jsx
    HowItWorks.jsx
    Offer.jsx
    Pricing.jsx
    FAQ.jsx
    FinalCTA.jsx
    Footer.jsx
  App.jsx
  index.css
  main.jsx
```

`App.jsx` imports and renders all components in order: Navbar → Hero → Problem → Mechanism → HowItWorks → Offer → Pricing → FAQ → FinalCTA → Footer.

---

## Component Specs

### Navbar
- Fixed top, full width, `bg-primary`, `py-4`, `px-6 md:px-12 lg:px-24`
- Left: Logo — "CrescenFlow" in `text-cream font-semibold text-lg`
- Right: CTA button — "Get Free Prospects" → links to `#cta` section, styled as primary CTA button but smaller (`text-sm px-5 py-2.5`)
- On scroll past hero: add subtle `shadow-lg` to navbar (use scroll event listener + state)
- No hamburger menu needed — just logo + one CTA

---

### Hero
- Full viewport height (`min-h-screen`), centered content, `bg-light_bg`
- Top padding accounts for fixed navbar (`pt-32`)
- Layout: single centered column, `text-center`, `max-w-3xl mx-auto`
- Small label chip above headline: "Done-For-You LinkedIn Outbound"
- **Headline:** "We Book You 5–10 Qualified Sales Calls Per Month on LinkedIn — Pay Only When a Call Is Booked"
  - Break "Pay Only When a Call Is Booked" onto its own line, colored `accent` (`#477C5E`)
- **Sub-headline:** "Done-for-you outbound. We research your buyers, write every message, and send it. You just show up to calls."
  - `text-lg md:text-xl text-primary/70 mt-5 max-w-2xl mx-auto`
- **Qualifier line:** "For B2B founders and sales leaders with a proven offer who are tired of chasing referrals."
  - `text-sm text-primary/50 mt-3`
- **CTA button:** "Get Your Free 10 Prospects →" — primary button style, `mt-10`
- **Micro-copy below CTA:** "No commitment. We send you 10 hyper-targeted leads with personalized messages written for you — free — before you decide anything."
  - `text-xs text-primary/50 mt-4 max-w-sm mx-auto`
- Below the CTA block, add a subtle row of 3 stat pills in `cream` chips:
  - "20–35% connection acceptance"
  - "15–30% reply rate"
  - "Pay per qualified call"
  - Displayed as `flex gap-3 flex-wrap justify-center mt-10`

---

### Problem Section
- `bg-light_bg`, `py-24`
- Left-aligned (not centered), `max-w-2xl`, offset slightly left within the 5xl max container
- Small label chip: "The Problem"
- **Headline:** "Referrals are great. Until they stop."
- **Body paragraphs** (render each as a separate `<p>` with `mt-5` gap):
  1. "You've got a real offer. Clients get results. Word of mouth has kept you going."
  2. "But your next 3 months of revenue are completely unpredictable. You don't control the pipeline — the pipeline controls you."
  3. "You've thought about LinkedIn outreach. Maybe you've even tried it."
  4. "Sent a few connection requests. Copy-pasted a template. Got ignored or hit with an immediate "not interested.""
  5. *Italic:* "And you concluded: LinkedIn doesn't work for my market." — render in `italic text-primary/60`
  6. "It doesn't work the way most people do it. Here's the difference." — `font-medium`

---

### Mechanism Section
- `bg-primary` (dark green), `py-24` — this is the only dark section
- All text: `text-cream`
- Small label chip: `bg-cream/10 text-cream border border-cream/20` — "The Difference"
- **Headline:** "Generic outreach gets ignored. Ours doesn't." — `text-cream`
- **Body** split into two columns on desktop (`md:grid md:grid-cols-2 gap-12 mt-10`):
  - Left column: first 3 paragraphs
  - Right column: last 3 paragraphs
  - On mobile: single column
- Paragraphs (each `<p>` with `mt-4 text-cream/80 leading-relaxed`):
  1. "Most LinkedIn outreach fails for one reason: it's obviously templated."
  2. "Your prospect can tell in 3 seconds that you didn't read anything about them. So they ignore it."
  3. "We do something different."
  4. "Before we write a single message, we research each prospect — their recent podcast interviews, press coverage, LinkedIn content, company announcements. We find the specific thing they said or did in the last 6 months that connects to why they'd need what you sell."
  5. *Italic:* "Then we write a message so specific that when they read it, they think: this person actually paid attention." — render in italic, `text-cream font-medium`
  6. "That's why our messages get replies. Not tricks. Not a better template. Just genuine relevance at scale."

---

### How It Works
- `bg-light_bg`, `py-24`
- Small label chip: "How It Works"
- **Section headline:** "Four steps. You're barely involved." — centered, `text-center`
- **Layout:** 4 cards in a 2×2 grid (`md:grid-cols-2 gap-6 mt-14`). Each card is `bg-light_card rounded-2xl p-8 shadow-sm`
- Each card contains:
  - Step number: `text-xs font-semibold tracking-widest text-accent uppercase` — "Step 01", "Step 02", etc.
  - Title: `text-xl font-semibold text-primary mt-2`
  - Body: `text-primary/65 leading-relaxed mt-3 text-sm`
  - A thin `1px` top border in `accent` color: `border-t-2 border-accent` at card top-left only (use `pt-6 border-t-2 border-accent w-8` as a short decorative line above the step number)

**Card 1 — Step 01:**
- Title: "We Build Your List"
- Body: "We identify your exact ICP using Sales Navigator filters you approve. We research and verify each prospect — active, qualified, and reachable — before we write a single word."

**Card 2 — Step 02:**
- Title: "We Write Your Cold Traffic Offer"
- Body: "We craft every outreach message around a real, recent signal from each prospect — something they said, published, or announced. Then we build the full cold traffic sequence: connection note, DM, follow-up cadence. Not templates. A system designed to convert cold strangers into conversations."

**Card 3 — Step 03:**
- Title: "We Manage & Handle Everything"
- Body: "We send the messages, track replies, handle objections, and manage the follow-up sequence. Inbox management, reply routing, and re-engagement — all handled. You don't touch the outreach side."

**Card 4 — Step 04:**
- Title: "You Show Up to Calls"
- Body: "When someone is ready to talk, we hand them off to you. You focus on closing — not prospecting."

---

### Offer / Risk Reversal Section
- `bg-cream` (`#EEE7DF`), `py-24`
- Centered, `max-w-2xl mx-auto text-center`
- Small label chip: `bg-primary text-cream` — "Zero Risk"
- **Headline:** "Start with the free sample. See the quality before you spend a dollar."
- **Body paragraphs** (`text-primary/75 mt-5`):
  1. "Before you pay anything, we send you 10 hyper-targeted prospects from your exact ICP — with fully written, personalized outreach messages ready to send."
  2. "No templates. No placeholders. Messages written around real, recent signals from each prospect's public record."
  3. *Italic:* "If you look at that list and think this isn't worth paying for — walk away. No hard sell. No follow-up sequence."
  4. `font-medium text-primary`: "Most people see the list and immediately understand what they're getting."
- **CTA button:** "Claim Your Free 10 Prospects →" — `mt-10`, primary button style

---

### Pricing Section
- `bg-light_bg`, `py-24`
- Small label chip: "Pricing"
- **Headline:** "Simple pricing. You pay for tools — we earn on calls booked." — centered
- **Layout:** 2 cards side-by-side on desktop (`md:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto`), stacked on mobile
- Both cards: `bg-light_card rounded-2xl p-10 shadow-sm`

**Card 1 — Tech & Management Fee:**
- Small tag at top: `bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide` — "Monthly"
- Title: `text-xl font-semibold text-primary mt-4` — "Tech & Management Fee"
- Body: `text-primary/65 text-sm leading-relaxed mt-3` — "Covers the outreach tools and platform costs that run your system — list building, research, message sending, and follow-up automation. You pay for the infrastructure. We handle everything on top of it."
- Bottom note: `text-xs text-primary/40 mt-6 border-t border-primary/10 pt-4` — "Flat monthly fee. Covers all tooling and system management."

**Card 2 — Per Qualified Call (featured card):**
- Add `ring-2 ring-accent` to make this card stand out
- Small tag: `bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide` — "Performance"
- Title: `text-xl font-semibold text-primary mt-4` — "Per Qualified Call Booked"
- Body: `text-primary/65 text-sm leading-relaxed mt-3` — "You only pay when we book a qualified call that meets your ICP criteria — not just anyone who shows up. You define what 'qualified' means. We only charge when we deliver it."
- Bottom note: `text-xs text-primary/40 mt-6 border-t border-primary/10 pt-4` — "Zero calls booked = zero call charges. Aligned incentives."

- Below both cards, centered: **CTA button** "Get Your Free 10 Prospects →" — `mt-10`

---

### FAQ Section
- `bg-light_bg`, `py-24`
- Small label chip: "FAQ"
- **Headline:** "Common questions." — left-aligned within `max-w-2xl`
- **Layout:** accordion-style — each Q/A pair is a collapsible item. Use local React state (`useState`) to track which item is open. Only one open at a time.
- Each item:
  - Container: `border-b border-primary/10 py-5`
  - Question row: `flex justify-between items-center cursor-pointer` — question text `font-medium text-primary`, toggle icon using lucide-react `ChevronDown` / `ChevronUp` in `text-accent`
  - Answer: animated collapse using Framer Motion `AnimatePresence` + `motion.div` with `initial={{ height: 0, opacity: 0 }}` → `animate={{ height: "auto", opacity: 1 }}`
  - Answer text: `text-primary/65 text-sm leading-relaxed pt-3`

**Q&A pairs (exact copy):**
1. Q: "I've tried LinkedIn outreach before and got no responses." — A: "Most LinkedIn outreach fails because it's templated and obvious. Ours isn't. Every message is researched and written around something real and recent about that specific person. The difference in reply rates isn't incremental — it's categorical."
2. Q: "How do I know the quality will match my ICP?" — A: "That's exactly why we start with the free sample. Before you pay, you see the actual list and actual messages we'd send on your behalf. You approve the ICP criteria. You see the quality. Then you decide."
3. Q: "Do I have to do anything after I sign on?" — A: "Initial onboarding is about 30 minutes — we capture your ICP, your offer, and your tone. After that, we run it. You review calls, not tasks."
4. Q: "What if I don't get any calls in a month?" — A: "You only pay per qualified call booked. If we book zero, you pay the tech & management fee only. We're motivated to book calls — that's where we make money."
5. Q: "Who is this for?" — A: "B2B service businesses with a proven offer and deal sizes above $2K. Consultants, agencies, SaaS companies, professional services. If you rely on referrals and want a predictable second channel, this is built for you."
6. Q: "How fast does it start working?" — A: "First list goes out within 5–7 days of onboarding. Calls typically start appearing in week 2–3. Full cadence (with follow-ups) hits by week 4."

---

### Final CTA Section
- `bg-primary` (dark green), `py-24`
- Centered, `max-w-xl mx-auto text-center`
- **Headline:** "Your next 10 qualified prospects are already out there." — `text-cream text-3xl md:text-4xl font-semibold`
- **Body** (3 short lines, each as its own `<p>` with `mt-3 text-cream/70 text-base`):
  1. "We'll find them, research them, and write the messages — free."
  2. "No pitch call required. No commitment. Just the work, upfront."
  3. "If you like what you see, we talk about making it ongoing."
- **CTA button:** "Send Me the Free 10 Prospects →" — `mt-10`, `bg-cream text-primary hover:bg-white`, `rounded-full px-8 py-4 font-medium`
- **Micro-copy:** "Respond with your ICP and we'll have your list ready within 48 hours." — `text-cream/40 text-xs mt-4`

---

### Footer
- `bg-primary`, `border-t border-cream/10`, `py-8`
- `flex justify-between items-center px-6 md:px-12 lg:px-24`
- Left: "CrescenFlow" `text-cream/60 text-sm font-medium`
- Right: `text-cream/40 text-xs` — "© 2026 CrescenFlow. All rights reserved."

---

## Scroll + Anchor Behavior

- Every primary CTA button on the page links to `#final-cta` (the Final CTA section)
- Give the Final CTA section `id="final-cta"`
- Smooth scroll is handled globally via CSS `scroll-behavior: smooth`
- Navbar height is `64px` — offset anchors with `scroll-margin-top: 80px` on `#final-cta`

---

## Responsive Requirements

- Mobile-first. All grids collapse to single column below `md` (768px)
- Navbar: on mobile, hide nav links if any; always show CTA button
- Hero headline: reduce to `text-3xl` on mobile
- Section padding: `py-16` on mobile, `py-24` on desktop
- Cards: full width on mobile, grid on desktop
- All text line lengths capped at readable widths — use `max-w-prose` or `max-w-2xl` on body text

---

## Quality Checks Before Finishing

1. Run `npm run dev` and verify the page renders without errors
2. Check that all 8 sections render in order: Hero → Problem → Mechanism → HowItWorks → Offer → Pricing → FAQ → FinalCTA → Footer
3. Verify every CTA button links to `#final-cta` and smooth-scrolls correctly
4. Verify FAQ accordion opens/closes with animation
5. Verify scroll-triggered fade-in animations fire on each section
6. Verify dark nav on scroll activates after hero
7. Check mobile layout at 375px width — no horizontal overflow
8. Verify all copy matches `crescenflow-landing-page-copy.md` exactly — no placeholder text left in

---

## Do Not

- Do not add any backend, form handling, or API calls — all CTAs are anchor links for now
- Do not invent copy not in the copy file
- Do not add a hamburger/mobile nav menu — just logo + CTA in the navbar
- Do not use any CSS framework other than Tailwind
- Do not add any analytics scripts
- Do not create any test files
