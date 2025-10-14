## How to Reproduce

```txt
bun install
bun run dev
```

Then try opening these endpoints:
- `/polkadot` - works fine
- `/kusama` - hangs

## Issue

The `/kusama` endpoint hangs, even though the code is identical to the `/polkadot` endpoint which works fine.

### Bun Runtime - Works Fine ✅
URL: https://assethub-endpoint-bun.up.railway.app/kusama

The Kusama endpoint works perfectly when running on Bun runtime (deployed on Railway).

### Vercel - Works Fine ✅
URL: https://assethub-endpoint.vercel.app/kusama

The Kusama endpoint works perfectly when running on Vercel.

### Cloudflare Workers - Hangs ❌
URL: https://assethub-endpoint.gogeta.workers.dev/kusama

The Kusama endpoint hangs when running on Cloudflare Workers, even though the Polkadot endpoint works fine in the same environment.
