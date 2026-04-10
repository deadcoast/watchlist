# Watchlist GitHub Pages Design

## Goal

Convert the current markdown watchlist into a GitHub Pages site with stronger visual presentation while preserving the original markdown as a backup.

## Current Repo Context

- The repository currently contains a markdown watchlist in `watchlist.md`.
- Poster and ratings assets already exist under `assets/posters/`.
- There is no build system or site framework in the repo today.
- The active watchlist content is currently local and uncommitted, so implementation should work from the current workspace instead of a fresh worktree.

## GitHub Pages Research

GitHub Pages officially supports publishing from:

- The root of the default branch
- A `/docs` folder in the default branch
- A custom GitHub Actions workflow

For this repo, root publishing is the lowest-friction choice because the site does not need a build step. A top-level `index.html` plus static assets is sufficient. Adding `.nojekyll` keeps the site on plain static file serving with no Jekyll processing assumptions.

Reference docs:

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Chosen Approach

Create a static Pages site at the repository root with:

- `index.html` as the entry file
- `styles.css` for layout and visual design
- Optional lightweight `script.js` only if needed for presentation
- `.nojekyll` so GitHub Pages serves the site directly
- `watchlist.backup.md` as a preserved copy of the original markdown

## Information Architecture

The page should present the watchlist as a poster-first interface instead of a plain document:

- Hero section introducing the watchlist
- Responsive show cards for each entry
- Compact metadata for season count and ratings
- Quick actions for trailer and review links
- Relative asset paths so the site works as a GitHub project page

## Content Handling

- Preserve the current markdown by duplicating it into `watchlist.backup.md`
- Keep `watchlist.md` available as the original working source file
- Correct obvious formatting issues from the markdown during HTML conversion
- Correct the Paradise review links so they point to the proper title pages

## Verification

Implementation should be verified with a lightweight local test that confirms:

- `index.html`, `styles.css`, `.nojekyll`, and `watchlist.backup.md` exist
- The page references the local poster assets
- The page exposes trailer and review links for both shows

Manual inspection should also confirm the site is ready for GitHub Pages root publishing.
