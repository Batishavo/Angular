import { Component } from '@angular/core';
import { MapService , PlacesService }  from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent  {

  constructor(
    private _mapService: MapService,
    private _placesServices: PlacesService
  ) { }

  goToMyLocation(){
    if(!this._placesServices.isUserLocationReady){
      throw Error('No hya hubicacion de usuario');
    }
    else if(!this._mapService.isMapReady){
      throw Error('No hay map disponible');
    }
    this._mapService.flyTo(this._placesServices.userLocation!);
  }

}
