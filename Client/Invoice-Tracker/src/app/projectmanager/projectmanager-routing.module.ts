import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectmanagerLayoutComponent } from './projectmanager-layout/projectmanager-layout.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '', component: ProjectmanagerLayoutComponent, children: [
      { path: 'home', component: HomepageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagerRoutingModule { }
