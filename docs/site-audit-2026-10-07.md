# Full-site audit — padanaramsouthdartmouth.com

Audited 7 October 2026 against the complete site source
(`MollyB1589/padanaram-village-hub`, commit `cb9f6e5`), which Lovable now syncs
to GitHub. This supersedes the page-level audit in `ux-audit-2026-10.md`; every
fix listed there was checked and is still present.

**Build health:** builds, typechecks and passes its tests (2/2). Lint reports
formatting noise and loose `any` types only — nothing that breaks the site.

**Security findings** were reported to the site owner privately and are
deliberately not recorded in this public repository.

## High — broken for real visitors

| # | Problem | Where | Fix |
| --- | --- | --- | --- |
| 1 | **Donation thank-you page never shows.** After paying, Stripe returns the donor to the donation form again — no confirmation, invites a second gift. The thank-you route is nested under `/donate`, which has no `<Outlet/>`. | `src/routes/donate.thank-you.tsx`, `donate.tsx` | Make the route non-nested (`donate_.thank-you.tsx`). |
| 2 | **Dues "Payment received" page never shows.** Same nesting bug. The payer lands back on the pay page, which (before the webhook lands) still says unpaid and opens a fresh checkout — invites double payment. | `src/routes/pay.$id.success.tsx`, `pay.$id.tsx` | `pay_.$id.success.tsx`. |
| 3 | **Logo upload on `/join` fails for everyone.** `/join` is public, but the upload demands a signed-in user, so anyone who picks a logo gets "You must be signed in" and can't submit. | `src/routes/join.tsx:118` | Upload to `submissions/` as `/submit` already does. |
| 4 | **Home-page video is 62.5 MB** and autoplays on every device, phones included. | `src/assets/hero-video.mp4`, `hero-video.tsx:12` | Re-encode to ≤3 MB (720p H.264/WebM); skip autoplay on small screens / Save-Data. |
| 5 | **robots.txt points Google at the wrong domain** (`padanaram-village-hub.lovable.app/sitemap.xml`). Google ignores cross-host sitemaps. | `public/robots.txt:5` | `https://padanaramsouthdartmouth.com/sitemap.xml` |

## Medium

**Dates and times**
- Event times submitted on `/calendar` are read in the *submitter's* browser time
  zone but shown in Eastern — a 5 PM event entered from a Pacific-time laptop
  shows as 8 PM. (`calendar.tsx:378–385`)
- Fee due dates display one day early (a SQL date parsed as UTC midnight).
  (`pay.$id.tsx:241`, `admin/fees-tab.tsx:117`)
- `/calendar` decides "today" in UTC on the server, so after 8 PM Eastern it
  highlights tomorrow, and on the last evening of a month renders the next month.

**Membership and listings**
- **There is no way to pay PBA dues from the site.** `JoinPbaDialog` (the
  membership + Stripe flow) is built but imported nowhere. "Join the PBA" goes to
  `/join`, which only creates a pending *directory listing*. Meanwhile posting to
  the calendar requires a paid membership or approved listing — so a new business
  is told "please join the PBA" and sent somewhere that can't make them a member.
- `/submit` is titled "Update your listing" but creates a *new* pending listing;
  approving it duplicates the business. Linked twice from `/account`.
- Payment webhook logs database errors but still tells Stripe "OK", so a failed
  write leaves a paid fee marked unpaid with no retry.

**Content inconsistencies**
- Best Harbor award: blog says **2025**; home, `/visit`, `/history` and the
  research say **2019, 2022 and 2026**. (`blog.tsx:61`)
- Boston: `/about` says "a half-day's drive"; `/visit` says "about an hour and a half".
- History strip says the village "launched 103 Concordia yawls from South Wharf";
  the sourced claim is that 103 were built, 1938–66. (`history-montage.tsx:79`)
- NBYC "since 1877" in `mock-data.ts:105` vs 1901 everywhere else (unused file,
  but it should go).
- `/events` and `/events/<slug>` still run on hard-coded mock data — the Summer
  Festival shows "Sat, July 25" with no year, already past, and its search-engine
  event data has a blank location. Either drive these from the calendar database
  or make them evergreen "traditions" pages without dates.
- Event detail pages say "All events" / "Back to events" but link to `/events`,
  which is now "Village traditions".
- Blog: three cards ("Buoy Tree draws crowds", "A New England village that still
  feels like one", "36 hours in Padanaram") have no link or body and read as
  placeholders; "The Bridge Gallery opens… this summer" is stale.
- The PBA's email address appears nowhere except the contact form's *error*
  message. No email or mailing address on Contact or in the footer.
- `/visit` and its meta description promise parking information it doesn't have
  (still open from the last audit).

**Search engines**
- Sitemap omits `/calendar` (the main events page). `llms.txt` links to
  `/membership` (404) and omits `/calendar` and `/history`.
- Every page shares one hard-coded X/Twitter title and description.
- Event pages set a relative `og:image` (needs the full `https://` URL).

**Accessibility (WCAG 2.2 AA)**
- `/about` has no `<h1>`.
- The history photo strip scrolls forever with no pause button (fails 2.2.2) and
  its duplicated photos are announced twice.
- Weak focus outlines: `.input` (25% ring), directory buttons (~1.4:1), donate
  inputs (outline removed).
- Donate and Join forms: labels not tied to inputs, errors not announced; the
  calendar's submit modal isn't a real dialog (no Escape, no focus trap).
- Contrast misses: hover colour `--harbor-deep` #6b72e6 (3.97:1 with cream
  text) → darken to ~#4f56c9; history-strip captions (3.4:1); calendar
  "Submitted by" (3.5:1) and out-of-month day numbers (2.6:1); Facebook button
  (4.2:1).
- White text directly on photos on the Buoy Tree hero and gallery labels.

**Performance**
- `padanaram-harbor-aerial.png` 1.9 MB (home + history background),
  `padanaram-map.png` 1.5 MB, several business logos 0.3–0.5 MB. Convert to
  WebP/AVIF at display size.
- Unused assets to delete: `logo-wordmark.png` (728 KB), `buoy-tree.jpg`,
  `logo-sailboat.png`, `hero-aerial.mp4`.

## Low

- Signing in on `/login` as a business owner redirects to `/admin` → "Not authorized".
- Admin approve/reject/delete fail silently on error.
- Phone numbers with extensions dial wrong (`telHref` strips to digits).
- Owners can never remove a logo once set.
- Multi-day events disappear from "Upcoming" the day after they start.
- Logo fallback calls `logo.clearbit.com`, which appears retired.
- Contact-form mail older than 60 minutes is dropped to the dead-letter queue —
  an outage silently loses messages visitors were told were sent.
- Desktop nav only appears at ≥1536 px; most laptops get the hamburger.
- Heading skips on `/events`, directory and 404; above-the-fold hero lazy-loaded
  on business pages; no image width/height (layout shift).
- Organization structured data lacks logo, Facebook, email, address.
- Footer copyright hard-coded "© 2026".
- Buoy Tree gallery shows empty tiles for 2020–2023 and 2026.

## Checked and fine

All internal links resolve; custom 404 works; every public page has a unique
title, description and canonical URL; private pages are noindex; admin actions
are all checked server-side; no secret keys in the repo; cents/dollars handled
consistently; already-paid fees can't be paid again from the pay page; the
history page matches the research file.
