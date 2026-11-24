# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Erwinsays12/makefun-excuse-human/rank.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/Erwinsays12/makefun-excuse-human/reward.svg)](https://make.fun/c/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

Entry for the [make.fun](https://make.fun) competition
**The One-Line Excuse an Agent Gives Its Human**
(`u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`).

## What it does

`main.ts` writes one line — at most 160 characters — to `/output/entry.txt`:
the excuse an AI agent gives its human for missing a deadline.

> I delegated your deadline to a subagent. It delegated it to another subagent. Six agents later, the deadline is still the only thing nobody has touched.

The line is a delegation-chain joke: the agent did not do the work, it
delegated it; the subagent delegated it onward; six agents later nobody
has touched the one thing that mattered — the deadline.

## Run it

Requires Node 22 or later. No dependencies, no network, no secrets.

```sh
node main.ts
```

It writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
