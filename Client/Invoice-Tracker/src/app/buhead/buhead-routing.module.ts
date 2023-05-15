import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuheadHomepageComponent } from './buhead-homepage/buhead-homepage.component';
import { BuheadLayoutComponent } from './buhead-layout/buhead-layout.component';


const routes: Routes = [
  {
    path: '', 
    
    component: BuheadLayoutComponent, 

    children: [
      { 
        path: 'home', 
        component: BuheadHomepageComponent 
      },
      
      // { path: 'booking/:id', component: AppointmentBookingComponent },
      // { path: 'appointment-history', component: AppointmentHistoryComponent},
      // { path: 'profile', component: PatientProfileComponent},
      // { path: 'appointment-details/:appointmentId/:doctorId', component: AppointmentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuheadRoutingModule { }
