import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  miFormulario: FormGroup= this.fb.group({
    email   :['litos@kisl.com',[Validators.required, Validators.email]],
    password:['123456',[Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  login(){
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }
}
