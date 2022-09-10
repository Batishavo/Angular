import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProctectedRoutingModule } from './proctected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProctectedRoutingModule
  ]
})
export class ProctectedModule { }
