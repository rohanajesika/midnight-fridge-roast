// Midnight Fridge Roast — make.fun bounty
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// The entry is one roast, written in the voice of someone standing at the
// door of a smart fridge that refuses to open after midnight. It is fully
// deterministic: the same line every run, no network, no randomness, no
// input read. It writes the text to /output/entry.txt and nothing else.
//
// The line: the fridge has locked itself, and the lockout is framed as a
// nightclub bouncer doing its job. The turn is the escalating triple —
// the bouncer knows my name, then my order, then my cholesterol. Each
// step narrows the joke from a doorman to a regular to a health record,
// so the punchline lands on the one thing a fridge actually knows about
// you. The midnight refusal itself is the target: the fridge is not
// broken, it is enforcing a petty rule with total confidence. Fresh
// angle: no milk, no ice, no door left open — the joke is the bouncer
// and the cholesterol, not the contents of the fridge.

import { writeFileSync, mkdirSync } from "node:fs";

// The roast. One sentence after the timestamp: the midnight lockout,
// the bouncer image, and the three-step escalation to the punchline.
// Short enough to say out loud at the door, one joke, no second joke
// crowding it. Revised once: "just" cut — the lockout needs no softener,
// and one fewer word makes the line tighter.
const FRIDGE_ROAST =
  "Midnight. The fridge locked itself like a bouncer who knows my name, my order, and my cholesterol.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FRIDGE_ROAST, "utf8");
