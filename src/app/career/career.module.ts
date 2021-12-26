import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { ProfessionalComponent } from './professional/professional.component';


@NgModule({
  declarations: [
    CareerComponent,
    ProfessionalComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
