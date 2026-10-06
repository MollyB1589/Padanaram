# UI/UX audit — padanaramsouthdartmouth.com

Audited 6 October 2026 against the live Lovable project
(`6023fe58-7e41-4643-9c81-fb56b6d2080e`). Fixes shipped as commits `7cbc0a9`,
`7897468` and `1050e75`.

## Fixed

### Broken functionality
| Finding | Fix |
| --- | --- |
| Contact form had no handler — `setSent(true)` only. Every inquiry was silently discarded. | New `src/lib/contact.functions.ts` server fn: zod-validated, enqueued to the existing `transactional_emails` queue, addressed to padanarambusinessassociation@gmail.com with `reply_to` set to the sender. Success state now only shows on a confirmed send; failure shows the direct address. Honeypot added. |
| `<textarea>` had no `name`, so the message body wouldn't serialize. | `name="message"` added. |
| "Plan your visit" (the primary CTA) linked to `/directory`. | Both desktop and mobile now link to `/visit`. |
| `/visit` was a stub — one heading, one sentence — while sitting in the nav. | Full page: getting here, the bridge schedule, on the water, in the village, while you're here, map. |
| "Editor's note: replace with the real origin story when ready." was live on `/buoy-tree`. | Replaced with the researched 2020 origin story. |
| `/buoy-tree` set `og:image` to `og-buoy-tree.jpg`, which doesn't exist in `public/`. | Override removed; inherits the working site-wide card. |

### Accessibility
| Finding | Fix |
| --- | --- |
| `--accent` (#8E94FF) on cream measures **2.6:1** — fails WCAG AA (needs 4.5:1) — and was used for `.eyebrow` and every `text-accent` label. | Added `--accent-ink: #5A61D6` (~5:1). `.eyebrow` and all light-background accent text now use it. Backgrounds, borders and rings keep the original accent (navy on periwinkle is ~6:1). Verified no instance landed on a dark background. |
| Home page had no `<h1>` — the hero was an `<h2>`. | Promoted, styling unchanged. |
| The three home tiles were links with no accessible name (empty `alt`, heading outside the link). | `aria-label` on each; dead empty `<div>` removed. |
| Contact form labels had no `htmlFor`/`id`. | All associated. |
| Home hero put white text over video with no scrim. | Gradient scrim added. |
| `scroll-behavior: smooth` was global and unguarded. | Wrapped in `prefers-reduced-motion: no-preference`. |
| `background-attachment: fixed` is ignored/janky on iOS. | New `parallax-band` utility falls back to `scroll` on touch and reduced-motion. |

### Information architecture & content
| Finding | Fix |
| --- | --- |
| "Events" meant two different pages — header → `/calendar`, footer and home → `/events`. | `/calendar` is canonical. `/events` relabelled "Village traditions" (which is what it holds) and links to the calendar. |
| `/buoy-tree` was in the sitemap but reachable from no menu. | Added to the About dropdown and the footer. |
| Board of Directors rendered three empty grey circles. | Replaced with a clean text treatment. |
| "It takes a village!" was one ~90-word paragraph with a single CTA. | Split in two; "Join the PBA" added alongside Donate. |

## Not changed, deliberately

**Admin Login in the public footer.** Flagged in the audit as advertising the
admin surface. Left in place: it's only a login page, and removing it could
strand board members who reach the admin that way. Say the word and it goes.

**Two header CTAs.** "Plan your visit" and "Events Calendar" still sit beside a
seven-item nav. Now that both point somewhere correct the redundancy is mild,
and removing a CTA the PBA chose seemed the wrong call to make unilaterally.

## Open — needs a person

1. **Verify the email sending domain.** The contact form now enqueues properly,
   but mail won't leave until `notify.padanaramsouthdartmouth.com` is verified
   (Lovable → Cloud → Emails). This matters more than it sounds: queued
   transactional mail has a **60-minute TTL** (`DEFAULT_TRANSACTIONAL_TTL_MINUTES`
   in `src/routes/lovable/email/queue/process.ts`) and then moves to the
   dead-letter queue. Until the domain is verified, inquiries still won't
   arrive — they'll just leave a trail in `email_send_log` instead of vanishing.
   **Verify the domain, then send yourself a test from the contact page.**
2. **Parking specifics for `/visit`.** Deliberately not written, because I
   couldn't source it and wouldn't invent it. Where should visitors actually
   park, and are there seasonal restrictions?
3. **Bridge status.** The page carries the published seasonal schedule plus a
   link to the Town's alerts. As of this audit the last public word was that the
   bridge closed 7 August 2026 for mechanical repair "for an extended period,"
   with no reopening notice found. Worth confirming before relying on the
   schedule copy.
4. **The home page's "Upcoming events" is hardcoded.** It renders `EVENTS` from
   `src/lib/mock-data.ts`, not the live `calendar_events` table that `/calendar`
   reads. The home page can therefore advertise events that aren't real or miss
   ones that are. Found while fixing the Events IA; fixing it means wiring the
   section to `listApprovedEvents` with a sensible empty state.
5. **The Buoy Tree 2026 tile** is an empty box until this winter's photo is added.
