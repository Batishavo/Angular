import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroeComponent } from './heroes/heroe/heroe.components';
import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

//Tarea
//Crear un módulo llamado ContadorModule
//Declaraciones y importaciones

@NgModule({
  declarations: [
    AppComponent
    //ContadorComponent
   // HeroeComponent,
    //ListadoComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aqui 
    ContadorModule,
    DbzModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
