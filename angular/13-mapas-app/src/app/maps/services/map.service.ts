import { Injectable } from '@angular/core';
import {LngLatLike, Map} from 'mapbox-gl'

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  private _map? : Map ;

  get isMapReady(){
    return !!this._map;
  }

  setMap(map:Map){
    this._map = map;
  }

  flyTo(coords:LngLatLike){
    if(!this.isMapReady){
      throw Error("El mapa no esta inicializado");
    }

    this._map?.flyTo({
      zoom:14,
      center:coords
    });
  }
}
