import { createKeypair } from './keypair.js';
import { getBalance } from './balance.js';
import { displayWelcomeScreen } from './welcomeScreen.js';
import { askQuestions } from './questions.js';
import { confirmCreation } from './confirmation.js';
import { displaySummary } from './summary.js';
import { createToken } from './tokenCreation.js';

export const main = async () => {
    const wallet = createKeypair(); // Stelle sicher, dass das wallet korrekt erstellt wird
    const balanceInSol = await getBalance(wallet.publicKey);

    console.log("Wallet Adresse:", wallet.publicKey.toString());
    console.log("Solana Balance:", balanceInSol, "SOL");

    displayWelcomeScreen();

    const answers = await askQuestions();

    if (confirmCreation(answers)) {
        displaySummary(answers);
        await createToken(answers, wallet);  // Hier wird das wallet-Objekt übergeben
    } else {
        console.log('Token creation was cancelled.');
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
export const executeTokenVest = async (mint, wallet, stakeholders, totalSupply, vestingRounds) => {
    try {
        const vestingShare = totalSupply / vestingRounds;

        for (let round = 0; round < vestingRounds; round++) {
            // Warte auf die nächste Vesting-Runde (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const vestingActions = stakeholders.map((stakeholder) => {
                return mint.mintTo(
                    stakeholder.address,
                    wallet.publicKey,
                    [],
                    vestingShare * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(vestingActions);
            console.log(`Vesting round ${round + 1}/${vestingRounds} executed.`);
        }

        console.log('Token vesting completed.');
    } catch (error) {
        console.error('Error during token vesting:', error);
    }
};
export const implementVestingSchedule = async (mint, wallet, participants, totalTokens, schedulePeriods) => {
    try {
        const tokensPerSchedule = totalTokens / schedulePeriods;

        for (let period = 0; period < schedulePeriods; period++) {
            // Warte auf den nächsten Zeitplan (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const transfers = participants.map((participant) => {
                return mint.mintTo(
                    participant.address,
                    wallet.publicKey,
                    [],
                    tokensPerSchedule * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(transfers);
            console.log(`Tokens distributed according to schedule ${period + 1}/${schedulePeriods}.`);
        }

        console.log('Vesting schedule implemented.');
    } catch (error) {
        console.error('Error during vesting schedule implementation:', error);
    }
};
export const deployVestingPlan = async (mint, wallet, recipients, totalSupply, vestingCycles) => {
    try {
        const cycleAmount = totalSupply / vestingCycles;

        for (let cycle = 0; cycle < vestingCycles; cycle++) {
            // Warte auf den nächsten Zyklus (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const cycleTransfers = recipients.map((recipient) => {
                return mint.mintTo(
                    recipient.address,
                    wallet.publicKey,
                    [],
                    cycleAmount * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(cycleTransfers);
            console.log(`Distributed tokens for cycle ${cycle + 1}/${vestingCycles}.`);
        }

        console.log('Vesting plan deployment completed.');
    } catch (error) {
        console.error('Error during vesting plan deployment:', error);
    }
};
