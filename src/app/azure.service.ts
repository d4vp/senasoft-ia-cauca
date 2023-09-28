import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
import { AzureModel } from './azureImagen.model';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  // private endpoint = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image';
  // private endpointUrl = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/url';

  // private apiKey = '965da2919fd14e49bd4754ed0082060a';

  // private endpoint = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image';
  // private endpointUrl = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/url';

  // constructor(private http: HttpClient) {}

  // clasificarImgFilee(imageFile: File) {
  //   const headers = new HttpHeaders({
  //     'Prediction-Key': this.predictionKey,
  //   });

  //   const formData = new FormData();
  //   formData.append('image', imageFile);

  //   return this.http.post(`${this.predictionUrl}/file`, formData, { headers });
  // }

  // clasificarImgFile(imageFile: File) {

  //   const headers = {
  //     'Prediction-Key': this.apiKey,
  //   };

  //   const data = [
  //     {
  //       imageFile: File,
  //     },
  //   ];

  //   return axios.post(`${this.endpoint}`, data, {headers});
  // } 


  private endpoint = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image';

  constructor(private http: HttpClient) {}

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  postImage(imageData: FormData): Observable<any> {
    if (!this.endpoint) {
      throw new Error('El endpoint no ha sido configurado. Utiliza setEndpoint() para establecerlo.');
    }

    const headers = new HttpHeaders({
      'Prediction-Key': '965da2919fd14e49bd4754ed0082060a',
    });

    return this.http.post(this.endpoint, imageData, { headers });
  }
  

  // clasificarUrl(text: string) {

  //   const headers = {
  //     'Prediction-Key': this.apiKey,
  //     'Content-Type': 'application/json',
  //   };

  //   const data = [
  //     {
  //       url: text,
  //     },
  //   ];

  //   return axios.post(`${this.endpointUrl}`, data, {headers});
  // }




  // clasificarImgUrll(imageUrl: string) {
  //   const headers = new HttpHeaders({
  //     'Prediction-Key': this.predictionKey,
  //     'Content-Type': 'application/json',
  //   });

  //   const body = {
  //     url: imageUrl,
  //   };

  //   return this.http.post(`${this.predictionUrl}/url`, body, { headers });
  // }

  // setEndpoint(endpoint: string) {
  //   this.endpoint = endpoint;
  // }

  // postImage(imageData: FormData): Observable<any> {
  //   if (!this.endpoint) {
  //     throw new Error('El endpoint no ha sido configurado. Utiliza setEndpoint() para establecerlo.');
  //   }

  //   const headers = new HttpHeaders({
  //     'Prediction-Key': '965da2919fd14e49bd4754ed0082060a',
  //   });

  //   return this.http.post(this.endpoint, imageData, { headers });
  // }

  // setEndpointUrl(endpointUrl: string) {
  //   this.endpointUrl = endpointUrl;
  // }

  // postUrl(urlData: FormData): Observable<any> {
  //   if (!this.endpointUrl) {
  //     throw new Error('El endpoint no ha sido configurado. Utiliza setEndpointUrl() para establecerlo.');
  //   }

  //   const headers = new HttpHeaders({
  //     'Prediction-Key': '965da2919fd14e49bd4754ed0082060a',
  //   });

  //   return this.http.post(this.endpointUrl, urlData, { headers });
  // }
}

