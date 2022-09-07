import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private  _baseUrl : string = environment.urlDb; 

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosRedesSociales(){
    return this.http.get(`${this._baseUrl}grafica`);
  }
}
