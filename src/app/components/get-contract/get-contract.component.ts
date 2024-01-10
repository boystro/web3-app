import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SmartContractService } from '../../services/smart-contract.service';

@Component({
  selector: 'app-get-contract',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-contract.component.html',
  styleUrl: './get-contract.component.scss',
})
export class GetContractComponent {
  patientData: any;

  constructor(
    @Inject(SmartContractService) private scs: SmartContractService
  ) {}

  contractHash: string = '';
  async getContract() {
    this.patientData = dummy;
  }

  closeContract() {
    this.patientData = null;
  }
}

const dummy = {
  name: 'Indranil Das',
  age: 21,
  message:
    'He is very sick and cannot go to office tomorrow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id sagittis velit, sed sodales felis. Sed congue molestie libero, ac cursus nisi gravida ac. Suspendisse sed arcu enim. In maximus.',
};
