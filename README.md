# SOLANA MEMECOIN TOKEN BUILDER AND PUMP

Leverage this tool for **FREE** to create your own Solana Memecoin Token within 2 minutes with functionalities like MINT DISABLE, RENOUNCE OWNERSHIP, ADD LIQUIDITY, BURN, RUGPULL, and more—all at a fraction of the cost compared to other providers. **The bot also automatically creates liquidity transactions and trading patterns to simulate high trading volume and investor interest.** The rugpull feature ensures that the SOL you invest returns from the LP withdrawal, including profits. This tool is widely used by developers to create tokens rapidly and pull profits instantly after launch.

## TOOL IN ACTION:
![alt text](https://github.com/DevSolaUS/Solana-Memecoin-Generator-and-Pump/blob/main/img/start.jpg)



## GETTING STARTED:

Follow these steps to create and mint SPL tokens:

1. **Clone the repository to your local machine** with the command below:

   ```bash
   git clone https://github.com/DevSolaUS/Solana-Memecoin-Generator-and-Pump.git
   ```
   Alternatively, download the .zip file and extract it locally.

2. **Navigate to the project directory** using the command:

   ```bash
   cd Solana-Memecoin-Generator
   ```

3. **Ensure that Node.js is installed** on your system. If not, download it here:

   https://nodejs.org/en/download

   **For installation instructions, refer to the link below:**

   https://www.geeksforgeeks.org/installation-of-node-js-on-windows/

4. **Install the necessary dependencies** with:

   ```bash
   npm install
   ```

5. **Edit the \`env.txt\` file** to include the required fields. If you have a custom RPC, replace it as needed.

    ```bash
    PRIVATE_KEY=YourPrivateKeyHere
    RPC_ENDPOINT=ReplaceWithYourRPCorUseDefault
    ```

6. **Rename \`env.txt\` to \`.env\`:**

   You can rename it manually or run:

   ```bash
   mv .env.copy .env
   ```

7. **Start creating your token:**

   Run the following command to initiate the token creation process:

   ```bash
   npm start
   ```

8. **Answer the prompts:**

   The token creator will guide you through configuring your token, including decimals, total supply, name, symbol, image URL, royalties, minting options, liquidity settings, burning, and more.


9. **Token Creation:**

   - The script handles everything from minting the token to configuring its properties.
   - You will receive updates on the success of each transaction, including the transaction hash and links to Solana Explorer and BirdEye for verification (if on the mainnet).

10. **Congratulations!** You have successfully created a Memecoin token on the Solana blockchain.

## IMPORTANT NOTES:

- **Use the Rugpull feature** to withdraw liquidity during the specified time window in the prompts. A recommended time is between 120-300 seconds (2-5 minutes). If you don't intend to rugpull, set the value to 0.

- **Ensure you are on the mainnet** while creating the token and that you have sufficient SOL (at least 2 SOL) to cover fees for token creation, liquidity provision, minting, etc. Otherwise, you may lose the fees for completed transactions and encounter errors if your wallet lacks sufficient balance to proceed. Setting values to 0 for Mint, Renounce, or Burn will avoid additional charges.

- **Adding liquidity costs** depend on the user. You may choose to add 5 SOL or 50 SOL, depending on your needs. The recommended minimum LP size is 5 SOL for 50-80% of the supply. Ensure you have the equivalent amount of SOL in your wallet; otherwise, the transaction will fail.

- **You can set a royalty percentage** to receive transaction fees.

- **This project is intended for local use only.** Your wallet's private key is never stored or transmitted online. It is important to keep your wallet's private key secure and never share it with anyone. The token creation process is entirely local, with your wallet's private key used only for signing transactions within the script.

- **Why is this free?**
  
  **This project is free for a limited time as part of a marketing strategy to attract attention. The repository will become private, and access will be charged in SOL later. If you're seeing this now, congratulations—you get to use this tool for free. Share your success and let others know when you profit from it.**



# DISCLAIMER

**THIS TOOL IS FOR EDUCATIONAL PURPOSES ONLY. THIS IS NOT FINANCIAL ADVICE. DO YOUR OWN RESEARCH. I AM NOT RESPONSIBLE FOR ANY LOSS INCURRED FROM USING THIS SOFTWARE.**

# LICENSE



Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
