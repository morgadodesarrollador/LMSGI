import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SocialesComponent } from './sociales/sociales.component';
import { MapaComponent } from './mapa/mapa.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    SocialesComponent,
    MapaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
