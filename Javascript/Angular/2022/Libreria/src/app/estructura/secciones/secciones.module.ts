import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { QsomosComponent } from './qsomos/qsomos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    QsomosComponent,
    ServiciosComponent,
    FormacionComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
