import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature, PlacesResponse } from '../interfaces/palces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?: [number, number] ;
  public isLoadingPlaces: boolean = false ;
  public places: Feature[]=[];

  get isUserLocationReady():boolean{
    return !!this.userLocation;
  }

  constructor(
    private _http: HttpClient
  ) {
    this.getUserLocation();
  }

  public async getUserLocation (): Promise<[number, number]>{
    return new Promise((resolve,reject) =>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=> {
          this.userLocation =[coords.longitude , coords.latitude];
          resolve(this.userLocation);
        },
        (err)=>{
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query:string =''){
    //todo : evaluar cuando el query es nulo
    this.isLoadingPlaces=true;

    this._http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?limit=1&types=place%2Cpostcode%2Caddress%2Clocality%2Cdistrict%2Cneighborhood%2Cpoi&language=es&access_token=pk.eyJ1IjoiYmF0aXNoYXZvIiwiYSI6ImNsN3A5ZWZuczJqdmUzdXFwM2dscHNqdGUifQ.M8A9zWlCO3ycLl6mcZJW1g`)
    .subscribe(resp=>{
      console.log(resp.features);
      this.isLoadingPlaces=false;
      this.places= resp.features;
    });
  
  }

}
