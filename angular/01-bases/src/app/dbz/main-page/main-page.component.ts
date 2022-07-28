import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {

  nuevo: Personaje = {

    nombre: 'Maetro Roshi',
    poder: 1000

  }

  constructor( ){}
 

}
