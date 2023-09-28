import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private apiKey = 'fca2800b2e3340a7bd76f6303232db2d';
  private endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';

  
  constructor() {}

  traductorTexto(text: string, language: string) {
    const headers = {
      'Ocp-Apim-Subscription-Key': this.apiKey,
      'Ocp-Apim-Subscription-Region': 'brazilsouth',
      'Content-Type': 'application/json',
    };

    const data = [
      {
        text: text,
      },
    ];

    const params = {
      to: language,
    };

    return axios.post(`${this.endpoint}&to=${language}`, data, { headers, params });
  }
}
