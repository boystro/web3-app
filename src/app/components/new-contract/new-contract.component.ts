import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  setFile(e: any) {
    if (e.target.files) {
      this.file = e.target.files[0];
    }
  }

  submitContract() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.info);
    console.log(this.fileName);
    console.log(this.file);
  }
}
