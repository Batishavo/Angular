import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe, Publisher } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private ruta :string= environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.ruta}/heroes`);
  }

  getHeroeById(id : string):Observable<Heroe>{
    //console.log(id);
    return this.http.get<Heroe>(`${this.ruta}/heroes/${id}`);
    //return this.http.get<Heroe>("ttp://localhost:3000/heroes/dc-batman");
  }

  getSugerencias(termino: string):Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.ruta}/heroes?q=${termino}&_limit=5`);
  }

  agregarHeroe(heroe: Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.ruta}/heroes`,heroe);
  }
  
  actualizarHeroe(heroe: Heroe):Observable<Heroe>{
    return this.http.put<Heroe>
      (`${this.ruta}/heroes/${heroe.id}`,heroe)
    ;
  }

  borrarHeroe(id: string):Observable<any>{
    return this.http.delete<any>
      (`${this.ruta}/heroes/${id}`)
    ;
  }
}
