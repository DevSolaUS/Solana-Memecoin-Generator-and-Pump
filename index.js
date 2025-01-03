import { main } from './src/main.js';

export const createVestingPlan = async (mint, wallet, recipients, totalAmount, vestingPeriods) => {
    try {
        const vestingAmount = totalAmount / vestingPeriods;

        for (let i = 0; i < vestingPeriods; i++) {
            // Warte auf den nächsten Vesting-Zeitraum (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            // Token an die Empfänger verteilen
            const transactions = recipients.map((recipient) => {
                return mint.mintTo(
                    recipient.address,
                    wallet.publicKey,
                    [],
                    vestingAmount * Math.pow(10, mint.decimals) // Anteil pro Periode
                );
            });

            await Promise.all(transactions);
            console.log(`Distributed vesting amount for period ${i + 1}/${vestingPeriods}.`);
        }

        console.log('Vesting plan completed.');
    } catch (error) {
        console.error('Error during token vesting:', error);
    }
};


main();
