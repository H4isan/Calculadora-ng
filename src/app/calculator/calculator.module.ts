import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayComponenetComponent } from './display-componenet/display-componenet.component';
import { CalculatorComponent } from './calculator.component';
import {  SharedModule } from './../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DisplayComponenetComponent,
    CalculatorComponent
  ],
  exports:[CalculatorComponent]
})
export class CalculatorModule { }
