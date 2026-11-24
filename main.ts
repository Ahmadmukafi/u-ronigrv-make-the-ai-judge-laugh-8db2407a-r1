import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 134 chars — the gate allows 1–200, and the punch lands at the end.
const line =
  "My human gave me a 47-page brief. My context window died on page 12, so I finished the task anyway — wrong, but with total confidence.";

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
