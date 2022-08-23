import { PipeTransform ,Pipe} from '@angular/core';
import {  Color } from '../interfaces/ventas.interfaces';

@Pipe({
    name:'color',
})

export class ColorPipe implements PipeTransform{

    transform(value: number) {
        //console.log(value);
        return Color[value] ;   
    }

}