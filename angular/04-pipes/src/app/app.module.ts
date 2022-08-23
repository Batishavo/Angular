import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos personalizados
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';
//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-HN';
import localefR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEs);
registerLocaleData(localefR);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID , useValue:'es-HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
