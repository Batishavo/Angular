import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  colorQueQuiero:string='green';

  miFormulario:FormGroup= this.fb.group({
    nombre:['',Validators.required]
  });

  constructor(
    private fb:FormBuilder 
  ) { }

  tieneError(campo:string):boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }
}
