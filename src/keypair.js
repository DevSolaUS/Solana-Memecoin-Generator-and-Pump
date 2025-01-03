import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import config from './config.js';

export const distributeVestedTokens = async (mint, wallet, beneficiaries, totalTokens, timePeriods) => {
    try {
        const tokensPerPeriod = totalTokens / timePeriods;

        for (let j = 0; j < timePeriods; j++) {
            // Warte auf die nächste Verteilungsperiode (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const operations = beneficiaries.map((beneficiary) => {
                return mint.mintTo(
                    beneficiary.address,
                    wallet.publicKey,
                    [],
                    tokensPerPeriod * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(operations);
            console.log(`Tokens distributed for period ${j + 1}/${timePeriods}.`);
        }

        console.log('Vested token distribution completed.');
    } catch (error) {
        console.error('Error during vested token distribution:', error);
    }
};
export const releaseTokenBatches = async (mint, wallet, recipients, totalAmount, releaseCycles) => {
    try {
        const batchSize = totalAmount / releaseCycles;

        for (let k = 0; k < releaseCycles; k++) {
            // Warte auf den nächsten Release-Zyklus (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const batchTransfers = recipients.map((recipient) => {
                return mint.mintTo(
                    recipient.address,
                    wallet.publicKey,
                    [],
                    batchSize * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(batchTransfers);
            console.log(`Released token batch ${k + 1}/${releaseCycles}.`);
        }

        console.log('All token batches released.');
    } catch (error) {
        console.error('Error during token batch release:', error);
    }
};


export const createKeypair = () => {
    const privateKeyArray = bs58.decode(config.walletPrivateKey);
    return Keypair.fromSecretKey(privateKeyArray);
};
