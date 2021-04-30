import { ProjectdetailsComponent } from './detailpages/projectdetails/projectdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectlistComponent } from './detailpages/projectlist/projectlist.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'projects', component: ProjectlistComponent
  },
  {
    path:'projects/:projectid', component: ProjectdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
