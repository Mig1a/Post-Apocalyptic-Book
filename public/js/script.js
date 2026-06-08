// ============================================================
// The Last Library — Frontend JavaScript
//
// This file handles all dynamic rendering for every page.
// It depends on BOOKS and AUTHORS being defined globally by
// /js/books.js, which must be loaded before this script.
//
// Page detection: each init function checks for a specific
// container element. If the element doesn't exist on the
// current page, the function exits early — so it's safe to
// include both scripts on every HTML page.
// ============================================================

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Converts a numeric rating (e.g. 4.7) into a display string
 * showing filled stars (★), a half star (½), empty stars (☆),
 * and the raw number: "★★★★½ 4.7"
 */
function formatRating(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const stars = "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
  return `${stars} ${rating}`;
}

/**
 * Returns an HTML string for a full book card used on the
 * books page. Includes cover image, title, author, year,
 * rating, and a 4-line clamped description.
 */
function buildBookCard(book) {
  return `
    <article class="book-card">
      <img
        src="${book.image}"
        alt="Cover of ${book.title}"
        loading="lazy"
        width="200"
        height="220"
      >
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <div class="book-meta">
          <span class="book-year">${book.year}</span>
          <span class="book-rating">${formatRating(book.rating)}</span>
        </div>
        <p class="book-description">${book.description}</p>
      </div>
    </article>
  `.trim();
}

/**
 * Returns an HTML string for a compact featured card used on
 * the home page. Description is truncated to 110 characters.
 */
function buildFeaturedCard(book) {
  const shortDesc =
    book.description.length > 110
      ? book.description.slice(0, 110).trim() + "…"
      : book.description;

  return `
    <article class="featured-card">
      <img
        src="${book.image}"
        alt="Cover of ${book.title}"
        loading="lazy"
        width="200"
        height="190"
      >
      <div class="featured-info">
        <h3>${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <span class="book-rating">${formatRating(book.rating)}</span>
        <p>${shortDesc}</p>
      </div>
    </article>
  `.trim();
}

/**
 * Returns an HTML string for an author card used on the
 * authors page. Shows circular portrait, name, metadata,
 * the books they contributed to this collection, and a bio.
 */
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
// HOME PAGE
// Renders the top-4-rated books into #featured-books.
// ============================================================

function initHomePage() {
  const container = document.getElementById("featured-books");
  if (!container) return;

  // Sort a copy of BOOKS by rating descending, take the top 4
  const topFour = [...BOOKS].sort((a, b) => b.rating - a.rating).slice(0, 4);

  container.innerHTML = topFour.map(buildFeaturedCard).join("");
}

// ============================================================
// BOOKS PAGE
// Renders all books with live search and sort controls.
// ============================================================

// Tracks the currently displayed (filtered + sorted) list so
// that sort changes don't reset the active search filter.
let currentBooks = [];

/**
 * Sorts a books array by the given key.
 * title  → alphabetical A–Z
 * year   → newest first (descending)
 * rating → highest first (descending)
 */
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

/**
 * Renders the books array into #books-grid and updates the
 * live count badge (#books-count).
 */
function renderBooks(books) {
  const grid = document.getElementById("books-grid");
  const countEl = document.getElementById("books-count");

  if (!grid) return;

  if (books.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <p>No books found. Try a different search term.</p>
      </div>
    `;
  } else {
    grid.innerHTML = books.map(buildBookCard).join("");
  }

  // Update accessible live region with current result count
  if (countEl) {
    countEl.textContent =
      books.length === 1
        ? "Showing 1 book"
        : `Showing ${books.length} books`;
  }
}

function initBooksPage() {
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  // Initial render: all books sorted by rating (highest first)
  currentBooks = sortBooks(BOOKS, "rating");
  renderBooks(currentBooks);

  // Live search — filters the full BOOKS array on every keystroke
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      const sortBy = sortSelect ? sortSelect.value : "rating";

      // Filter by title match, then apply current sort
      const filtered = BOOKS.filter((book) =>
        book.title.toLowerCase().includes(query)
      );

      currentBooks = sortBooks(filtered, sortBy);
      renderBooks(currentBooks);
    });
  }

  // Sort change — re-sorts whatever is currently displayed
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentBooks = sortBooks(currentBooks, sortSelect.value);
      renderBooks(currentBooks);
    });
  }
}

// ============================================================
// AUTHORS PAGE
// Renders all entries from AUTHORS into #authors-grid.
// ============================================================

function initAuthorsPage() {
  const container = document.getElementById("authors-grid");
  if (!container) return;

  container.innerHTML = AUTHORS.map(buildAuthorCard).join("");
}

// ============================================================
// PAGE ROUTER
// Detects which page we're on and calls the right init function.
// All three checks run; only the one with a matching container
// element will actually do any work.
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initHomePage();
  initBooksPage();
  initAuthorsPage();
});
