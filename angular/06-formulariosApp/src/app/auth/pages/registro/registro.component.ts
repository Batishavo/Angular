import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
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
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required,this.validatorService.noPuedeSerStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,]],
  },
  {
    validators: [this.validatorService.camposIguales('password','password2'),]
  });

  constructor(
    private fb: FormBuilder,
    private validatorService : ValidatorService,
    private emailValidator:  EmailValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre:'Litos Pro',
      email: 'test1@test.com',
      username: 'fernando_her85',
      password:'123456',
      password2:'123456'
    });

  }

  emailRequired(){
    return this.miFormulario.get('email')?.errors?.['required']
    && this.miFormulario.get('email')?.touched ;
  }
  emailFormato(){
    return this.miFormulario.get('email')?.errors?.['pattern']
    && this.miFormulario.get('email')?.touched ;
  }
  emailTomado(){
    return this.miFormulario.get('email')?.errors?.['emailTomado']
    && this.miFormulario.get('email')?.touched ;
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
