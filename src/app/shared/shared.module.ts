import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponentComponent} from './buttons-component/buttons-component.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonsComponentComponent],
  exports: [ButtonsComponentComponent]
})
export class SharedModule { }
