import { AfterViewInit, Component, ElementRef,ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor{
  color:string;
  marker:mapboxgl.Marker;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel:number=15;
  center:[number, number]=[-101.17886645009905,20.141749431954786];
  //Areglo de marcadores
  marcadores: MarcadorColor[]=[]; 

  constructor() { }
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:this.center,
      zoom:this.zoomLevel,
    });

    //const markerHtml:HTMLElement = document.createElement('div');
    //markerHtml.innerHTML = 'Hola mundo';
    /*new mapboxgl.Marker({
      //element: markerHtml
    })
    .setLngLat(this.center)
    .addTo(this.mapa);*/
  }
  irMarcador(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
      })
      .setLngLat(this.center)
      .addTo(this.mapa)
    ;
    //console.log('XD');
    this.marcadores.push({
      color,
      marker:nuevoMarcador,
    });
  }
  agregarMarcador(){
    //this.mapa.flyTo()
  }

}
