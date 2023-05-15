import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuheadRoutingModule } from './buhead-routing.module';
import { BuheadMenubarComponent } from './buhead-menubar/buhead-menubar.component';
import { BuheadHomepageComponent } from './buhead-homepage/buhead-homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuheadLayoutComponent } from './buhead-layout/buhead-layout.component';


@NgModule({
  declarations: [
    BuheadMenubarComponent,
    BuheadHomepageComponent,
    BuheadLayoutComponent
  ],
  imports: [
    CommonModule,
    BuheadRoutingModule,
    FontAwesomeModule
  ]
})
export class BuheadModule { }
