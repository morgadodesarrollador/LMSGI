import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './estructura/maqueta/footer/footer.module';
import { HeaderModule } from './estructura/maqueta/header/header.module';
import { MainModule } from './estructura/maqueta/main/main.module';
import { CommonModule } from '@angular/common';
import { PeliculasModule } from './estructura/secciones/peliculas/peliculas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PeliculasModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
