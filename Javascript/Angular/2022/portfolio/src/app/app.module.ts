import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';

import { SeccionesModule } from './components/secciones/secciones.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    FooterModule,
    SeccionesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
