import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FactureComponent} from "./facture/facture.component";
import {PaniersComponent} from "./paniers/paniers.component";

@NgModule({
  declarations: [
    AppComponent,
    PaniersComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
