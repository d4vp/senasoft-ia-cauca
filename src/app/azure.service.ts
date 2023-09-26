import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AzureModel } from './azureImagen.model';

@Injectable({
  providedIn: 'root'
})
export class AzureService {
  private apiUrl = 'https://senasoft-ai-cauca-translate.cognitiveservices.azure.com/';

  constructor(private http: HttpClient) {}

  post(azureModel: AzureModel):Observable<any> {
    return this.http.post(`${this.apiUrl}https://senasoft-ai-cauca-translate.cognitiveservices.azure.com/`, azureModel)
  }
}

