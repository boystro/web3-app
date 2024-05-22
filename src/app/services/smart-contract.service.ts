import { Injectable } from '@angular/core';
import { Contract } from '../model/contract.model';
import * as Web3 from 'web3';
import { Web3connectService } from './web3connect.service';
import { IPatientData, patientData } from '../contracts/PatientData';

@Injectable({
  providedIn: 'root',
})
export class SmartContractService {
  web3: any;

  constructor(private w3cService: Web3connectService) {
    this.web3 = new Web3.Web3(new Web3.HttpProvider('http://localhost:37001'));
  }

  async deployContract(): Promise<string> {
    try {
      if (this.w3cService.account == null) {
        return Promise.reject('Account not connected.');
      }
      const contract = new this.web3.eth.Contract(patientData.abi);
      const deployedContract = await contract
        .deploy({
          data: patientData.bytecode,
          arguments: [],
        })
        .send({
          from: this.w3cService.account,
          gas: '3000000',
          gasPrice: this.web3.utils.toWei('1', 'gwei'),
        });

      console.log('Contract deployed:', deployedContract);
      return deployedContract.options.address;
    } catch (err) {
      console.error('Error deploying contract:', err);
      return Promise.reject('Contract deployment failed');
    }
  }

  async addPatientData(blockAddress: string, data: IPatientData) {
    try {
      if (this.w3cService.account == null) {
        return Promise.reject('Account not connected.');
      }
      const contract = new this.web3.eth.Contract(
        patientData.abi,
        blockAddress
      );
      console.log(contract);
      const deployedContract = await contract.methods
        .set(data.name, data.age, data.info)
        .send({
          from: this.w3cService.account,
          gas: '3000000',
          gasPrice: this.web3.utils.toWei('1', 'gwei'),
        });

      console.log('Contract deployed: ', deployedContract);
    } catch (err) {
      console.error('Error deploying contract:', err);
    }
  }

  async getPatientData(blockAddress: string): Promise<IPatientData> {
    try {
      if (this.w3cService.account == null) {
        return Promise.reject('Account not connected.');
      }
      const contract = new this.web3.eth.Contract(
        patientData.abi,
        blockAddress
      );
      const deployedContract = await contract.methods.get().call({
        from: this.w3cService.account,
      });
      console.log('Contract retrieved:', deployedContract);
      return {
        name: deployedContract[0],
        age: deployedContract[1],
        info: deployedContract[2],
      };
    } catch (err) {
      console.error(err);
      return Promise.reject('Could not fetch data');
    }
  }
}
