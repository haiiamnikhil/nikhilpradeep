import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { AboutmeComponent } from './homepage/aboutme/aboutme.component';
import { ServicesComponent } from './homepage/services/services.component';
import { ProjectsComponent } from './homepage/projects/projects.component';
import { HiremeComponent } from './homepage/hireme/hireme.component';
import { ProjectdetailComponent } from './detailpages/projectdetail/projectdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    ServicesComponent,
    ProjectsComponent,
    HiremeComponent,
    ProjectdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
