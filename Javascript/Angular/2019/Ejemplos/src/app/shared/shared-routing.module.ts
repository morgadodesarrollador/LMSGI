import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresoComponent } from './progreso/progreso.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'progreso', component: ProgresoComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'registro', component: RegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
