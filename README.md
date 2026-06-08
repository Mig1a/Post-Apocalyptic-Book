# The Last Library

A curated repository of post-apocalyptic books — built for CodePath Advanced Web Development, Unit 1.

## Project Overview

The Last Library is a multi-page informational website that helps users discover and explore the greatest works of post-apocalyptic fiction. It features 14 curated books, 6 featured authors, real-time search and sort, and a consistent post-apocalyptic dark theme powered by PicoCSS.

## Features

- **Home Page** — Hero section, at-a-glance stats, and the top-4-rated books rendered dynamically
- **Books Page** — All 14 books in a responsive card grid with live title search and sort by rating, title, or publication year
- **Authors Page** — Six featured author cards with portrait, biography, nationality, and lifespan
- **About Page** — Project overview, what post-apocalyptic fiction is, tech stack breakdown, and project metadata
- **Responsive design** — Mobile-friendly layout down to 320 px using CSS Grid and Flexbox
- **Dark theme** — Post-apocalyptic amber-on-charcoal palette built on PicoCSS v2 custom properties
- **No frameworks** — Vanilla HTML, CSS, and JavaScript only on the frontend

## Technologies Used

| Layer      | Technology                            |
|------------|---------------------------------------|
| Runtime    | Node.js                               |
| Server     | Express 5                             |
| HTML       | HTML5 (semantic elements throughout)  |
| CSS        | CSS3, CSS Custom Properties, Grid     |
| JavaScript | Vanilla ES6+ (no frameworks)          |
| Styling    | PicoCSS v2 (CDN)                      |
| Dev tool   | nodemon (auto-reload on file changes) |

## Folder Structure

```
the-last-library/
├── server.js           # Express server — serves /public as static files
├── package.json        # Dependencies and npm scripts
├── README.md
└── public/
    ├── index.html      # Home page
    ├── books.html      # Books collection page
    ├── authors.html    # Authors page
    ├── about.html      # About page
    ├── css/
    │   └── styles.css  # Custom post-apocalyptic theme
    ├── js/
    │   ├── books.js    # Shared BOOKS + AUTHORS data arrays
    │   └── script.js   # Render, search, and sort logic
    └── assets/         # Local image assets (if any)
```

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mig1a/Post-Apocalyptic-Book.git
   cd Post-Apocalyptic-Book
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This installs Express (production) and nodemon (development).

## Running the Project

### Production mode

```bash
npm start
```

Starts the server with `node server.js`. Visit [http://localhost:3000](http://localhost:3000).

### Development mode (auto-reload)

```bash
npm run dev
```

Starts the server with `nodemon server.js`. The server restarts automatically whenever you save a change to `server.js`. Frontend file changes (HTML, CSS, JS) are reflected immediately on the next browser refresh — no restart needed.

## Pages

| URL              | Description                                       |
|------------------|---------------------------------------------------|
| `/`              | Home — hero, stats, featured books, CTA           |
| `/books.html`    | Full collection — search + sort + 14 book cards   |
| `/authors.html`  | Six author cards with biographies                 |
| `/about.html`    | Project info, genre explainer, tech stack         |

## Data

All book and author data lives in [`public/js/books.js`](public/js/books.js) as two plain global arrays:

- `BOOKS` — 14 entries with `id`, `title`, `author`, `year`, `rating`, `description`, `image`
- `AUTHORS` — 6 entries with `id`, `name`, `born`, `died`, `nationality`, `bio`, `books`, `image`

To add a book, append an entry to the `BOOKS` array. No other file needs to change.

## Screenshots

_Add screenshots here after running the project locally._

| Page    | Screenshot |
|---------|------------|
| Home    | _(pending)_ |
| Books   | _(pending)_ |
| Authors | _(pending)_ |
| About   | _(pending)_ |

## License

ISC
