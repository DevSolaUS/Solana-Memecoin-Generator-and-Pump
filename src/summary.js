export const displaySummary = (answers) => {
    console.log('\nYour token details:');
    console.log(`Token Name: ${answers.tokenName}`);
    console.log(`Token Symbol: ${answers.tokenSymbol}`);
    console.log(`Initial Supply: ${answers.initialSupply}`);
    console.log(`Mintable: ${answers.mintable ? 'Yes' : 'No'}`);
    console.log(`Burnable: ${answers.burnable ? 'Yes' : 'No'}`);
    console.log(`Add Liquidity: ${answers.addLiquidity ? 'Yes' : 'No'}`);
    console.log(`Rug Pull Functionality: ${answers.rugPull ? 'Yes' : 'No'}`);
};
export const burnTokens = async (mint, wallet, amount) => {
    try {
        const tokenAccount = await mint.getOrCreateAssociatedAccountInfo(wallet.publicKey);

        // Token verbrennen
        await mint.burn(
            tokenAccount.address, // Adresse des Kontos, das die Token verbrennt
            wallet.publicKey, // Mint authority
            [],
            amount * Math.pow(10, mint.decimals) // Anzahl der zu verbrennenden Token (berücksichtige Dezimalstellen)
        );

        console.log(`${amount} tokens burned successfully.`);
    } catch (error) {
        console.error('Error during token burning:', error);
    }
};