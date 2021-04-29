import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectdetailComponent } from './detailpages/projectdetail/projectdetail.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'projects', component: ProjectdetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
