const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Web3 = require('web3');

const app = express();
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

mongoose.connect('mongodb://localhost:27017/kava_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const packetSchema = new mongoose.Schema({
    sellerName: String,
    sellerContact: String,
    sellerAddress: String,
    quality: String,
    quantity: Number,
    price: Number,
    timestamp: { type: Date, default: Date.now }
});

const Packet = mongoose.model('Packet', packetSchema);

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.post('/api/record', async (req, res) => {
    const { sellerAddress, ...packetData } = req.body;

    if (!web3.utils.isAddress(sellerAddress)) {
        return res.status(400).json({ success: false, error: 'Invalid Ethereum address' });
    }

    try {
        const packet = new Packet({ sellerAddress, ...packetData });
        await packet.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Packet.find();
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
