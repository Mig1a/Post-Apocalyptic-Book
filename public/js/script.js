// ============================================================
// The Last Library — Frontend JavaScript
//
// Depends on BOOKS and AUTHORS global arrays defined in
// /js/books.js, which must load before this script.
//
// Page detection: each init function checks for a specific
// container element. If the element is absent on the current
// page the function exits early — safe to include on every page.
// ============================================================

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

// Converts a book title to a URL slug matching the server route.
// Must stay in sync with the slugify() function in server.js.
// "The Road" → "the-road"   |   "Alas, Babylon" → "alas-babylon"
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Converts a numeric rating into a display string: "★★★★½ 4.7"
function formatRating(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty) + ` ${rating}`;
}

// ============================================================
// CARD BUILDERS
// ============================================================

// Returns HTML for a full book card (books page).
// Includes a "View Details" link pointing to the unique
// server-rendered route: /books/<slug>
function buildBookCard(book) {
  const slug = slugify(book.title);

  return `
    <article class="book-card">
      <a href="/books/${slug}" class="book-card-link" aria-label="View details for ${book.title}">
        <img
          src="${book.image}"
          alt="Cover of ${book.title}"
          loading="lazy"
          width="200"
          height="220"
        >
      </a>
      <div class="book-info">
        <h3 class="book-title">
          <a href="/books/${slug}">${book.title}</a>
        </h3>
        <p class="book-author">by ${book.author}</p>
        <div class="book-meta">
          <span class="book-year">${book.year}</span>
          <span class="book-rating">${formatRating(book.rating)}</span>
        </div>
        <p class="book-description">${book.description}</p>
        <a href="/books/${slug}" role="button" class="outline book-detail-btn">
          View Details &rarr;
        </a>
      </div>
    </article>
  `.trim();
}

// Returns HTML for a compact featured card (home page).
// Also links to the unique detail endpoint.
function buildFeaturedCard(book) {
  const slug = slugify(book.title);
  const shortDesc =
    book.description.length > 110
      ? book.description.slice(0, 110).trim() + "…"
      : book.description;

  return `
    <article class="featured-card">
      <a href="/books/${slug}" aria-label="View details for ${book.title}">
        <img
          src="${book.image}"
          alt="Cover of ${book.title}"
          loading="lazy"
          width="200"
          height="190"
        >
      </a>
      <div class="featured-info">
        <h3><a href="/books/${slug}">${book.title}</a></h3>
        <p class="book-author">by ${book.author}</p>
        <span class="book-rating">${formatRating(book.rating)}</span>
        <p>${shortDesc}</p>
      </div>
    </article>
  `.trim();
}

// Returns HTML for an author card (authors page).
function buildAuthorCard(author) {
  const booksList = author.books.join(", ");
  const lifespan = author.died
    ? `${author.born}–${author.died}`
    : `b. ${author.born}`;

  return `
    <article class="author-card">
      <img
        src="${author.image}"
        alt="Portrait of ${author.name}"
        class="author-photo"
        loading="lazy"
        width="110"
        height="110"
      >
      <div class="author-info">
        <h3>${author.name}</h3>
        <p class="author-meta">${author.nationality} &middot; ${lifespan}</p>
        <p class="author-books">In this collection: <em>${booksList}</em></p>
        <p class="author-bio">${author.bio}</p>
      </div>
    </article>
  `.trim();
}

// ============================================================
// HOME PAGE — renders the top-4 books into #featured-books
// ============================================================

function initHomePage() {
  const container = document.getElementById("featured-books");
  if (!container) return;

  const topFour = [...BOOKS].sort((a, b) => b.rating - a.rating).slice(0, 4);
  container.innerHTML = topFour.map(buildFeaturedCard).join("");
}

// ============================================================
// BOOKS PAGE — renders all books with live search and sort
// ============================================================

// Holds the currently displayed (filtered + sorted) list so that
// changing the sort doesn't reset an active search filter.
let currentBooks = [];

// Sorts books by the given key.
// title  → A–Z   |   year → newest first   |   rating → highest first
function sortBooks(books, sortBy) {
  const copy = [...books];
  switch (sortBy) {
    case "title":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "year":
      return copy.sort((a, b) => b.year - a.year);
    case "rating":
    default:
      return copy.sort((a, b) => b.rating - a.rating);
  }
}

// Renders the books array into #books-grid and updates the count badge.
function renderBooks(books) {
  const grid = document.getElementById("books-grid");
  const countEl = document.getElementById("books-count");
  if (!grid) return;

  grid.innerHTML =
    books.length === 0
      ? `<div class="no-results"><p>No books found. Try a different search term.</p></div>`
      : books.map(buildBookCard).join("");

  if (countEl) {
    countEl.textContent =
      books.length === 1 ? "Showing 1 book" : `Showing ${books.length} books`;
  }
}

function initBooksPage() {
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  // Initial render: all books sorted by rating
  currentBooks = sortBooks(BOOKS, "rating");
  renderBooks(currentBooks);

  // Live search: filters the full BOOKS array on every keystroke
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      const sortBy = sortSelect ? sortSelect.value : "rating";
      const filtered = BOOKS.filter((b) =>
        b.title.toLowerCase().includes(query)
      );
      currentBooks = sortBooks(filtered, sortBy);
      renderBooks(currentBooks);
    });
  }

  // Sort change: re-sorts whatever is currently displayed
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentBooks = sortBooks(currentBooks, sortSelect.value);
      renderBooks(currentBooks);
    });
  }
}

// ============================================================
// AUTHORS PAGE — renders all entries from AUTHORS
// ============================================================

function initAuthorsPage() {
  const container = document.getElementById("authors-grid");
  if (!container) return;
  container.innerHTML = AUTHORS.map(buildAuthorCard).join("");
}

// ============================================================
// PAGE ROUTER — calls the right init based on which container
// elements exist in the current page's DOM
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initHomePage();
  initBooksPage();
  initAuthorsPage();
});
