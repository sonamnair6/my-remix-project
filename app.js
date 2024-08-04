window.addEventListener('load', async () => {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();
      console.log('MetaMask connected');
    } catch (error) {
      console.error('User denied account access...');
    }
  } else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    console.log('MetaMask connected');
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});
