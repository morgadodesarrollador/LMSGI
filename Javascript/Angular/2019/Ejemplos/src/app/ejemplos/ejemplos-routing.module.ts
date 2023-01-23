import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { PadreComponent } from './hermanos/padre/padre.component';
import { ProycontenidoComponent } from './proycontenido/proycontenido.component';
import { GraficasComponent } from './graficas/graficas.component';
import { CompLejanosComponent } from './comp-lejanos/comp-lejanos.component';

const routes: Routes = [
  { path: 'viewchildren', component: TablaComponent },
  { path: 'comhermanos', component: PadreComponent },
  { path: 'comlejanos',  component: CompLejanosComponent},
  { path: 'pycontenido',  component: ProycontenidoComponent},
  { path: 'graficas',  component: GraficasComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjemplosRoutingModule { }
