# Padanaram

Research and site content for **Padanaram Village**, South Dartmouth, Massachusetts —
supporting the Padanaram Business Association website
([padanaramsouthdartmouth.com](https://padanaramsouthdartmouth.com), built in Lovable).

## Contents

| Path | What it is |
| --- | --- |
| `research/padanaram-village-history.md` | Sourced history of the village, with citations and open questions |
| `padanaram-village-site/src/routes/history.tsx` | The `/history` page as shipped to the Lovable project |

## The history page

`research/padanaram-village-history.md` is the fact-checked source material; the page
component renders it. Every date and name on the page traces to a source listed at the
bottom of the research file. Where accounts disagree (e.g. the New Bedford Yacht Club's
Padanaram station, 1901 vs. 1906), the research file notes the disagreement rather than
picking silently.

Shipped to Lovable project `6023fe58-7e41-4643-9c81-fb56b6d2080e` as commit `10c4f21`
("Added detailed history page"), which also linked the page from the home-page history
montage, the About page, the header nav, the footer, and the sitemap.
