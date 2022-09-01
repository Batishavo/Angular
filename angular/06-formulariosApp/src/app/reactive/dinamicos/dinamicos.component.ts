import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array( [
      ['Metal Gear',Validators.required],
      ['No more Heroes',Validators.required]
    ] , Validators.required)

  });
  nuevoFavorito : FormControl = this.fb.control('',Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  } 

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); 
      return ;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
    this.miFormulario.controls[campo].touched;
  }
  agregarFAcorito(){
    if(this.nuevoFavorito.invalid){
      return ;
    }
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
  borrar(i: number){
    this.favoritosArr.removeAt(i);
  }
}
