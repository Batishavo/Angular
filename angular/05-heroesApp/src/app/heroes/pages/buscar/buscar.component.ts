import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string='';
  heroes: Heroe [] = [];
  heroeSelecionado!: Heroe | undefined;

  constructor(private heroesSErvice: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){

    this.heroesSErvice.getSugerencias(this.termino.trim())
      .subscribe(
        (heroes) => {
          this.heroes = heroes
        }
      )
    ;
  }

  opcionSelcionada(event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value){
      this.heroeSelecionado = undefined;
      return;
    }

    if(this.heroes.length > 0){
      
      const heroe : Heroe = event.option.value;
      this.termino = heroe.superhero;
      //console.log(heroe);
      this.heroesSErvice.getHeroeById(heroe.id!)
        .subscribe(heroe => this.heroeSelecionado = heroe);
    }  

  }


}
