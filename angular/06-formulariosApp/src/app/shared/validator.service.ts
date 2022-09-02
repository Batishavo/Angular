import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  constructor() { }
  
  noPuedeSerStrider(control:FormControl):ValidationErrors | null{
    const valor = control.value?.trim().toLowerCase();
    
    if(valor === 'strider'){
      //return valor
      return{
        noStrider : true
      }
    }

    return null;

  }

  
}
