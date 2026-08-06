# BOLT McGill Website

A React single-page website for **BOLT Bootcamps** — a student-run business tech bootcamp at McGill University.

---

## What Was Built

A complete single-page React app (`src/App.js` + `src/App.css`) with the following sections:

| Section | Description |
|---|---|
| **Navbar** | Fixed top nav with logo, anchor links, and an Apply CTA button |
| **Hero** | Full-screen landing with headline, tagline, and two CTAs |
| **About** | Founding story, 4 stats (year, bootcamps, students, sponsors) |
| **Skills** | 4 skill-area cards (Design Thinking, Development, UX/UI, Business Strategy) |
| **Mission** | 3 mission pillars (Accelerate, Integrate, Innovate) |
| **Events** | Past project cards + a "Coming Soon" teaser for the next bootcamp |
| **Sponsors** | Text badges for 9 current sponsors + a sponsorship CTA |
| **Team** | Founder cards (Nicole Shum, Thomas Villeneuve) with initials avatars |
| **Contact** | Social media links (LinkedIn, Facebook, Instagram) + Apply CTA |
| **Footer** | Brand name, quick links, copyright |

All content (skills, sponsors, team members, projects, social links) is stored in **plain arrays at the top of `src/App.js`** — edit those arrays to update the site without touching any markup.

---

## Running the Site Locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

---

## TODO — What You Still Need to Do

### High Priority (before going live)

- [ ] **Wire up the Apply button** — replace every `href="#contact"` on the Apply/CTA buttons with the real application form URL (Google Form, Typeform, etc.)
  - File: `src/App.js` — search for `href="#contact"` on `btn--primary` elements in `Navbar`, `Hero`, `Projects`, and `Contact`

- [ ] **Add real past bootcamp projects** — the Events section only has Fall 2018 right now
  - File: `src/App.js` → `PAST_PROJECTS` array (line ~63)
  - Add an object per bootcamp: `{ season, title, description, prompt }`

- [ ] **Update stats with real numbers** — bootcamp count and student count are placeholders (`3+`, `100+`)
  - File: `src/App.js` → `About` component (line ~250)

- [ ] **Verify social media handles** — confirm LinkedIn, Facebook, and Instagram URLs/handles are current
  - File: `src/App.js` → `SOCIAL_LINKS` array (line ~112)

- [ ] **Add current exec team members** — only founders are listed; add the current team
  - File: `src/App.js` → `TEAM_MEMBERS` array (line ~93)
  - Format: `{ name, role, initials, bio }`

### Medium Priority (improves the site)

- [ ] **Replace sponsor text badges with logos** — get logo image files from each sponsor, import them, and swap `SPONSORS` array from strings to `{ name, logo }` objects; update the badge `<div>` to an `<img>`
  - File: `src/App.js` → `SPONSORS` array + `Sponsors` component

- [ ] **Add team headshots** — add a `photo` field to each `TEAM_MEMBERS` entry and replace the initials `<div>` with an `<img>`
  - File: `src/App.js` → `TEAM_MEMBERS` array + `Team` component avatar div

- [ ] **Add LinkedIn links to team cards** — add `linkedin` URL to each team member and uncomment the link in the `Team` component
  - File: `src/App.js` → `TEAM_MEMBERS` array + `Team` component (line ~490)

- [ ] **Replace navbar logo text with SVG** — swap the `BOLT.` text in `Navbar` with an SVG lightning bolt logo
  - File: `src/App.js` → `Navbar` component, `navbar__logo` anchor

- [ ] **Add a contact form** — wire up a form (name, email, message) using Formspree or EmailJS
  - File: `src/App.js` → `Contact` component — uncomment the `{/* <ContactForm /> */}` placeholder and build the component

- [ ] **Sponsor tiers** — group sponsors into Platinum / Gold / Silver tiers
  - File: `src/App.js` → `SPONSORS` array (change to objects with a `tier` field) + `Sponsors` component

- [ ] **Add Twitter/X** — if BOLT has a Twitter/X account, add it to `SOCIAL_LINKS`
  - File: `src/App.js` → `SOCIAL_LINKS` array (line ~132)

### Nice to Have (polish)

- [ ] **Animated hero background** — particle field, lightning bolt paths, or a looping video from past bootcamps
  - File: `src/App.js` → `Hero` component

- [ ] **Scroll animations** — entrance animations (fade up) on sections using CSS keyframes or Framer Motion; animated stat counters in `About`
  - File: `src/App.js` → `Hero`, `About`, `Skills`, `Mission` components

