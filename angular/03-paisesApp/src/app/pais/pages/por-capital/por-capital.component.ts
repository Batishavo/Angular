import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    //console.log(this.termino);

    this.PaisService.buscarCapital(this.termino).subscribe(
      (paises) => {
        //console.log(paises);
        this.capitales = paises;
      },
      (err) => {
        //console.log('Error');
        //console.info(err);
        this.hayError = true;
        this.capitales = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
  }

  ngOnInit(): void {}
}
