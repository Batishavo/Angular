import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  miFormulario: FormGroup = this.fb.group({
    nombre  :['litoss',[Validators.required, Validators.minLength(6)]],
    email   :['litos@kisl.com',[Validators.required, Validators.email]],
    password:['123456',[Validators.required, Validators.minLength(6)]],

  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  register(){
    //console.log(this.miFormulario.value);
    //console.log(this.miFormulario.valid);
    const { nombre , email , password}=this.miFormulario.value;
    this.authService.registro(nombre, email, password)
      .subscribe(resp =>{
        if(resp === true){
          this.router.navigateByUrl('/dashboard');
        }
        else{
          //Todo : mostrar mendaje de error
          Swal.fire('Error',resp,'error');
        }
      })
    ;
    
  }

}
