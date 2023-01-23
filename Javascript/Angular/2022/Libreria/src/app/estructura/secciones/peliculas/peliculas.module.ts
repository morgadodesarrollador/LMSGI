import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';


@NgModule({
  declarations: [
    PeliculasComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
