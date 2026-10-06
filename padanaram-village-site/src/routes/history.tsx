import { createFileRoute, Link } from "@tanstack/react-router";
import bridgePhoto from "@/assets/padanaram-bridge.jpg.asset.json";
import harborAerial from "@/assets/padanaram-harbor-aerial.png.asset.json";
import historyElmStreet from "@/assets/history-elm-street.jpg";
import historyBridge from "@/assets/history-bridge.jpg";
import historyYachtClub from "@/assets/history-yacht-club.jpg";

const DESCRIPTION =
  "Four centuries at the mouth of the Apponagansett — from the Wampanoag landing place to the Dartmouth Purchase of 1652, Grey's Raid, Laban's Folly, the whaling years, the Concordia yawls, and the village today.";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "The History of Padanaram — South Dartmouth, MA" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "The History of Padanaram — South Dartmouth, MA" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://padanaramsouthdartmouth.com/history" },
    ],
    links: [{ rel: "canonical", href: "https://padanaramsouthdartmouth.com/history" }],
  }),
  component: History,
});

/* ------------------------------------------------------------------ */
/*  The four names the village has carried                             */
/* ------------------------------------------------------------------ */

const NAMES = [
  {
    name: "Apponagansett",
    when: "Wampanoag",
    note: "Usually given as “waiting place at the ledge” — a description of the shelter this river mouth offers a boat.",
  },
  {
    name: "Ponagansett",
    when: "17th–18th century",
    note: "The English settlers’ spelling of the same word.",
  },
  {
    name: "Akin’s Wharf",
    when: "c. 1778–1798",
    note: "For Elihu Akin, whose shipyard the British burned — the village carried his name for about twenty years.",
  },
  {
    name: "Padanaram",
    when: "c. 1805 to today",
    note: "For Paddan Aram, the plain of Aram in the Book of Genesis.",
  },
];

/* ------------------------------------------------------------------ */
/*  The chronology, in four eras                                       */
/* ------------------------------------------------------------------ */

type Entry = { year: string; title: string; body: string };
type Era = { id: string; numeral: string; label: string; span: string; entries: Entry[] };

