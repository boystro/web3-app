// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientData {
    string name;
    uint256 age;
    string info;

    // Function to add patient data
    function addPatientData(string memory _name, uint256 _age, string memory _info) public {
        name = _name;
        age = _age;
        info = _info;
    }

    // Function to get patient data
    function getPatientData() public view returns (string memory, uint256, string memory) {
        return (name, age, info);
    }
}
