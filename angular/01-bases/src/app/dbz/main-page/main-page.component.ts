import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent  {

  personajes: Personaje[] = [
    
    {
      nombre: 'Goku',
      poder: 1500
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }

  ];

  nuevo: Personaje = {

    nombre: '',
    poder: 0

  }
  
 

}
