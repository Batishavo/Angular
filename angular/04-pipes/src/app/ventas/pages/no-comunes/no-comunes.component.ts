import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  //i18nSelect
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //18nPlural
  clientes: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  clientesMapa = {
    '=0': 'no tenemons ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    if (this.genero == 'femenino') {
      this.genero = 'masculino';
      this.nombre = 'Fernando';
    } else {
      this.genero = 'femenino';
      this.nombre = 'Fernanda';
    }
  }

  borrarClente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'FErnando',
    edad: 35,
    direcion: 'Ottawa, Canadá',
  };

  //JsonPipe
  heroes=[
    {
      nombre: 'Superman',
      vuela:true
    },
    {
      nombre: 'Robin',
      vuela:true
    },
    {
      nombre: 'Aquaman',
      vuela:true
    }
  ];
  //Async Pipe
  miObservable = interval(5000);//0,1,2,5 

  valorPromesa = new Promise( (resolve, reject) => {
   
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500);
  });

  constructor() {}

  ngOnInit(): void {}
}
