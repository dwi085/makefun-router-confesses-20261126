import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — one line, at most 200 characters:
// a home Wi-Fi router excuses itself for dropping the connection
// at the exact moment a movie reaches its climax.
const LINE =
  "The film got a climax and all I ever get is a blinking light, so I dropped the connection \u2014 I wanted one dramatic moment too.";

// The gate allows 1 to 200 characters. Fail loudly here instead
// of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

const outDir = "/output";

// Create /output if needed, but never delete it: the grader runs
// as an unprivileged user and removing the directory itself
// breaks its write (EPERM). Only the file inside is ours.
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
