import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule, 
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
