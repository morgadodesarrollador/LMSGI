import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { FooterMapaComponent } from './footer-mapa/footer-mapa.component';
import { FooterContactoComponent } from './footer-contacto/footer-contacto.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    FooterComponent,
    FooterMapaComponent,
    FooterContactoComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    HeaderModule
  ]
})
export class FooterModule { }
