import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required , Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)]],
    username:['',[Validators.required,this.validatorService.noPuedeSerStrider]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorService : ValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre:'Litos Pro',
      email: 'test@test.com',
      username: 'fernando_her85'
    });

  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid 
      && this.miFormulario.get(campo)?.touched ;
  }

  SubmitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
