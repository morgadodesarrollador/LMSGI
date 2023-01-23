import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { IncremetadorComponent } from './incremetador/incremetador.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProgresoComponent, IncremetadorComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
