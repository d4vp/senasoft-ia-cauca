import { Component, OnInit } from '@angular/core';
import { AzureService } from '../azure.service';
import { TranslateService } from '../translate.service';


import axios from 'axios';

@Component({

  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.css']
})

export class AzureComponent {

  // Variables Imagenes
  selectedFile: File | null = null; // Almacenar el archivo adjuntado
  imageUrl = ''; // Almacenar la URL escrita
  resultadoImagen = ''; // Almacenar el resultado de Result

  probabilidad: number = 0;
  limite: number = 0;


  // Variables traductor
  textoTraducir = ''; // Almacenar el texto a traducir
  lenguajeSeleccionado = ''; // Almacenar el lenguaje seleccionado
  resultadoTraductor = ''; // Almacenar el lenguaje traducido

  // Variables audio
  inputTextoVoz = '';
  // audioUrl = '';
  textAudio = '';
  audioBlob: Blob | null = null;
  lenguajeVozSeleccionado = '';

  constructor(
    private azureService: AzureService, // Servicio para conectar el enpoint de las imagenes
    private translateService: TranslateService, // Servicio del endpoint del traductor
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Funcion para adjuntar imagen
  onSubmit() {
    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('img', this.selectedFile, this.selectedFile.name);

      this.azureService.setEndpoint('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image');

      this.azureService.postImage(formData).subscribe(
        (response) => {

          this.probabilidad = response.predictions[0].probability;
          this.limite = 0.9;

          if (this.probabilidad > this.limite){
            this.resultadoImagen = response.predictions[0].tagName;
          } else {
            this.resultadoImagen = "Imagen no coincide con perro, pato o persona";
          }

          console.log(response.predictions);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  // Funcion para enviar la url 
  onSubmitUrl() {
    if (this.imageUrl) {
      this.azureService
       .postUrl(this.imageUrl)
       .then((response) => {

          this.probabilidad = response.data.predictions[0].probability;
          this.limite = 0.9;

          if (this.probabilidad > this.limite){
            this.resultadoImagen = response.data.predictions[0].tagName;
          } else {
            this.resultadoImagen = "Imagen no coincide con perro, pato o persona";
          }

        console.log(response.data);
       })
       .catch((error) => {
        console.error(error);
       })
    }
  }

  // Funcion para enviar el texto a traducir
  traductorTexto() {
    this.textoTraducir = this.resultadoImagen;
    console.log(this.textoTraducir);
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

  textoVoz() {
    this.textAudio = this.resultadoTraductor; // dar valor del traductor para el audio
    const subscriptionKey = 'd6784b0aa5474c1db500f7ca2a555877';

    const headers = {
      'Ocp-Apim-Subscription-Key': subscriptionKey,
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-16khz-64kbitrate-mono-mp3',
    };

    let name = ''; // Variable para el idioma de voz

    // definir la voz de acuerdo al lenguaje seleccionado
    switch (this.lenguajeVozSeleccionado) {
      case 'en-US':
        name = 'en-US-ChristopherNeural'; // Voz inglesa
        break;
      case 'fr-BE':
        name = 'fr-BE-GerardNeural'; // voz francesa
        break;
      case 'pt-BR':
        name = 'pt-BR-FabioNeural'; // Voz portuguesa
        break;
      case 'it-IT':
        name = 'it-IT-DiegoNeural'; // voz italiana
        break;
      case 'af-ZA':
        name = 'af-ZA-WillemNeural'; // voz africana
        break;
      case 'de-DE':
        name = 'de-DE-ConradNeural'; // voz alemania
        break;
      case 'ja-JP':
        name = 'ja-JP-KeitaNeural'; // Voz japon
        break;
      case 'ko-KR':
        name = 'ko-KR-GookMinNeural'; // Voz corea
        break;
      case 'id-ID':
        name = 'id-ID-ArdiNeural'; // Voz indones
        break;
      default:
    }

    // Enviar el texto en xml para la voz
    const xmlData = `<speak version='1.0' xml:lang='${this.lenguajeVozSeleccionado}'>
      <voice xml:lang='${this.lenguajeVozSeleccionado}' xml:gender='Male' 
      name='${name}'
      >
        ${this.textAudio}
      </voice>
    </speak>`;

    axios.post('https://eastus.tts.speech.microsoft.com/cognitiveservices/v1', xmlData, {
      headers,
      responseType: 'blob', // Respuesta Blob
    }).then((response) => {
      // Almacenar el Blob generado
      this.audioBlob = new Blob([response.data], { type: 'audio/mpeg' });

      // Crea una URL
      const audioUrl = URL.createObjectURL(this.audioBlob);

      // Enlace de descarga
      const downloadLink = document.createElement('a');
      downloadLink.href = audioUrl;
      downloadLink.download = 'audio.mp3';
      downloadLink.click();
    }).catch((error) => {
      console.error('Error al convertir texto a audio:', error);
    });
  }

  
}

