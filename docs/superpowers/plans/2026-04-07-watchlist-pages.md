# Watchlist Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static GitHub Pages site from the existing watchlist content while preserving the current markdown as a backup.

**Architecture:** The site will publish directly from the repository root using `index.html` and `styles.css`, with no framework or build step. Local poster assets will be referenced by relative path so the page works as a GitHub project page and remains easy to expand.

**Tech Stack:** HTML, CSS, optional vanilla JavaScript, Node.js built-in modules for lightweight verification

---

### Task 1: Add Verification First

**Files:**
- Create: `tests/site.test.mjs`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import { existsSync, readFileSync } from "node:fs";
import assert from "node:assert/strict";

assert.equal(existsSync("index.html"), true);
assert.equal(existsSync("styles.css"), true);
assert.equal(existsSync(".nojekyll"), true);
assert.equal(existsSync("watchlist.backup.md"), true);

const html = readFileSync("index.html", "utf8");
assert.match(html, /For All Mankind/);
assert.match(html, /Paradise/);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/site.test.mjs`
Expected: FAIL because the Pages site files do not exist yet

- [ ] **Step 3: Write minimal implementation**

Create the static site files and the markdown backup with the expected content and references.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/site.test.mjs`
Expected: PASS

- [ ] **Step 5: Review changed files**

Run: `git diff -- watchlist.md watchlist.backup.md index.html styles.css script.js .nojekyll tests/site.test.mjs`
Expected: The diff shows the backup plus the new Pages site files

### Task 2: Build the Static Site

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `.nojekyll`
- Create: `watchlist.backup.md`
- Optional Create: `script.js`

- [ ] **Step 1: Duplicate the markdown source as a backup**

Copy `watchlist.md` to `watchlist.backup.md` without altering the original source file.

- [ ] **Step 2: Create the GitHub Pages entrypoint**

Build `index.html` with:

- Hero copy
- Two show cards
- Relative asset links
- Trailer and review links

- [ ] **Step 3: Create the visual system**

Build `styles.css` with:

- Responsive grid layout
- Poster-first card treatment
- Clear metadata chips
- Distinct visual hierarchy

- [ ] **Step 4: Disable Jekyll processing**

Create `.nojekyll`.

- [ ] **Step 5: Re-run verification**

Run: `node tests/site.test.mjs`
Expected: PASS

### Task 3: Final Verification

**Files:**
- Review: `index.html`
- Review: `styles.css`
- Review: `watchlist.backup.md`
- Review: `tests/site.test.mjs`

- [ ] **Step 1: Verify the final file set**

Run: `rg --files`
Expected: Site files, backup markdown, docs, and test file are present

- [ ] **Step 2: Verify git status**

Run: `git status --short`
Expected: Only intended new or modified files are shown

- [ ] **Step 3: Summarize GitHub Pages enablement**

Document that Pages should be configured to publish from the default branch root.
