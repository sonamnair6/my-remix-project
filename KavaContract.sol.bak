// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract KavaContract is Ownable {
    using SafeMath for uint256;

    struct Planting {
        string location;
        string variety;
        uint256 timestamp;
    }

    struct PestControl {
        string location;
        string pestType;
        string method;
        uint256 cost;
        uint256 timestamp;
    }

    struct GrowthIssue {
        string location;
        string issueType;
        string actionTaken;
        uint256 timestamp;
    }

    struct Harvest {
        string location;
        string variety;
        uint256 amount;
        uint256 timestamp;
    }

    struct Sale {
        uint256 amount;
        uint256 price;
        uint256 timestamp;
    }

    Planting[] public plantings;
    PestControl[] public pestControls;
    GrowthIssue[] public growthIssues;
    Harvest[] public harvests;
    Sale[] public sales;

    event PlantingRecorded(string location, string variety, uint256 timestamp);
    event PestControlRecorded(string location, string pestType, string method, uint256 cost, uint256 timestamp);
    event GrowthIssueRecorded(string location, string issueType, string actionTaken, uint256 timestamp);
    event HarvestRecorded(string location, string variety, uint256 amount, uint256 timestamp);
    event SaleRecorded(uint256 amount, uint256 price, uint256 timestamp);

    function recordPlanting(string memory _location, string memory _variety) public onlyOwner {
        Planting memory newPlanting = Planting(_location, _variety, block.timestamp);
        plantings.push(newPlanting);
        emit PlantingRecorded(_location, _variety, block.timestamp);
    }

    function recordPestControl(string memory _location, string memory _pestType, string memory _method, uint256 _cost) public onlyOwner {
        PestControl memory newPestControl = PestControl(_location, _pestType, _method, _cost, block.timestamp);
        pestControls.push(newPestControl);
        emit PestControlRecorded(_location, _pestType, _method, _cost, block.timestamp);
    }

    function recordGrowthIssue(string memory _location, string memory _issueType, string memory _actionTaken) public onlyOwner {
        GrowthIssue memory newGrowthIssue = GrowthIssue(_location, _issueType, _actionTaken, block.timestamp);
        growthIssues.push(newGrowthIssue);
        emit GrowthIssueRecorded(_location, _issueType, _actionTaken, block.timestamp);
    }

    function recordHarvest(string memory _location, string memory _variety, uint256 _amount) public onlyOwner {
        Harvest memory newHarvest = Harvest(_location, _variety, _amount, block.timestamp);
        harvests.push(newHarvest);
        emit HarvestRecorded(_location, _variety, _amount, block.timestamp);
    }

    function recordSale(uint256 _amount, uint256 _price) public onlyOwner {
        Sale memory newSale = Sale(_amount, _price, block.timestamp);
        sales.push(newSale);
        emit SaleRecorded(_amount, _price, block.timestamp);
    }

    struct Packet {
        address payable sellerAddress;
        string sellerName;
        string sellerContact;
        uint256 quality;
        uint256 quantity;
        uint256 price;
        bool isSold;
    }

    Packet public kavaPacket;

    event PacketBought(address indexed buyer, uint256 price);

    // Update the constructor to accept an initial owner
    constructor() Ownable(0xCD4c773a5BA577075A3758499F22E5fBD55fDC6A) {
        // No need to call transferOwnership as it is handled by the Ownable constructor
    }

    function setKavaPacket(
        address payable _sellerAddress,
        string memory _sellerName,
        string memory _sellerContact,
        uint256 _quality,
        uint256 _quantity,
        uint256 _price
    ) public onlyOwner {
        kavaPacket = Packet(_sellerAddress, _sellerName, _sellerContact, _quality, _quantity, _price, false);
    }

    function buyKavaPacket() public payable {
        require(!kavaPacket.isSold, "Packet is already sold");
        require(msg.value >= kavaPacket.price, "Insufficient funds");

        uint256 amount = kavaPacket.price;
        kavaPacket.isSold = true;
        kavaPacket.sellerAddress.transfer(amount);

        emit PacketBought(msg.sender, amount);
    }

    function withdraw(uint256 _amount) public onlyOwner {
        require(_amount <= address(this).balance, "Insufficient contract balance");
        payable(owner()).transfer(_amount);
    }

    receive() external payable {}
}
