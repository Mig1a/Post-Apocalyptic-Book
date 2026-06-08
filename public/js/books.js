// ============================================================
// The Last Library — Shared Data
// This file is loaded on every page that needs book or author
// data. Both BOOKS and AUTHORS are plain global arrays so any
// script tag on any HTML page can reference them directly.
// ============================================================

// ---- Book Dataset ----
// Each entry contains: id, title, author, year, rating (out of 5),
// a one-paragraph description, and a stable placeholder cover image.

const BOOKS = [
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

// ---- Author Dataset ----
// Six featured authors whose works appear in the collection.
// The `books` field lists titles from the BOOKS array above.

const AUTHORS = [
  {
    id: 1,
    name: "Cormac McCarthy",
    born: 1933,
    died: 2023,
    nationality: "American",
    bio: "One of America's most celebrated and uncompromising novelists, McCarthy spent decades producing stark, violent, and beautiful explorations of humanity on the edge. The Road won the 2007 Pulitzer Prize for Fiction and the James Tait Black Memorial Prize, and was adapted into a 2009 film starring Viggo Mortensen. His prose — sparse, biblical, unpunctuated — remains unmistakable.",
    books: ["The Road"],
    image: "https://picsum.photos/seed/mccarthy/150/150",
  },
  {
    id: 2,
    name: "Emily St. John Mandel",
    born: 1979,
    died: null,
    nationality: "Canadian",
    bio: "A bestselling novelist known for her elegant, time-shifting narratives that weave together disparate lives and timelines. Station Eleven became an international phenomenon upon publication and gained a new wave of readers after the COVID-19 pandemic; it was adapted into a critically acclaimed HBO miniseries in 2021. Her work consistently interrogates what art and human connection mean when civilization is stripped away.",
    books: ["Station Eleven"],
    image: "https://picsum.photos/seed/mandel/150/150",
  },
  {
    id: 3,
    name: "Suzanne Collins",
    born: 1962,
    died: null,
    nationality: "American",
    bio: "A former television writer for children's programming who became the author of one of the most culturally significant dystopian series in publishing history. The Hunger Games trilogy has sold over 100 million copies worldwide, ignited global conversations about class disparity, media spectacle, and political power, and spawned a blockbuster five-film franchise. Collins cited the Roman gladiatorial games and reality television as dual inspirations.",
    books: ["The Hunger Games"],
    image: "https://picsum.photos/seed/collins/150/150",
  },
  {
    id: 4,
    name: "Stephen King",
    born: 1947,
    died: null,
    nationality: "American",
    bio: "The undisputed king of American horror and suspense, with over 65 published novels and more than 350 million copies sold worldwide. The Stand — first published in 1978 and released in a substantially expanded edition in 1990 — is widely considered his magnum opus: a sweeping, mythological battle between good and evil played out across a pandemic-ravaged America. King writes under his own name and the pseudonym Richard Bachman.",
    books: ["The Stand"],
    image: "https://picsum.photos/seed/king/150/150",
  },
  {
    id: 5,
    name: "Octavia E. Butler",
    born: 1947,
    died: 2006,
    nationality: "American",
    bio: "A pioneering speculative fiction author and the first science fiction writer to receive a MacArthur Foundation 'Genius' Grant. Butler broke barriers as a Black woman in a genre dominated by white men, centering her work on race, gender, power, and survival with unflinching intelligence. Parable of the Sower, written in 1993, is today regarded as prophetic in its vision of an America collapsing under climate change and economic inequality.",
    books: ["Parable of the Sower"],
    image: "https://picsum.photos/seed/butler/150/150",
  },
  {
    id: 6,
    name: "Margaret Atwood",
    born: 1939,
    died: null,
    nationality: "Canadian",
    bio: "Award-winning novelist, poet, critic, and environmental activist best known internationally for The Handmaid's Tale. Atwood's MaddAddam trilogy — beginning with Oryx and Crake — is a panoramic, darkly comic dissection of genetic engineering, corporate omnipotence, and ecological collapse. She draws a careful distinction between 'speculative fiction' (extrapolating from existing science) and 'science fiction' (the purely fantastical), placing all her dystopian work firmly in the former category.",
    books: ["Oryx and Crake"],
    image: "https://picsum.photos/seed/atwood/150/150",
  },
];
