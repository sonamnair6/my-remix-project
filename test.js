import Web3,{ providers } from 'web3';
const web3 = new Web3(new providers.HttpProvider('http://127.0.0.1:7545'));

const fetchAccounts = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts);
    } catch (error) {
        console.error('Error fetching accounts:', error);
    }
};

fetchAccounts();
import Web3 from 'web3';
const web3 = new Web3('HTTP://127.0.0.1:7545'); // Ensure Ganache is running and accessible

const sender = '0x1689c06Cef561e5DB97315d683f470A7fc974d60'; // Replace with a Ganache account address
const privateKey = '0x2486af462fe0e1f39b7db4d6cd45a1523b37452db539fee263ec17a825d60446'; // Replace with the private key of the above account
const recipient = '0xCD4c773a5BA577075A3758499F22E5fBD55fDC6A'; // Replace with your MetaMask account address
const amount = web3.utils.toWei('1', 'ether'); // Amount to send in wei

const sendTransaction = async () => {
    try {
        const nonce = await web3.eth.getTransactionCount(sender, 'latest');

        const tx = {
            from: sender,
            to: recipient,
            value: amount,
            gas: 2000000,
            nonce: nonce,
            chainId: 5777 // Match the chain ID of Ganache
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction receipt:', receipt);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
};

sendTransaction();
