import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SmartContractService } from '../../services/smart-contract.service';

@Component({
  selector: 'app-new-contract',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-contract.component.html',
  styleUrl: './new-contract.component.scss',
})
export class NewContractComponent {
  name = '';
  age = 0;
  info = '';
  fileName = '';
  file?: File;

  // Controls
  disableSubmitContract = false;

  constructor(private scService: SmartContractService) {}

  setFile(e: any) {
    if (e.target.files) {
      this.file = e.target.files[0];
    }
  }

  async submitContract() {
    // Function Header

    this.disableSubmitContract = true;

    // Function Body
    console.log(this.name);
    console.log(this.age);
    console.log(this.info);
    console.log(this.fileName);
    console.log(this.file);

    this.hash = await this.scService.deployContract();
    await this.scService.addPatientData(this.hash, {
      name: this.name,
      age: this.age,
      info: this.info,
    });

    // Function Footer
    this.hashCopied = false;
    this.showHash = true;
    this.disableSubmitContract = false;
  }

  showHash = false;
  hash: string | null = null;
  hashCopied = false;
  closeDialog() {
    if (this.hashCopied) {
      this.showHash = false;
    }
  }

  copyHash() {
    if (this.hash != null) {
      navigator.clipboard.writeText(this.hash);
    }
    this.hashCopied = true;
  }
}
