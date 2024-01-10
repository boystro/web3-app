import { Injectable } from '@angular/core';

const requiredChainId = 999;

@Injectable({
  providedIn: 'root',
})
export class Web3connectService {
  get ethereum() {
    return (window as any).ethereum;
  }

  constructor() {}

  account?: string;
  async connect() {
    const accounts = await this.ethereum.request({
      method: 'eth_requestAccounts',
    });
    this.account = accounts[0];
    return this.account;
  }

  doesMetaMaskExist(): boolean {
    if (this.ethereum) return this.ethereum.isMetaMask;
    return false;
  }

  isConnected(): boolean {
    return this.ethereum.isConnected();
  }
}
