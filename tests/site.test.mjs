import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

assert.equal(existsSync("index.html"), true, "index.html should exist");
assert.equal(existsSync("styles.css"), true, "styles.css should exist");
assert.equal(existsSync(".nojekyll"), true, ".nojekyll should exist");
assert.equal(existsSync("watchlist.backup.md"), true, "watchlist.backup.md should exist");

const html = readFileSync("index.html", "utf8");

assert.match(html, /For All Mankind/, "site should contain For All Mankind");
assert.match(html, /Paradise/, "site should contain Paradise");
assert.match(html, /assets\/posters\/FAM\.jpeg/, "site should reference the FAM poster");
assert.match(html, /assets\/posters\/PAR\.avif/, "site should reference the Paradise poster");
assert.match(html, /youtube\.com/, "site should include trailer links");
assert.match(html, /rottentomatoes\.com/, "site should include Rotten Tomatoes links");
assert.match(html, /imdb\.com/, "site should include IMDb links");
