import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent 
  implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel:number=15;
  center:[number, number]=[-101.17886645009905,20.141749431954786];

  constructor() { 
    //console.log('Constructor',this.divMapa);
  }
  ngOnDestroy(): void {
    this.mapa.off('zoom',   ()=>{});
    this.mapa.off('zoomend',()=>{});
    this.mapa.off('move',   ()=>{});
  }
  
  ngAfterViewInit(): void {
    console.log('OnInit',this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLevel,
    });

    this.mapa.on('zoom',(evento)=>{
      //console.log(evento);
      //console.log(this.mapa.getZoom());
      this.zoomLevel=this.mapa.getZoom();
    });

    this.mapa.on('zoomend',(evento)=>{
      if(this.mapa.getZoom()>18){
        this.mapa.zoomTo(18);
      }
    });
    //Movimiento del mapa
    this.mapa.on('move',(event)=>{
      const target = event.target;
      const{lng,lat}= target.getCenter();
      //console.log(target.getCenter());
      this.center=[lng,lat];
    });
  }

  zoomOut(){
    //console.log('zoom out');
    //console.log('zoom out',this.divMapa);
    this.mapa.zoomOut();
    //this.zoomLevel= this.mapa.getZoom();
  }

  zoomIn(){
    //console.log('zoom in');
    this.mapa.zoomIn();
    //this.zoomLevel= this.mapa.getZoom();
  }
  zoomCambio(zoomInput: string){
    this.mapa.zoomTo(Number(zoomInput));
    //console.log(zoomInput);
  }

}
