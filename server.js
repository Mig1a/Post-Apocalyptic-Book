// ============================================================
// The Last Library — Express Server
//
// Responsibilities:
//   - Serve every file inside /public as a static asset
//     (HTML pages, CSS, JavaScript, and any images)
//   - Listen on port 3000 for incoming HTTP requests
//
// There is intentionally no routing logic here: all pages are
// plain .html files and the browser navigates between them
// directly. Express's static middleware handles everything.
// ============================================================

import express from "express";

const app = express();
const PORT = 3000;

// Serve the entire contents of the /public directory as static
// files. Express will match request URLs to file paths inside
// public/ automatically — e.g. GET /books.html → public/books.html
app.use(express.static("public"));

// Start the HTTP server and log the local URL for convenience
app.listen(PORT, () => {
  console.log(`The Last Library is open at http://localhost:${PORT}`);
});
