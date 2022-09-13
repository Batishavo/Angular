import { Component, AfterViewInit, ElementRef,ViewChild} from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(
    private _placesService:PlacesService
  ) { }

  ngAfterViewInit(): void {
    if(!this._placesService.userLocation){
      throw Error("No hay placesService.userLocation");
    }
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this._placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });
  }



}
