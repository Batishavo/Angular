import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas : boolean = true;
  parametroOrdenamineto : string = "";
  heroes:Heroe[]=[
    {
      nombre:'Superman',
      vuela:true, 
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela:false, 
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela:false, 
      color:Color.verde
    },
    {
      nombre: 'Ironman',
      vuela:true, 
      color:Color.rojo
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  cambio(){
    this.enMayusculas = !this.enMayusculas;
  }
  cambioParametroOrdenamiento(value:string){
    this.parametroOrdenamineto = value;
  }

}
