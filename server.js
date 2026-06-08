// ============================================================
// The Last Library — Express Server
//
// Routes:
//   Static files  →  /public   (HTML pages, CSS, JS, assets)
//   GET /books/:slug            individual book detail pages
//   Catch-all 404               public/404.html
// ============================================================

import express from "express";
import { BOOKS } from "./data/books.js";

const app = express();
const PORT = 3000;

// ---- Helpers ------------------------------------------------

// Converts a book title to a URL-safe slug.
// "The Road" → "the-road"   |   "Alas, Babylon" → "alas-babylon"
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Basic HTML entity escaping to prevent injection in generated pages
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Renders a star rating string: "★★★★½ 4.7"
function formatRating(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty) + ` ${rating}`;
}

// Builds a complete HTML page for an individual book detail view
function buildDetailPage(book) {
  const rating = formatRating(book.rating);

  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${esc(book.title)} by ${esc(book.author)} — ${esc(book.description.slice(0, 120))}..." />
    <title>${esc(book.title)} — The Last Library</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>

    <!-- Site Header -->
    <header class="site-header">
      <div class="container">
        <nav>
          <ul>
            <li><a href="/index.html" class="site-logo">The Last Library</a></li>
          </ul>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/books.html" aria-current="page">Books</a></li>
            <li><a href="/authors.html">Authors</a></li>
            <li><a href="/about.html">About</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="container">

      <!-- Breadcrumb back link -->
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/books.html">&larr; Back to Collection</a>
      </nav>

      <!-- Book detail card -->
      <article class="book-detail">

        <div class="book-detail-cover">
          <img
            src="${esc(book.image)}"
            alt="Cover of ${esc(book.title)}"
            width="260"
            height="390"
          />
        </div>

        <div class="book-detail-info">
          <h1>${esc(book.title)}</h1>
          <p class="book-detail-author">by ${esc(book.author)}</p>

          <div class="book-meta book-detail-meta">
            <span class="book-year">${esc(String(book.year))}</span>
            <span class="book-rating">${rating}</span>
          </div>

          <p class="book-detail-description">${esc(book.description)}</p>

          <div class="book-detail-actions">
            <a href="/books.html" role="button" class="outline">&larr; Back to Collection</a>
          </div>
        </div>

      </article>
    </main>

    <!-- Site Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <strong>The Last Library</strong>
            <p>A curated repository of post-apocalyptic literature.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p>Pages</p>
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li><a href="/books.html">Books</a></li>
              <li><a href="/authors.html">Authors</a></li>
              <li><a href="/about.html">About</a></li>
            </ul>
          </nav>
          <div>
            <strong>Built With</strong>
            <ul>
              <li>Node.js &amp; Express</li>
              <li>PicoCSS</li>
              <li>Vanilla JavaScript</li>
            </ul>
          </div>
        </div>
        <hr />
        <p class="footer-credit">
          Built for CodePath Advanced Web Development &mdash; Unit 1 Project &mdash; 2026
        </p>
      </div>
    </footer>

  </body>
</html>`;
}

// ---- Middleware ----------------------------------------------

// Serve everything in /public as static files first.
// This handles: /index.html, /books.html, /css/styles.css, etc.
app.use(express.static("public"));

// ---- Routes -------------------------------------------------

// GET /books/:slug — individual book detail page
// Example: GET /books/the-road  →  detail page for "The Road"
app.get("/books/:slug", (req, res) => {
  const { slug } = req.params;

  // Find the book whose title slugifies to the requested slug
  const book = BOOKS.find((b) => slugify(b.title) === slug);

  if (!book) {
    // No matching book — fall through to 404
    return res.status(404).sendFile("404.html", { root: "public" });
  }

  res.send(buildDetailPage(book));
});

// ---- 404 Catch-All ------------------------------------------
// Must be registered AFTER all other routes.
// Catches any request that didn't match a static file or route above.
app.use((_req, res) => {
  res.status(404).sendFile("404.html", { root: "public" });
});

// ---- Start Server -------------------------------------------
app.listen(PORT, () => {
  console.log(`The Last Library is open at http://localhost:${PORT}`);
});
