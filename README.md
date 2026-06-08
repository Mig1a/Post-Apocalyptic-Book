# WEB103 Project 1 - *The Last Library*

Submitted by: **Million Aboye**

About this web app: **The Last Library is a curated repository of post-apocalyptic books. Users can browse 14 titles, search by name, sort by rating or year, and click into individual book detail pages — each served at a unique URL like `/books/the-road`. The site also features author profiles and an about page explaining the genre.**

Time spent: **X** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view is a unique endpoint — e.g. `localhost:3000/books/the-road` and `localhost:3000/books/station-eleven`**
  - [x] *Note: The unique URL for each detail view is visible in the browser address bar and in the "View Details" links on every book card.*
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format — responsive card grid with cover images, hover effects, and a post-apocalyptic dark theme

The following **additional** features are implemented:

- [x] Live search bar that filters all 14 books by title in real time (no page reload)
- [x] Sort controls: sort the collection by rating (high → low), title (A → Z), or publication year (newest first)
- [x] Authors page with 6 featured author biography cards
- [x] About page explaining post-apocalyptic fiction as a genre and detailing the project tech stack
- [x] Sticky frosted-glass navigation header with active-page highlighting
- [x] Responsive layout down to mobile (320 px) using CSS Grid and Flexbox
- [x] HTML-escaped server-rendered detail pages (safe against injection)

## Video Walkthrough

**Note: please be sure to show each unique book detail URL in the walkthrough.**

Here's a walkthrough of implemented required features:

<img src='Post-Apocalyptic-Book.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ... Add GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux -->

## Notes

**Architecture:** Book data lives in two places — `data/books.js` (an ES module imported by the server for route generation) and `public/js/books.js` (a browser-global copy for client-side search/sort/render). Both contain identical data; `data/books.js` is the canonical source.

**Detail page routing:** Express generates each book's detail page dynamically from the `BOOKS` array using a URL slug derived from the title (e.g. "The Road" → `/books/the-road`). No templating engine is used — pages are built with template literals.

**404 handling:** A catch-all middleware at the bottom of `server.js` serves `public/404.html` with a 404 status for any unmatched route.

## License

Copyright [2026] [Million Aboye]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