- [ ] **Active nav highlighting** — highlight the current nav link based on scroll position using `IntersectionObserver`
  - File: `src/App.js` → `Navbar` component

- [ ] **Sticky navbar background** — change the navbar from transparent to a blurred dark background after scrolling past the hero
  - File: `src/App.js` → `Navbar` component

- [ ] **Mobile hamburger menu** — the nav links are hidden on mobile; build a drawer/modal triggered by a menu icon
  - File: `src/App.js` → `Navbar` component; `src/App.css` → `.navbar__links` responsive styles

- [ ] **Upcoming Events tab** — add a toggle to the Events section to switch between Past and Upcoming events
  - File: `src/App.js` → `Projects` component

- [ ] **Countdown timer** — add a countdown to the "Coming Soon" card in Events for the next bootcamp date
  - File: `src/App.js` → `Projects` component (line ~397)

- [ ] **Past events archive page** — build a `/past-events` route and link the "View All Projects" button
  - Requires adding React Router: `npm install react-router-dom`

- [ ] **Sponsorship package PDF** — add a downloadable link to the Sponsors section
  - File: `src/App.js` → `Sponsors` component

- [ ] **SVG icons for skill cards** — replace emoji in `SKILL_AREAS` with custom SVG imports
  - File: `src/App.js` → `SKILL_AREAS` array + `Skills` component

- [ ] **Footer newsletter signup** — add an email input + submission handler to the footer
  - File: `src/App.js` → `Footer` component

- [ ] **Privacy Policy / Terms pages** — add once those pages exist
  - File: `src/App.js` → `Footer` component (line ~588)

---

## Deploying the Website

This section covers everything from choosing a platform and buying a domain to going live. Read the whole section before starting — the steps build on each other.

---

### Step 1 — Choose a Platform (Vercel vs Netlify)

Both are free for this use case and both work identically well with Create React App. Here is how they differ:

| | Vercel | Netlify |
|---|---|---|
| Best for | React / Next.js projects | General static sites |
| Free tier | Unlimited personal projects | 100 GB bandwidth/month |
| Custom domain | Free (with SSL) | Free (with SSL) |
| Deploy preview URLs | Yes (every PR gets one) | Yes |
| Forms / serverless | Yes | Yes (Netlify Forms built-in) |
| Recommendation | **Use Vercel** — it was made by the React team and has the smoothest experience for this stack |

**Use Vercel.** The rest of these instructions use Vercel, but Netlify is almost identical — the differences are noted where they exist.

---

### Step 2 — Choose and Register a Domain Name

You need to buy the domain before connecting it. Domain registrars to consider:

| Registrar | Why use it | Approx. cost/year |
|---|---|---|
| **Namecheap** | Cheapest, clean UI, no dark patterns | $10–15/yr |
| **Porkbun** | Often cheapest for .com, good UX | $9–13/yr |
| **Google Domains** (now Squarespace) | Simple, but slightly more expensive | $12–20/yr |
| **GoDaddy** | Avoid — aggressive upsells and renewal price hikes | — |

**Recommended domain options** (check availability at namecheap.com or porkbun.com):

```
boltmcgill.com          ← cleanest, most professional
boltbootcamp.com
boltbootcamps.com
boltmcgill.ca           ← .ca if you want to signal Canadian identity
bolt-mcgill.com         ← avoid hyphens if possible; harder to say aloud
boltmcgill.io
```

**How to buy it (Namecheap example):**
1. Go to namecheap.com → search your preferred name
2. Add to cart — choose a `.com` if available, `.ca` as second choice
3. At checkout: **turn off auto-renew upsells** you don't need (WhoisGuard privacy is free and worth keeping ON)
4. Pay — you'll own the domain for 1 year, renewable annually
5. Log in to your Namecheap dashboard → "Domain List" → you'll configure DNS here in Step 5

---

### Step 3 — Push Your Code to GitHub

Vercel deploys directly from a GitHub repository. If the repo isn't on GitHub yet:

```bash
# From inside the bolt-website folder:
git init                          # already done if you see .git/
git add .
git commit -m "initial site"
```

Then on GitHub:
1. Go to github.com → "New repository"
2. Name it `bolt-website` (private or public, your choice)
3. Copy the remote URL it gives you, then run:

```bash
git remote add origin https://github.com/YOUR_ORG/bolt-website.git
git branch -M main
git push -u origin main
```

