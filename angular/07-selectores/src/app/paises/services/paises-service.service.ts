import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private _baseUrl: string = 'https://restcountries.com/v2/region';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[]{
    return [...this._regiones];
  }

  constructor(
    private http: HttpClient
  ) { }

  getPaisePorRegion(region: string):Observable<PaisSmall[]>{
    const url: string = `${this._baseUrl}/${region}?fields=name,alpha3Code`;
    return this.http.get<PaisSmall[]>(url);
  }
}
