import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ];
  regionActiva: string = '';

  continente: Country[] = [];

  constructor(private PaisService: PaisService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary  mr-1'
      : 'btn btn-primary outline-primary  mr-1';
  }



  activarRegion(region: string){
    
    this.regionActiva = region;

    this.PaisService.buscarRegion(region).subscribe(
      (paises)=>{
        this.continente = paises;
      },
      (err) => {
        //console.log('Error');
        //console.info(err);
        //this.hayError = true;
        //this.capitales = [];
      }
    );
  }

  ngOnInit(): void {}
}
