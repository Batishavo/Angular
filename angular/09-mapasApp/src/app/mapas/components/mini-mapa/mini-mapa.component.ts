import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() lngLat:[number,number]=[0,0];
  @ViewChild('mapa') divMapa!:ElementRef;

  constructor() { }
  
  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.lngLat,
      zoom:13,
      interactive:false
    });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(mapa)
    ; 
  }
}
