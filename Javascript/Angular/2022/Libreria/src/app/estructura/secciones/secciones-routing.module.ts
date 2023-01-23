import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { QsomosComponent } from './qsomos/qsomos.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [

  { path: 'quienesomos', component: QsomosComponent },
  { path: 'services', component: ServiciosComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'contacto', component: PeliculasComponent },
  // { path: 'peliculas', component: PeliculasComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
