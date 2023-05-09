import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminLayoutComponent } from './superadmin-layout/superadmin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenubarComponent } from './menubar/menubar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SuperadminLayoutComponent,
    DashboardComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    FontAwesomeModule
  ]
})
export class SuperadminModule { }
