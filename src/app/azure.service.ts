import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  private endpoint = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image';
  private endpointUrl = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/url';
  private predictionKey = '965da2919fd14e49bd4754ed0082060a';

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

  postUrl(text: string) {
    const headers = {
      'Prediction-Key':this.predictionKey,
      'Content-Type': 'application/json'
    };

    const data = {
        Url: text,
    };

    return axios.post(this.endpointUrl, data, {headers})
  }

}

