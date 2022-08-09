import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponce, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey      : string   = '0MvYF9rtiPMeYoVceDKiJyduOSFlLYLI';
  private servicioUrl : string   = 'https://api.giphy.com/v1/gifs';
  private _historial  : string[] = [];

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

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',query);

    //console.log(params);

    this._http.get<SearchGifsResponce>(`${ this.servicioUrl }/search`, { params } )
    .subscribe((res) => {
       
      //console.log(res.data);

      this.resultados = res.data;     
      //Response.data[0]. 
    });
    
    //console.log(this._historial);

  }
}
