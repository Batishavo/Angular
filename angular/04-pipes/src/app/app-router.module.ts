import { NgModule, Component } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes =[
  {
    path:'',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path:'numeros',
    component: NumerosComponent,
  },
  {
    path:'no-comunes',
    component:NumerosComponent,
  },
  {
    path:'ordenar',
    component:OrdenarComponent
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
