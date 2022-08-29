import { Component, OnInit, Input, Output ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  valido(atributo:string): boolean {
    return this.miFormulario?.controls[atributo].invalid  && 
           this.miFormulario.controls[atributo].touched;
  }
  guardar( ){
    console.log(this.miFormulario);
  }
}
