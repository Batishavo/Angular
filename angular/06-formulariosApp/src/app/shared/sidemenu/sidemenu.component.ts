import { Component, OnInit } from '@angular/core';

interface MenuItem{
  texto : string;
  ruta  : string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ];
  ///
  ReactiveMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },
  ];

  authMenu: MenuItem[] = [
    {
      texto: 'registro',
      ruta:'./auth/registro',
    },
    {
      texto: 'login',
      ruta:'./auth/login',
    },
  ]
}
