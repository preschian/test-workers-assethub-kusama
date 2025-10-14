import { Hono } from 'hono'
import { DedotClient, WsProvider } from 'dedot';
import type { PolkadotAssetHubApi, KusamaAssetHubApi } from '@dedot/chaintypes';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/polkadot', async (c) => {
  const provider = new WsProvider('wss://polkadot-asset-hub-rpc.polkadot.io');
  const client = await DedotClient.new<PolkadotAssetHubApi>(provider);
  const token = await client.query.nfts.item([601, 260005932])

  return c.json({
    owner: token?.owner.address().toString(),
  })
})

app.get('/kusama', async (c) => {
  const provider = new WsProvider('wss://kusama-asset-hub-rpc.polkadot.io');
  const client = await DedotClient.new<KusamaAssetHubApi>(provider);
  const token = await client.query.nfts.item([615, 2])

  return c.json({
    owner: token?.owner.address().toString(),
  })
})

export default app