const ERAS: Era[] = [
  {
    id: "apponagansett",
    numeral: "I",
    label: "Apponagansett",
    span: "Before 1652 – 1700",
    entries: [
      {
        year: "Before 1652",
        title: "The waiting place at the ledge",
        body:
          "The Wampanoag lived on this coast for a thousand years and more before any European saw it. The Apponagansett, Acushnet and Acoaxet bands gave their names to what became Dartmouth, New Bedford and Westport. Their name for this water — Apponagansett — is usually translated as the waiting place at the ledge, which is still, four centuries later, the reason anyone comes here.",
      },
      {
        year: "March 7, 1652",
        title: "The Dartmouth Purchase",
        body:
          "Plymouth Colony men — William Bradford, Myles Standish, John Winslow, Thomas Southworth and John Cooke among them — acquired some 115,000 acres from the Wampanoag sachem Ousamequin (Massasoit) and his son Wamsutta. The tract, Old Dartmouth, became today’s Dartmouth, New Bedford, Fairhaven, Acushnet and Westport. The recorded price: thirty yards of cloth, eight moose skins, fifteen axes, fifteen hoes, fifteen pairs of breeches, eight blankets, two kettles, one clock, two English pounds in wampum, eight pairs of shoes, one iron pot, and ten shillings. This is the 1652 on the village sign.",
      },
      {
        year: "1675",
        title: "King Philip’s War and Russell’s Garrison",
        body:
          "Apponagansett was the part of Dartmouth that suffered most. On the east bank of the river, a short distance above the bridge, stood John Russell’s garrison house — a dwelling ringed by a wooden stockade, into which the neighborhood retired. In July 1675 a group of Native people laid down their weapons there and asked Russell for protection; he offered them Little Island. The site was excavated in 1951 and is now a National Historic Landmark.",
      },
      {
        year: "1699 · 1791",
        title: "The Quakers",
        body:
          "Friends had been meeting on the Apponagansett land since at least 1699, when the first meeting house went up. In 1787 the Quakers of Old Dartmouth voted to replace it; they pulled the old building down in 1790 and raised the present Apponegansett Meeting House in 1791. Some 2,000 Friends are said to have come to the opening. It is the oldest Quaker meeting house in southeastern Massachusetts, and among the best preserved anywhere.",
      },
    ],
  },
  {
    id: "ships-and-salt",
    numeral: "II",
    label: "Ships, Fire and Salt",
    span: "1700 – 1860",
    entries: [
      {
        year: "Mid-1700s",
        title: "The Akins build a shipyard",
        body:
          "The river mouth drew no industry at all until the middle of the 18th century, when it became a shipbuilding center. The brothers James and Elihu Akin built a yard here, along with a tavern, large houses and other businesses. For a generation the village was simply where the Akins worked.",
      },
      {
        year: "September 1778",
        title: "Grey’s Raid",
        body:
          "Elihu Akin drove three Loyalists out of the village. The reply came within days. British raiding parties under Major General Charles Grey, sweeping the coast and burning New Bedford, sent a force up the Apponagansett and burned most of the village — working carefully through Akin’s property in particular. He was left with a single small house on Potters Hill. He never recovered financially and died poor. Repairing the town’s damage was reckoned at £105,960, something like nine million dollars now. For twenty years afterward the village was called Akin’s Wharf, in his honor.",
      },
      {
        year: "c. 1805",
        title: "Laban Thacher, and Laban’s Folly",
        body:
          "Laban Thacher came down from Harwich on Cape Cod and set about building: a wharf, a shipyard, a windmill, a magnesia factory, a saltworks, a school and a church. Most of it worked. The saltworks — elaborate, expensive, ambitious — did not, and the village named it Laban’s Folly. It is the one Thacher venture everybody still remembers, apart from the name he gave the place.",
      },
      {
        year: "1828 – 1836",
        title: "The first bridge",
        body:
          "In 1828 a group of Dartmouth residents formed the Dartmouth Bridge Company to span the Apponagansett. Construction began on February 7, 1834, and the bridge opened in 1836 — the connection that turned two shores into one village. Nearly a century later, in 1920, Town Meeting voted $22,500 for a wooden draw bridge and another $2,000 to repair the center pier.",
      },
      {
        year: "1832",
        title: "South Wharf",
        body:
          "South Wharf has been in operation since 1832 — still, today, the working edge of the harbor, and the longest continuously running enterprise in the village.",
      },
      {
        year: "The 19th century",
        title: "Salt, whales, and New Bedford",
        body:
          "Through the 1800s Padanaram was a minor whaling port and home to a large saltworks, living largely in the wake of the whaling boom four miles east. The captains’ and merchants’ houses that still look down on the harbor from Elm and Water Streets were built on that money. As the industries died out, the village turned residential — and then, slowly, turned to sail.",
      },
    ],
  },
  {
    id: "the-yachting-age",
    numeral: "III",
    label: "The Yachting Age",
    span: "1860 – 1950",
    entries: [
      {
        year: "1877 · 1901",
        title: "The New Bedford Yacht Club comes to the harbor",
        body:
          "The club was formed in 1877 on Fish Island and incorporated the following January “for the purpose of encouraging athletic exercises, yachting and especially by maintaining a Club house.” It moved to Pope Island in 1879, and in 1901 built a station in Padanaram. When Pope Island was sold in 1941, the Padanaram clubhouse became the club’s home. It is one of the oldest yacht clubs in America, and its arrival is the moment this harbor turned from work to sail.",
      },
      {
        year: "1926 – 1966",
        title: "Concordia",
        body:
          "Llewellyn Howland founded the Concordia Company in 1926 and handed it to his son Waldo and the Marblehead racing designer C. Raymond Hunt in 1932. In 1938 Hunt drew the Concordia yawl — with input from the Howlands, Clinton Crane, Fenwick Williams and Frank Paine — a boat meant to cruise, to race, and to take whatever Buzzards Bay does on a bad afternoon. One hundred and three were built between 1938 and 1966: the largest class of large one-design wooden sailboats ever made. Concordia worked out of South Wharf, under lease, for some seventy-five years, moving inland to Gulf Road in 2007.",
      },
      {
        year: "1936",
        title: "The swing bridge",
        body:
          "The present swing bridge was built in 1936, under the supervision of Robert A. Watkins, with Benjamin Watkins as general contractor. It still opens on the hour in season, and the village still plans its afternoons around it.",
      },
      {
        year: "1938 · 1954 · 1991",
        title: "The storms",
        body:
          "The Great New England Hurricane came ashore on September 21, 1938, with gusts reported to 183 miles an hour and a surge over twelve feet. Two-thirds of the boats in New Bedford Harbor were lost; at Concordia, moored boats were thrown onto the beach and onto the bridge. The town spent $2,700 patching bridge and causeway to get them open again. Hurricane Carol did it again on August 31, 1954, with another near-twelve-foot surge, and crews resurfaced the causeway afterward. Hurricane Bob scored a direct hit in August 1991 and left the bridge impassable for about a week.",
      },
    ],
  },
  {
    id: "the-modern-village",
    numeral: "IV",
    label: "The Modern Village",
    span: "1950 – today",
    entries: [
      {
        year: "September 5, 1985",
        title: "The whole village becomes the artifact",
        body:
          "The Padanaram Village Historic District was added to the National Register of Historic Places — roughly bounded by Elm, Water, Middle, High, Pleasant, Prospect, Hill, School, Fremont and Bridge Streets, with Federal, Late Victorian and Colonial Revival buildings and a period of significance running from the 1750s into the 1940s. The listing cites industry, commerce, settlement, architecture, religion, maritime history and social history — which is a bureaucratic way of saying that the village itself is the thing worth keeping.",
      },
      {
        year: "2016 – 2018",
        title: "The causeway rebuilt",
        body:
          "Reconstruction of the Padanaram Bridge causeway began in June 2016, and the bridge closed that August. It reopened to traffic on June 11, 2018, after a roughly $10.5 million rebuild of roadway, drainage, structure and lighting along Gulf Road and Smith Neck Road. The village spent two summers on the long way around.",
      },
      {
        year: "2020",
        title: "The Buoy Tree",
        body:
          "In the first COVID winter, with no tree to be had for a lighting ceremony, the village made one out of lobster buoys instead. More than three hundred were bought and sold at five dollars apiece to cover the cost, then hand-painted by the Council on Aging, art students, preschoolers, elementary schoolers and local artists. It has been a village tradition every December since — the newest entry on this page, and the one most likely to outlast the rest.",
      },
      {
        year: "Today",
        title: "Best Harbor in the U.S.",
        body:
          "Padanaram has been voted Best Harbor in the United States by USHarbors.com three times — in 2019, 2022 and 2026. The shipyards are gone and the saltworks failed two hundred years ago. The harbor, the bridge, the lanes, and the shopfronts on Elm and Bridge Streets are not.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Places you can still walk to                                       */
/* ------------------------------------------------------------------ */

const STILL_STANDING = [
  { place: "The swing bridge", detail: "Built 1936. Opens on the hour in season." },
  { place: "New Bedford Yacht Club", detail: "Clubhouse built 1901; the club’s home since 1941." },
  { place: "South Wharf", detail: "A working yard since 1832." },
  { place: "Elm & Water Streets", detail: "Captains’ and merchants’ houses, built on salt and whale oil." },
  { place: "Apponegansett Meeting House", detail: "1791, Russells Mills Road — the oldest in southeastern Massachusetts." },
  { place: "Elihu Akin House", detail: "Potters Hill — the one property Grey’s raiders left him." },
  { place: "Russell Garrison site", detail: "Excavated 1951; a National Historic Landmark." },
];

/* ------------------------------------------------------------------ */
/*  Sources                                                            */
/* ------------------------------------------------------------------ */

const SOURCES = [
  { label: "Padanaram Village Historic District, National Register of Historic Places (ref. 85002010)", href: "https://npgallery.nps.gov/AssetDetail/NRIS/85002010" },
  { label: "Town of Dartmouth — Padanaram", href: "https://www.dartmouthma.gov/847/Padanaram" },
  { label: "Dartmouth Heritage Preservation Trust — the Akin family and the British raid", href: "https://dhpt.org/the-british-invasion-an-act-of-revenge-against-the-akin-family/" },
  { label: "New Bedford Whaling Museum — Old Dartmouth Historical Sketches", href: "https://www.whalingmuseum.org/old-dartmouth-historical-society-sketches/old-dartmouth-historical-sketch-no-2/" },
  { label: "New Bedford Yacht Club — club history", href: "https://www.nbyc.com/history" },
  { label: "Concordia Company — company history", href: "https://www.concordiaboats.com/about" },
  { label: "Dartmouth Week — Tracing the history of the Padanaram Causeway", href: "https://dartmouth.theweektoday.com/article/tracing-history-padanaram-causeway/24691" },
  { label: "MassDOT — Newly Reconstructed Padanaram Bridge Causeway Reopens", href: "https://blog.mass.gov/transportation/massdot-highway/dartmouth-newly-reconstructed-padanaram-bridge-causeway-reopens/" },
];

const PHOTOS = [
  { src: historyElmStreet, alt: "Historic Elm Street in Padanaram village", caption: "Elm Street" },
  { src: historyBridge, alt: "The bridge at Padanaram, Massachusetts", caption: "The Bridge" },
  { src: historyYachtClub, alt: "The New Bedford Yacht Club at Padanaram, Massachusetts", caption: "New Bedford Yacht Club" },
];

/* ------------------------------------------------------------------ */

function History() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[68vh] min-h-[420px]">
        <img
          src={bridgePhoto.url}
          alt="The Padanaram bridge over the Apponagansett River"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-harbor/45" />
        <div className="container-prose relative flex h-full items-end pb-14">
          <div className="text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.22em] text-primary-foreground/80">
              Est. 1652 · South Dartmouth, Massachusetts
            </div>
            <h1 className="mt-3 text-primary-foreground">The History of Padanaram</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Four centuries at the mouth of the Apponagansett — a Wampanoag landing place
              that became a shipyard, a saltworks, a whaling village, and one of the most
              beautiful small harbors in America.
            </p>
          </div>
        </div>
      </section>

      {/* Era jump links */}
      <nav
        aria-label="Jump to an era"
        className="sticky top-20 z-30 border-b border-border/60 bg-background/90 backdrop-blur"
      >
        <div className="container-prose flex gap-x-6 gap-y-2 overflow-x-auto py-3 text-xs uppercase tracking-[0.16em] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <a href="#the-name" className="shrink-0 text-foreground/60 hover:text-primary">
            The name
          </a>
          {ERAS.map((era) => (
            <a
              key={era.id}
              href={`#${era.id}`}
              className="shrink-0 text-foreground/60 hover:text-primary"
            >
              {era.label}
            </a>
          ))}
          <a href="#sources" className="shrink-0 text-foreground/60 hover:text-primary">
            Sources
          </a>
        </div>
      </nav>

      {/* The name */}
      <section id="the-name" className="scroll-mt-36 border-b border-border/60 bg-secondary/30">
        <div className="container-prose grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <div className="eyebrow">The name</div>
            <h2 className="mt-3">A village with four names.</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/80">
              <p>
                Around 1805 a Cape Cod merchant named Laban Thacher arrived at a small
                shipbuilding village on the Apponagansett and, in time, renamed it after a
                place in the Book of Genesis.
              </p>
              <p>
                Thacher appears to have seen himself in the biblical Laban, who dwelt in
                Paddan Aram — the field of Aram — a plain in northwest Mesopotamia along
                the Euphrates. He built a wharf, a shipyard, a windmill, a magnesia
                factory, a school and a church, and he built a saltworks so elaborate and
                so unsuccessful that the village called it Laban’s Folly.
              </p>
              <p>
                The name he gave the place stuck. The Wampanoag one did not — though it
                survives in the river, the bay, and the old Quaker meeting house up the
                road.
              </p>
              <p className="text-foreground">
                Locally, it is pronounced{" "}
                <span
                  className="text-accent"
                  style={{ fontFamily: "'Caveat', cursive", fontSize: "1.3rem" }}
                >
                  paid-nair-um
                </span>
                .
              </p>
            </div>
          </div>

          <ol className="space-y-3">
            {NAMES.map((n, i) => (
              <li
                key={n.name}
                className="rounded-lg border border-border/70 bg-card p-5 shadow-sm"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-2xl text-primary">{n.name}</span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {n.when}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{n.note}</p>
                {i < NAMES.length - 1 && (
                  <div aria-hidden className="mt-4 h-px w-8 bg-accent/40" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The chronology */}
      {ERAS.map((era, eraIndex) => (
        <section key={era.id} id={era.id} className="scroll-mt-36">
          <div className="container-prose py-16">
            <div className="flex items-baseline gap-5">
              <span
                aria-hidden
                className="text-5xl leading-none text-primary/20"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {era.numeral}
              </span>
              <div>
                <h2>{era.label}</h2>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {era.span}
                </div>
              </div>
            </div>

            <ol className="relative mt-12 border-l border-border/70">
              {era.entries.map((entry) => (
                <li key={entry.title} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
                  <span
                    aria-hidden
                    className="absolute -left-[0.3125rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"
                  />
                  <div className="text-xs uppercase tracking-[0.2em] text-accent">
                    {entry.year}
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-3xl">{entry.title}</h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">
                    {entry.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* A photo break after the second era */}
          {eraIndex === 1 && (
            <div className="border-y border-border/60 bg-[#f5f1ea] py-12">
              <div className="container-prose grid gap-4 sm:grid-cols-3">
                {PHOTOS.map((p) => (
                  <figure
                    key={p.src}
                    className="overflow-hidden rounded-sm bg-white p-2.5 pb-3 shadow-lg ring-1 ring-black/10"
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover sepia-[0.2]"
                    />
                    <figcaption
                      className="pt-2.5 text-center text-neutral-600"
                      style={{ fontFamily: "'Caveat', cursive", fontSize: "1.15rem" }}
                    >
                      {p.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* A parallax pull quote after the third era */}
          {eraIndex === 2 && (
            <div
              className="relative isolate flex min-h-[44vh] items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url(${harborAerial.url})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 -z-10 bg-harbor/55" />
              <blockquote className="container-prose px-4 text-center">
                <p
                  className="mx-auto max-w-3xl text-2xl text-white sm:text-3xl md:text-4xl"
                  style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.25 }}
                >
                  The waiting place at the ledge.
                </p>
                <footer className="mt-5 text-xs uppercase tracking-[0.28em] text-white/75">
                  The Wampanoag name for this harbor
                </footer>
              </blockquote>
            </div>
          )}
        </section>
      ))}

      {/* Still standing */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="container-prose py-16">
          <div className="eyebrow">Still standing</div>
          <h2 className="mt-3">You can walk most of it in an afternoon.</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/75">
            Park once. Nearly everything on this page is within a mile of the bridge.
          </p>
          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {STILL_STANDING.map((s) => (
              <li key={s.place} className="border-t border-border/60 pt-4">
                <div className="font-serif text-xl text-primary">{s.place}</div>
                <div className="mt-1 text-sm text-foreground/70">{s.detail}</div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/visit"
              className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-secondary-foreground hover:bg-[#d0e4b8]"
            >
              Plan your visit
            </Link>
            <Link
              to="/directory"
              className="inline-flex items-center rounded-full border border-primary/30 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Village directory
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="scroll-mt-36 border-t border-border/60">
        <div className="container-prose py-16">
          <div className="eyebrow">Sources &amp; further reading</div>
          <h2 className="mt-3">Where this came from.</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/75">
            Village history is handed down as much as it is written down, and the written
            accounts do not always agree. This page follows the published record where one
            exists. If you know better — a date, a name, a family story — the Association
            would genuinely like to hear it.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SOURCES.map((s) => (
              <li key={s.href} className="text-sm leading-relaxed">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/75 underline decoration-border underline-offset-4 hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-accent-foreground hover:bg-harbor-deep"
          >
            Send us a correction
          </Link>
        </div>
      </section>
    </>
  );
}
