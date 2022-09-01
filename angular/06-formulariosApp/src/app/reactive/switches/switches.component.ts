import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  
  miFormulario:FormGroup= this.fb.group({
    cromosoma: ['XY',Validators.required],
    notificaciones:[true,Validators.required],
    codiciones:[false,Validators.requiredTrue]
  });

  persona = {
    cromosoma:'XX',
    notificaciones:true,
  }

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      codiciones:false
    });

    /*this.miFormulario.get('condicones')?.valueChanges.subscribe( newValue => {
      console.log(newValue);
    })*/
    this.miFormulario.valueChanges.subscribe( ({codiciones, ...rest}) =>{
      //delete form.codiciones;
      //console.log(form);
      //this.persona = form;
      this.persona = rest;
    });
  }

  guardar(){
    const fromValue = {...this.miFormulario.value};
    delete fromValue.codiciones;
    //console.log(fromValue);
    this.persona = fromValue;
  }
}
