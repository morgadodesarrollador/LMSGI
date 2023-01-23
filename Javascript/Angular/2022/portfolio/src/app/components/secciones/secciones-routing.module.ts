import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { QsoyComponent } from './qsoy/qsoy.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
  { path: 'quiensoy', component: QsoyComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
