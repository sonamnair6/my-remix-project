// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transfer {
    function transfer(address payable recipient) public payable {
        recipient.transfer(msg.value);
    }
}
