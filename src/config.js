import 'dotenv/config';

const config = {
    walletPrivateKey: process.env.WALLET_PRIVATE_KEY,
    rpcEndpoint: process.env.RPC_ENDPOINT,
};

export default config;