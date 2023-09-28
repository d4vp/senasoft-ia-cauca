import { Component } from '@angular/core';
import { AzureService } from '../azure.service';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.css']
})

export class AzureComponent {

  // Variables Imagenes
  selectedFile: File | null = null; // Almacenar el archivo adjuntado
  imageUrl = ''; // Almacenar la URL escrita
  predictionResult = '';

  resultado = '';

  // Variables traductor
  textoTraducir = '';
  lenguajeSeleccionado = '';
  resultadoTraductor = '';

  constructor(
    private azureService: AzureService,
    private translateService: TranslateService,

  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
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
              console.log('la imagen coincide con: ')
            } else {
              console.log('No hay coincidencias con nuestras imagenes')
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

  onSubmitUrl() {
    
  }
  

  traductorTexto() {
    if (this.lenguajeSeleccionado && this.textoTraducir) {
      this.translateService
        .traductorTexto(this.textoTraducir, this.lenguajeSeleccionado)
        .then((response) => {
          this.resultadoTraductor = response.data[0].translations[0].text;
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  
}


  
