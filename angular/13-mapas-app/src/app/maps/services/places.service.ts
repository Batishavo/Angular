import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature, PlacesResponse } from '../interfaces/palces.interfaces';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

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
    private _placesApi: PlacesApiClient,
    private _mapService: MapService
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
    if(query.length === 0){
      this.places =[];
      this.isLoadingPlaces = false;
      return;
    }
    //todo : evaluar cuando el query es nulo
    this.isLoadingPlaces=true;

    this._placesApi.get<PlacesResponse>(`/${query}.json`,{
      params:{
        proximity: this.userLocation!.join(',')
      }
    })
    .subscribe(resp=>{
      //console.log(resp.features);
      this.isLoadingPlaces=false;
      this.places= resp.features;

      this._mapService.createMarkersFromPlaces(this.places,this.userLocation!);
    });
  
  }

  deletePlaces(){
    this.places = [];
  }

}
