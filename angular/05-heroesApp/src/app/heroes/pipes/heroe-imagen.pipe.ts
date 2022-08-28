import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name : 'heroeImagen',
})
export class HeroeImagenPipe implements PipeTransform {

  transform(heroe: Heroe):string {

    //console.log('pipe');

    if((!heroe.id && !heroe.alt_img) || heroe.alt_img?.length === 0){
      return 'assets/no-image.png';
    }
    else if( heroe.alt_img){
      return heroe.alt_img;
    }
    else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
    
  }

}
