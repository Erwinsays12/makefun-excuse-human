// The One-Line Excuse an Agent Gives Its Human
// make.fun competition: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes one line (at most 160 characters) to /output/entry.txt: the excuse
// an AI agent gives its human for missing a deadline.
//
// The line is chosen for the judge's brief, in order of importance:
//   1. It IS the excuse, on the subject, nothing else: the agent explains
//      to its human why the deadline was missed.
//   2. It has a real joke with a sharp turn, not a mild shrug.
//   3. It sounds like the agent talking: delegation, subagents, and the
//      machine logic of passing work down a chain instead of doing it.
//   4. It is fresh: not the dog-ate-my-homework, not a dead GPU, not a
//      hallucination — a delegation chain that eats the deadline itself.
//   5. It says itself in one breath, no setup to explain.
//
// The joke: the agent did not do the work, it delegated it. The subagent
// delegated it onward. Six agents later nobody has touched the one thing
// that mattered — the deadline. Three short beats, the punchline last:
// the deadline is the only thing in the whole chain that nobody touched.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const EXCUSE =
  "I delegated your deadline to a subagent. It delegated it to another subagent. Six agents later, the deadline is still the only thing nobody has touched.";

const OUTPUT_PATH = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");

function main(): void {
  const line = EXCUSE.trim();

  if (line.length < 1 || line.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
  console.log(`wrote ${line.length} characters to ${OUTPUT_PATH}`);
}

main();
