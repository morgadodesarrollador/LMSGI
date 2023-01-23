import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'secciones', loadChildren: () => import('./estructura/secciones/secciones.module')
                          .then(m => m.SeccionesModule)},

  { path: 'peliculas', loadChildren: () => import('./estructura/secciones/peliculas/peliculas.module')
                          .then(m => m.PeliculasModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
