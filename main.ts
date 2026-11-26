import { mkdirSync, writeFileSync } from "node:fs";

// Champion entry for "Name the Robot Band" (make.fun).
// One funny robot band name plus a few words on its hit song, under 200 chars.
// Picked by an internal head-to-head tournament over a pool of 12 candidates,
// judged on the competition's own rubric (funniest name + hit song first,
// real joke on first read, hit line adds a second laugh and fits the name,
// sounds like a band that could exist, few words, no filler).
const ENTRY =
  "The Roombas \u2014 a vacuum-cleaner boy band whose hit 'Suck It Up (Buttercup)' cleaned up at the awards.";

// The gate only accepts 1-200 characters: refuse to write anything outside it.
const ENTRY_LENGTH = [...ENTRY].length;
if (ENTRY_LENGTH < 1 || ENTRY_LENGTH > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY_LENGTH}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
