async function loginWithMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            alert(`Logged in with MetaMask account: ${account}`);
            document.getElementById('seller-form').style.display = 'block';
        } catch (error) {
            console.error(error);
            alert('MetaMask login failed. Please try again.');
        }
    } else {
        alert('MetaMask is not installed. Please install it to log in.');
    }
}

async function addProduct() {
    const productName = document.getElementById('productName').value;
    const priceInEth = document.getElementById('priceInEth').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;
    const variety = document.getElementById('variety').value;
    const pestLocation = document.getElementById('pestLocation').value;
    const pestType = document.getElementById('pestType').value;
    const pestMethod = document.getElementById('pestMethod').value;
    const pestCost = document.getElementById('pestCost').value;
    const issueLocation = document.getElementById('issueLocation').value;
    const issueType = document.getElementById('issueType').value;
    const issueAction = document.getElementById('issueAction').value;
    const harvestLocation = document.getElementById('harvestLocation').value;
    const harvestVariety = document.getElementById('harvestVariety').value;
    const harvestAmount = document.getElementById('harvestAmount').value;
    const saleAmount = document.getElementById('saleAmount').value;
    const salePrice = document.getElementById('salePrice').value;
    const image = document.getElementById('image').files[0];
    const errorMessage = document.getElementById('error-message');

    if (!productName || !priceInEth || !quantity || !location || !variety || !pestLocation || !pestType || !pestMethod || !pestCost || !issueLocation || !issueType || !issueAction || !harvestLocation || !harvestVariety || !harvestAmount || !saleAmount || !salePrice || !image) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    // Convert image to base64
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
        const imageBase64 = reader.result;

        // Call smart contract function to add product
        const contractAddress = '0xCD4c773a5BA577075A3758499F22E5fBD55fDC6A';
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "issueType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "actionTaken",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "GrowthIssueRecorded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "variety",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "HarvestRecorded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "PacketBought",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "pestType",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "method",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cost",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "PestControlRecorded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "variety",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "PlantingRecorded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "SaleRecorded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "priceInEth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "addToCart",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyKavaPacket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cart",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "priceInEth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCart",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "priceInEth",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					}
				],
				"internalType": "struct KavaContract.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "growthIssues",
		"outputs": [
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "issueType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "actionTaken",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "harvests",
		"outputs": [
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "variety",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kavaPacket",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "sellerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "sellerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sellerContact",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quality",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isSold",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pestControls",
		"outputs": [
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pestType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "method",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "cost",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "plantings",
		"outputs": [
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "variety",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_issueType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_actionTaken",
				"type": "string"
			}
		],
		"name": "recordGrowthIssue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_variety",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "recordHarvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pestType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_method",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_cost",
				"type": "uint256"
			}
		],
		"name": "recordPestControl",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_variety",
				"type": "string"
			}
		],
		"name": "recordPlanting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "recordSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sales",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_sellerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_sellerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sellerContact",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quality",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setKavaPacket",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}

        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            try {
                const tx = await contract.addToCart(productName, ethers.utils.parseUnits(priceInEth, 'ether'), quantity);
                await tx.wait();
                
                // Record planting details
                await contract.recordPlanting(location, variety);

                // Record pest control details
                await contract.recordPestControl(pestLocation, pestType, pestMethod, ethers.utils.parseUnits(pestCost, 'ether'));

                // Record growth issue details
                await contract.recordGrowthIssue(issueLocation, issueType, issueAction);

                // Record harvest details
                await contract.recordHarvest(harvestLocation, harvestVariety, harvestAmount);

                // Record sale details
                await contract.recordSale(saleAmount, ethers.utils.parseUnits(salePrice, 'ether'));
                
                alert('Product and related details added successfully!');

                // Update the products page (assuming it fetches products from the contract)
                // This might involve refreshing the products page or calling a function to fetch the updated list
                updateProductsPage(productName, priceInEth, quantity, imageBase64);
            } catch (error) {
                console.error(error);
                errorMessage.textContent = 'Failed to add product and related details. Please try again.';
            }
        } else {
            errorMessage.textContent = 'MetaMask is not installed. Please install it to proceed.';
        }
    };
}

function updateProductsPage(name, price, quantity, image) {
    // Implement logic to update the products page with the new product details
    // This might involve refreshing the page or making an API call to fetch the updated list
}
