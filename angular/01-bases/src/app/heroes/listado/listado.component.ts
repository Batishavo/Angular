import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})



export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'DareDevil'];
  heroe_borrado: string="";
  borrado: boolean = false;
  
  borrarHerroe() {
    
    /*this.heroe_borrado = this.heroes[this.heroes.length-1];
    this.heroes.pop();*/

    this.heroe_borrado = this.heroes.pop()|| '';

    if(this.heroe_borrado != '') {
      
      this.borrado  = true;

    }
    else{

      this.borrado = false;

    }
  
  }
}
