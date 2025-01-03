import { connection } from './connection.js';

export const getBalance = async (publicKey) => {
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9; // Convert from lamports to SOL
};