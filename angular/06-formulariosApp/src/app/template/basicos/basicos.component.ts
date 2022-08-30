import { Component, OnInit, Input, Output ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm ={
    producto: 'Rtx 9080',
    precio:10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  valido(atributo:string): boolean {
    return this.miFormulario?.controls[atributo].invalid  && 
           this.miFormulario.controls[atributo].touched;
  }
  guardar( ){
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      precio: 0,
      existencias:0,
      producto:'Algo'
    });
  }
}
