import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasModule } from './graficas/graficas.module';

const routes: Routes = [
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module')
      .then(m=>m.GraficasModule)
  },
  {
    path: '**',
    redirectTo: 'graficas'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
