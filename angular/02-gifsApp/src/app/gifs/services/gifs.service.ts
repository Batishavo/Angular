import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponce, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='0MvYF9rtiPMeYoVceDKiJyduOSFlLYLI';
  private _historial: string[]=[];

  //Todo: Cambiar any por su tipo correspondiente 
  public resultados: Gif[] = [];


  public get historial(){
    
    return [...this._historial];

  }

  constructor(private _http: HttpClient) {

    if(localStorage.getItem('historial')){

      this._historial=JSON.parse(localStorage.getItem('historial')!);
      //Resultados
      this.buscarGifs(this._historial[0]);
    }


  }

  buscarGifs(query: string=''){

   query = query.trim().toLowerCase();

    if(! this._historial.includes(query)){
      
      this._historial.unshift(query);
      
      this._historial =this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    this._http.get<SearchGifsResponce>(`https://api.giphy.com/v1/gifs/search?api_key=0MvYF9rtiPMeYoVceDKiJyduOSFlLYLI&q=${query}&limit=10`)
    .subscribe((res) => {
       
      //console.log(res.data);

      this.resultados = res.data;     
      //Response.data[0]. 
    });
    
    //console.log(this._historial);

  }
}
