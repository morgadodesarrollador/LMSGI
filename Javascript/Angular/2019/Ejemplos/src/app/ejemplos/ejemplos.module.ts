import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { EjemplosRoutingModule } from './ejemplos-routing.module';
import { TablaComponent } from './tabla/tabla.component';
import { FilaComponent } from './fila/fila.component';
import { PadreComponent } from './hermanos/padre/padre.component';
import { Hijo1Component } from './hermanos/hijo1/hijo1.component';
import { Hijo2Component } from './hermanos/hijo2/hijo2.component';
import { ProycontenidoComponent } from './proycontenido/proycontenido.component';
import { HijoComponent } from './proycontenido/hijo/hijo.component';
import { CproyectadoComponent } from './proycontenido/cproyectado/cproyectado.component';
import { GraficasComponent } from './graficas/graficas.component';
import { DoughnutComponent } from './graficas/doughnut/doughnut.component';
import { GraficadonaComponent } from '../components/graficadona/graficadona.component';
import { CompLejanosComponent } from './comp-lejanos/comp-lejanos.component';
import { HijoAComponent } from './comp-lejanos/hijo-a/hijo-a.component';
import { HijoBComponent } from './comp-lejanos/hijo-b/hijo-b.component';
import { NietoBComponent } from './comp-lejanos/hijoB/nieto-b/nieto-b.component';
import { NietoAComponent } from './comp-lejanos/hijoA/nieto-a/nieto-a.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TablaComponent, FilaComponent, 
    PadreComponent, Hijo1Component, Hijo2Component, 
    ProycontenidoComponent, HijoComponent, CproyectadoComponent, 
    GraficasComponent, DoughnutComponent, GraficadonaComponent, 
    CompLejanosComponent, HijoAComponent, HijoBComponent, NietoBComponent, NietoAComponent],
  imports: [
    CommonModule,
    EjemplosRoutingModule, ChartsModule, FormsModule
  ]
})
export class EjemplosModule { }
