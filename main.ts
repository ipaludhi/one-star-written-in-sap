import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review from a houseplant about its human owner.
// 150 chars, 152 bytes, single line, under the 280-char cap.
const ENTRY =
  "One star. He plays me Mozart for growth, talks to me for luck, then leaves me in a dark corner for a month \u2014 I don't need a playlist, I need a window.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate (RULES.txt): entry.txt must be UTF-8 text of 1-279 chars, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 279 || !ENTRY.trim()) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
