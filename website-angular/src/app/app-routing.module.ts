import { ProjectdetailsComponent } from './detailpages/projectdetails/projectdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectlistComponent } from './detailpages/projectlist/projectlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesdetailsComponent } from './detailpages/servicesdetails/servicesdetails.component';


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
  {
    path:'service/:serviceid',component: ServicesdetailsComponent
  },
];

// ,{ scrollPositionRestoration: 'enabled' }

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: "enabled", scrollOffset: [0, 0], anchorScrolling: "enabled",})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