From now on, every `git push` to `main` will auto-deploy the site.

---

### Step 4 — Deploy on Vercel

1. Go to **vercel.com** and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import the `bolt-website` repository from the list
4. Vercel will auto-detect it as a Create React App project — **do not change any settings**
   - Framework Preset: `Create React App`
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `build` (auto-filled)
5. Click **"Deploy"**
6. Wait ~60 seconds — Vercel builds and deploys the site
7. You'll get a free URL like `bolt-website-abc123.vercel.app` — the site is live at this URL immediately

Every future `git push` to `main` will trigger a new deploy automatically. Pull requests also get their own preview URL so you can review changes before they go live.

> **Netlify alternative:** Go to app.netlify.com → "Add new site" → "Import an existing project" → connect GitHub → same settings. Your free URL will be `random-name.netlify.app`.

---

### Step 5 — Connect Your Custom Domain

#### On Vercel:

1. In your Vercel project dashboard, go to **Settings → Domains**
2. Type your domain (e.g. `boltmcgill.com`) and click **Add**
3. Vercel will show you DNS records to add. You'll need **two records**:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

#### On your domain registrar (Namecheap example):

1. Log in to Namecheap → Domain List → click **Manage** next to your domain
2. Go to the **Advanced DNS** tab
3. Delete any existing A records and CNAME records for `@` and `www`
4. Add the two records Vercel gave you:
   - Click **Add New Record** → Type: `A Record`, Host: `@`, Value: `76.76.21.21`, TTL: Automatic
   - Click **Add New Record** → Type: `CNAME Record`, Host: `www`, Value: `cname.vercel-dns.com`, TTL: Automatic
5. Save changes

#### Wait for DNS propagation:

DNS changes take **5 minutes to 48 hours** to propagate worldwide (usually under 30 minutes). You can check progress at:
```
https://dnschecker.org/#A/boltmcgill.com
```

Once propagated, go back to Vercel → Settings → Domains — it will show a green checkmark and automatically issue a **free SSL certificate** (https://). Your site will be live at `https://boltmcgill.com`.

> **Porkbun / Google Domains:** The DNS steps are the same — find the DNS management panel, add the A record and CNAME record. The UI labels differ but the record types and values are identical.

> **Netlify alternative:** Netlify gives you different DNS values — follow the same process but use the values Netlify shows you instead.

---

### Step 6 — Redirect www to non-www (or vice versa)

You want `www.boltmcgill.com` to redirect to `boltmcgill.com` (or the other way around) so both work. Vercel handles this automatically once you add both:

1. In Vercel → Settings → Domains, add **both** `boltmcgill.com` and `www.boltmcgill.com`
2. Vercel will ask which is the primary — choose `boltmcgill.com`
3. It will auto-redirect `www` → root for you, no extra config needed

---

### Step 7 — Verify Everything Works

Once DNS has propagated, check all of these:

- [ ] `https://boltmcgill.com` loads the site
- [ ] `https://www.boltmcgill.com` redirects to `https://boltmcgill.com`
- [ ] `http://boltmcgill.com` redirects to `https://` (Vercel does this automatically)
- [ ] The padlock icon appears in the browser (SSL is working)
- [ ] All anchor links (`#about`, `#skills`, etc.) scroll correctly
- [ ] The Apply button goes to the right URL (not `#contact`)
- [ ] Social links open in a new tab

---

### Ongoing Deployment Workflow

Once set up, updating the site is just:

```bash
# Make your changes to src/App.js or src/App.css
git add src/App.js
git commit -m "update team members"
git push
```

Vercel detects the push and deploys automatically — usually live within 60 seconds. You'll get an email confirmation when the deploy completes. No manual steps needed.

---

### Estimated Costs

| Item | Cost |
|---|---|
| Vercel hosting | Free (Hobby plan is enough) |
| Domain name (`.com`) | ~$10–15/year |
| SSL certificate | Free (Vercel provides it) |
| **Total** | **~$10–15/year** |

There are no hidden costs as long as the site stays within Vercel's free tier limits, which it will comfortably do for a student club site.

---

## Project Structure

```
bolt-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js        ← all components + content data arrays
│   ├── App.css       ← all styles
│   ├── index.js      ← React entry point
│   └── index.css     ← global resets / base styles
├── package.json
└── README.md
```

All content lives in the arrays at the top of `src/App.js`. All styles are in `src/App.css`.
