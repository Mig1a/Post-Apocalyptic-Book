// ============================================================
// The Last Library — Canonical Server-Side Data Module
//
// This is the single source of truth for all book and author
// data used by Express route handlers (server.js).
//
// The browser-compatible copy lives in public/js/books.js.
// Both files must be kept in sync when the data changes.
// ============================================================

export const BOOKS = [
  {
    id: 1,
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    rating: 4.7,
    description:
      "A father and his young son walk alone through burned America, heading south toward the coast. Nothing moves in the ravaged landscape save the ash on the wind. They have nothing but a pistol to defend themselves against the lawless bands that stalk the road — and the love between them, which is all that stands between them and death.",
    image: "https://picsum.photos/seed/road2006/200/300",
  },
  {
    id: 2,
    title: "Station Eleven",
    author: "Emily St. John Mandel",
    year: 2014,
    rating: 4.5,
    description:
      "A Georgian flu pandemic sweeps the globe and kills most of humanity. Twenty years later, a traveling group of actors and musicians called the Traveling Symphony moves through the ruins of the Great Lakes region, performing Shakespeare for isolated settlements. A haunting meditation on art, memory, and what is worth preserving.",
    image: "https://picsum.photos/seed/station11/200/300",
  },
  {
    id: 3,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    rating: 4.6,
    description:
      "In the ruins of what was once North America, the totalitarian Capitol of Panem maintains its iron grip over twelve districts by forcing each one to send a boy and a girl to compete in the Hunger Games — a televised fight to the death. Sixteen-year-old Katniss Everdeen volunteers to save her younger sister and becomes the face of a revolution.",
    image: "https://picsum.photos/seed/hunger2008/200/300",
  },
  {
    id: 4,
    title: "The Stand",
    author: "Stephen King",
    year: 1978,
    rating: 4.5,
    description:
      "A government-engineered superflu kills 99 percent of the world's population in a matter of weeks. The survivors are drawn in dreams toward either a benevolent 108-year-old woman in Nebraska or a demonic figure called Randall Flagg in Las Vegas — setting the stage for an epic, mythological battle between good and evil.",
    image: "https://picsum.photos/seed/stand1978/200/300",
  },
  {
    id: 5,
    title: "A Canticle for Leibowitz",
    author: "Walter M. Miller Jr.",
    year: 1959,
    rating: 4.4,
    description:
      "Spanning thousands of years after a nuclear holocaust, monks in a remote Utah monastery labor to preserve fragments of pre-war scientific knowledge through multiple cycles of civilization's rise and catastrophic fall. A profound and darkly comic question: is humanity doomed to repeat its greatest mistake?",
    image: "https://picsum.photos/seed/leibowitz/200/300",
  },
  {
    id: 6,
    title: "Parable of the Sower",
    author: "Octavia E. Butler",
    year: 1993,
    rating: 4.6,
    description:
      "In a near-future California ravaged by climate change, corporate greed, and social collapse, a young Black woman named Lauren Olamina possesses hyper-empathy syndrome and must flee her burning neighborhood. As she gathers survivors along the road, she develops a philosophy called Earthseed — a new religion built for a broken world.",
    image: "https://picsum.photos/seed/sower1993/200/300",
  },
  {
    id: 7,
    title: "Oryx and Crake",
    author: "Margaret Atwood",
    year: 2003,
    rating: 4.3,
    description:
      "The sole survivor of an engineered plague, a man calling himself Snowman lives among the Crakers — a gentle, genetically redesigned species created to replace humanity. Through fragments of memory, we piece together how his brilliant, morally untethered friend Crake orchestrated the end of the human world.",
    image: "https://picsum.photos/seed/oryxcrake/200/300",
  },
  {
    id: 8,
    title: "I Am Legend",
    author: "Richard Matheson",
    year: 1954,
    rating: 4.2,
    description:
      "Robert Neville is the last living human on Earth — but he is not alone. Every other person has been transformed by a bacterial plague into vampire-like creatures who gather nightly outside his fortified Los Angeles home, demanding his death. By day he hunts them. By night he barely survives. A genre-defining classic.",
    image: "https://picsum.photos/seed/legend1954/200/300",
  },
  {
    id: 9,
    title: "World War Z",
    author: "Max Brooks",
    year: 2006,
    rating: 4.3,
    description:
      "An oral history of the global conflict against the undead, compiled a decade after the war's end. Told through survivor interviews from every corner of the world — soldiers, politicians, refugees, and survivors — this sweeping account documents humanity's near-extinction, catastrophic missteps, and ultimate, costly victory.",
    image: "https://picsum.photos/seed/wwz2006/200/300",
  },
  {
    id: 10,
    title: "The Maze Runner",
    author: "James Dashner",
    year: 2009,
    rating: 4.2,
    description:
      "Thomas wakes in a dark elevator with no memories except his name, arriving in a walled clearing called the Glade surrounded by a massive, shifting stone maze full of deadly bio-mechanical creatures called Grievers. He and the other trapped boys have one chance to solve the maze before the walls close in for good.",
    image: "https://picsum.photos/seed/maze2009/200/300",
  },
  {
    id: 11,
    title: "Divergent",
    author: "Veronica Roth",
    year: 2011,
    rating: 4.1,
    description:
      "In a fractured post-war Chicago, society is divided into five factions based on virtues: Dauntless, Erudite, Abnegation, Amity, and Candor. Sixteen-year-old Tris Prior discovers she is Divergent — she fits none of them — and uncovers a conspiracy that threatens to tear the fragile social order apart with bloody force.",
    image: "https://picsum.photos/seed/divergent/200/300",
  },
  {
    id: 12,
    title: "Alas, Babylon",
    author: "Pat Frank",
    year: 1959,
    rating: 4.1,
    description:
      "When nuclear war annihilates most of the United States in a single morning, the small Florida town of Fort Repose finds itself isolated from the outside world. Neighbors who once bickered over property lines must now overcome petty differences to survive without electricity, medicine, or law — and rebuild civilization from scratch.",
    image: "https://picsum.photos/seed/babylon1959/200/300",
  },
  {
    id: 13,
    title: "The Children of Men",
    author: "P.D. James",
    year: 1992,
    rating: 4.0,
    description:
      "The year is 2021 and the human race has become infertile. No child has been born since 1995, and the last generation alive faces extinction with quiet despair. Oxford historian Theo Faron is pulled reluctantly into a small band of revolutionaries — and stumbles upon a secret that might be humanity's last miracle.",
    image: "https://picsum.photos/seed/childrenmen/200/300",
  },
  {
    id: 14,
    title: "The Passage",
    author: "Justin Cronin",
    year: 2010,
    rating: 4.2,
    description:
      "A secret U.S. government experiment with a Central American virus creates twelve inmates transformed into near-immortal, vampire-like virals who escape and decimate civilization. Ninety-three years later, a tiny walled colony in the California mountains holds the last known survivors — until a girl who never ages arrives at their gate.",
    image: "https://picsum.photos/seed/passage2010/200/300",
  },
];
