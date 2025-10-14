## How to Reproduce

```txt
bun install
bun run dev
```

Then try opening these endpoints:
- `/polkadot` - works fine
- `/kusama` - hangs

## Issue

The `/kusama` endpoint hangs, even though the code is identical to the `/polkadot` endpoint which works fine. This issue occurs both in Cloudflare Workers and local development.
