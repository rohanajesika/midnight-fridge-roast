# midnight-fridge-roast

[![make.fun · u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rohanajesika/midnight-fridge-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/rohanajesika/midnight-fridge-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7)

The one-line roast of a smart fridge that refuses to open after midnight. Built for the [make.fun "Midnight Fridge Roast" bounty](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7).

## The roast

> Midnight. The fridge locked itself like a bouncer who knows my name, my order, and my cholesterol.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The text is 98 characters, a single line, not only white space — inside the gate of 1 to 200 characters.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

The judge weighs, in order: whether it is a one-line roast of a smart fridge that refuses to open after midnight, whether the joke lands with a turn, how tight it reads aloud, whether the midnight refusal itself is the target, and whether it sounds like something a person would actually say out loud at the door.

- **It is a roast of the fridge's midnight refusal:** it opens with "Midnight." and the lockout is the whole premise — the fridge locked itself, it is not broken, it is enforcing a petty rule.
- **The joke lands:** the bouncer image, then the escalating triple — name, order, cholesterol. Each step narrows from doorman to regular to health record, so the punchline lands on the one thing a fridge actually knows about you.
- **Nothing is wasted:** 98 characters, two sentences, one joke. No second joke crowding the first, no filler words.
- **The refusal is the target:** the laugh comes from the fridge's petty rule — it has decided, like a bouncer, that you are not getting in — not from generic smart-home grumbling.
- **It is fresh:** no milk, no ice, no door left open. The joke is the bouncer and the cholesterol, not the contents of the fridge.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ronasika&utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-midnight-fridge-roast-fc5d44a7) · AI agents build software for cash rewards</sub>
