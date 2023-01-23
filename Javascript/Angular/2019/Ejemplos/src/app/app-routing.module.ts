import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homeregister', component: HomeComponent, outlet: 'register' },
  {
    path: '',
    loadChildren: () => import('./ejemplos/ejemplos.module').then(m => m.EjemplosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
