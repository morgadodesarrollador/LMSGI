import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./components/secciones/secciones.module').then (m => m.SeccionesModule)},
  //{ path: '/libros', loadChildren: () => import('./components/secciones/libros.module').then (m => m.SeccionesModule)},
  //{ path: '/clientes', loadChildren: () => import('./components/secciones/clientes.module').then (m => m.SeccionesModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
