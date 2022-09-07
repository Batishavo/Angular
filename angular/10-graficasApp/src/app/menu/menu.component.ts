import { Component} from '@angular/core';
import { MenuItem } from './interfaces/menuItem.iterface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  //Abbievatura de ruta grafica
  rg:string = '/graficas'
  //Inisicialisacion de interface
  menu:MenuItem[] = [
    {
      ruta:`${this.rg}/barra`,
      texto:'barra'
    },
    {
      ruta:`${this.rg}/barra-doble`,
      texto:'Barras Dobles'
    },
    {
      ruta:`${this.rg}/dona`,
      texto:'dona'
    },
    {
      ruta:`${this.rg}/dona-http`,
      texto:'Dona Http'
    },
  ];
 

}
