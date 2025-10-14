import { DedotClient, WsProvider } from 'dedot';
import type { PolkadotAssetHubApi, KusamaAssetHubApi } from '@dedot/chaintypes';

async function polkadot() {
    const provider = new WsProvider('wss://polkadot-asset-hub-rpc.polkadot.io');
    const client = await DedotClient.new<PolkadotAssetHubApi>(provider);
    const token = await client.query.nfts.item([601, 260005932])
    console.log(token?.owner.address().toString())
}

async function kusama() {
    const provider = new WsProvider('wss://kusama-asset-hub-rpc.polkadot.io');
    const client = await DedotClient.new<KusamaAssetHubApi>(provider);
    const token = await client.query.nfts.item([615, 2])
    console.log(token?.owner.address().toString())
}

polkadot()
kusama()