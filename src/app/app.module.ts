import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsComponentComponent } from './buttons-component/buttons-component.component';
import { DisplayComponenetComponent } from './display-componenet/display-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponentComponent,
    DisplayComponenetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
