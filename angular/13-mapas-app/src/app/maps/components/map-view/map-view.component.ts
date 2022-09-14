import { Component, AfterViewInit, ElementRef,ViewChild} from '@angular/core';
import {Map, Popup , Marker} from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(
    private _placesService:PlacesService,
    private _mapService:MapService,
  ) { }

  ngAfterViewInit(): void {
    if(!this._placesService.userLocation){
      throw Error("No hay placesService.userLocation");
    }
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this._placesService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
    .setHTML(`
      <h6>Aquie estoy</h6>
      <span>Estroy este lugar del mundo</span>
    `);

    new Marker({color:'red'})
    .setLngLat(this._placesService.userLocation)
    .setPopup(popup)
    .addTo(map);

    this._mapService.setMap(map);
  }



}

