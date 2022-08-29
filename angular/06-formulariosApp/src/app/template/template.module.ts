import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent,
    DinamicosComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
  ]
})
export class TemplateModule { }
