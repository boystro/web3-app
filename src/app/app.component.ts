import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { GetContractComponent } from './components/get-contract/get-contract.component';
import { NewContractComponent } from './components/new-contract/new-contract.component';
import { Web3connectService } from './services/web3connect.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GetContractComponent,
    NewContractComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EHR | Web 3';

  constructor(@Inject(Web3connectService) private w3s: Web3connectService) {}

  get connected() {
    return this.w3s.isConnected();
  }

  get metamaskInstalled() {
    return this.w3s.doesMetaMaskExist();
  }

  get metamaskState() {
    return MetaMaskState.Connected;
    if (this.connected) return MetaMaskState.Connected;
    if (this.metamaskInstalled) return MetaMaskState.NotConnected;
    return MetaMaskState.NotInstalled;
  }

  get accountId() {
    return this.w3s.account;
  }

  connectMetamask() {
    this.w3s.connect();
  }

  getAccountIdShortened() {
    if (this.accountId)
      return this.accountId.slice(0, 7) + '...' + this.accountId.slice(-5);
    return '-';
  }
}

enum MetaMaskState {
  NotInstalled = 0,
  NotConnected = 1,
  Connected = 2,
}
