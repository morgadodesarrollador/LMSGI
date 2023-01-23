import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderUsuarioComponent } from './header-usuario/header-usuario.component';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderMenuComponent,
    HeaderUsuarioComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
