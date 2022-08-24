import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes=[
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    //component: ErrorPageComponent
    redirectTo:'404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)   
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
