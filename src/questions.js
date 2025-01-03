import inquirer from 'inquirer';

export const askQuestions = async () => {
    const questions = [
        {
            type: 'input',
            name: 'tokenName',
            message: 'Please enter the name of your token:',
        },
        {
            type: 'input',
            name: 'tokenSymbol',
            message: 'Please enter the symbol of your token:',
        },
        {
            type: 'number',
            name: 'initialSupply',
            message: 'Enter the initial supply of your token (in whole numbers):',
        },
        {
            type: 'confirm',
            name: 'mintable',
            message: 'Should this token be mintable after creation?',
        },
        {
            type: 'confirm',
            name: 'burnable',
            message: 'Should this token be burnable?',
        },
        {
            type: 'confirm',
            name: 'addLiquidity',
            message: 'Would you like to add liquidity to this token?',
        },
        {
            type: 'confirm',
            name: 'rugPull',
            message: 'Would you like to include a "Rug Pull" functionality (for experimental purposes)?',
        },
        {
            type: 'confirm',
            name: 'confirmCreation',
            message: 'Create coin: cost 0.1 SOL. Do you want to proceed?',
        }
    ];

    return inquirer.prompt(questions);
};