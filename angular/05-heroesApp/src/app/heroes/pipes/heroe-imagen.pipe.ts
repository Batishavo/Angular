import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'heroeImagen'
})
export class HeroeImagenPipe implements PipeTransform {

  transform(heroe: Heroe):string {
    
    //console.log(heroe);

    return `assets/heroes/${heroe.id}.jpg`;
  }

}
