import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SmartContractService } from '../../services/smart-contract.service';
import { IPatientData } from '../../contracts/PatientData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-contract',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-contract.component.html',
  styleUrl: './get-contract.component.scss',
})
export class GetContractComponent {
  patientData?: IPatientData | null;

  constructor(
    @Inject(SmartContractService) private scs: SmartContractService
  ) {}

  contractHash: string = '';
  async getContract() {
    this.patientData = await this.scs.getPatientData(this.contractHash);
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
