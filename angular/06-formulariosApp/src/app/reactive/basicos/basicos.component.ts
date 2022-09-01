import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'RTx 4080',
      precio:1600,
      existencias:10
    })
  }

  /*miFormulario: FormGroup = new FormGroup({
    nombre      : new FormControl('RTX 4080 Ti'),
    precio      : new FormControl(150),
    existencias : new FormControl(5),
  });*/
  miFormulario: FormGroup = this.fb.group({
    nombre      : ['', [Validators.required,Validators.minLength(3)]],
    precio      : [,[Validators.required,Validators.min(0)]],
    existencias : [,[Validators.required,Validators.min(0)]],
  });

  campoEsValido(campo : string){
    //console.log(campo);
    if(this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched)
    {
     return true;
    }
    else{
      return false;
    }
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); 
      return ;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }

}
