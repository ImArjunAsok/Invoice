import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagerRoutingModule } from './projectmanager-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ProjectmanagerLayoutComponent } from './projectmanager-layout/projectmanager-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomepageComponent,
    MenubarComponent,
    ProjectmanagerLayoutComponent
  ],
  imports: [
    CommonModule,
    ProjectmanagerRoutingModule, 
    FontAwesomeModule
  ]
})
export class ProjectmanagerModule { }
