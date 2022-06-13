// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract TestDependency {
    mapping(address => bool) allowedUser;

    function test() public {
        require(allowedUser[msg.sender], "Caller is not allowed");
    }

    function addMyselfToAllowedUser() public {
        allowedUser[msg.sender] = true;
    }
}
