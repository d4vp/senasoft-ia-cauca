import { Component } from '@angular/core';
import { AzureService } from '../azure.service';
import { FormBuilder } from '@angular/forms';
import { AzureModel } from '../azureImagen.model';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.css']
})
export class AzureComponent {

  selectedFile: File | null = null;
  imageSelected = false;
  sena:string;
  soft:string;

  constructor(private azureService: AzureService) {
    this.sena = "SENA";
    this.soft = "Soft"
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.imageSelected = true;
    }
  }

  onSubmit() {
    if(this.selectedFile) {
      const formData = new FormData();
      formData.append('img', this.selectedFile);

      const azureModel = {
        img: this.selectedFile
      };

      this.azureService.post(azureModel).subscribe(
        (response) => {
          console.log("Exit", this.selectedFile)
        },
        (error) => {
          console.log("Como los dioses", this.selectedFile)
        }
      );
    }
  }

}

  

