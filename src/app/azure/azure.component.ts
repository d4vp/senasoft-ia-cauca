import { Component } from '@angular/core';
import { AzureService } from '../azure.service';
import { FormBuilder } from '@angular/forms';
import { AzureModel } from '../azureImagen.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.css']
})
export class AzureComponent {

  selectedFile: File | null = null;
  imageSelected = false;
  tag: string = "";

  constructor(private azureService: AzureService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.imageSelected = true;
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('img', this.selectedFile, this.selectedFile.name);

      this.azureService.setEndpoint('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image');

      this.azureService.postImage(formData).subscribe(
        (response) => {

          const predictions = response.predictions;

          if (predictions && predictions.length > 0) {
            const firstPrediction = predictions[0];
            const tag = firstPrediction.tagName;
            const probability = firstPrediction.probability;
            const limit = 0.9;

            if (probability > limit) {
              var porcentaje = probability * 100;
            }

            const resultadoElement = document.getElementById('resultado');

            if (resultadoElement) {
              resultadoElement.textContent = `La imagen contiene ${tag}`;
            }
          }

          console.log(response);

          
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}


  

