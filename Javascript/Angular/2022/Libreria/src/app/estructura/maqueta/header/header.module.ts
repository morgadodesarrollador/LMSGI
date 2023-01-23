import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderUsuarioComponent } from './header-usuario/header-usuario.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
    HeaderUsuarioComponent
  ],
  exports: [
    HeaderComponent,
    HeaderUsuarioComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
