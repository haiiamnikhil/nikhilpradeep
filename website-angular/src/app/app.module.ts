import { ApiServices } from './Api/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { AboutmeComponent } from './homepage/aboutme/aboutme.component';
import { ServicesComponent } from './homepage/services/services.component';
import { ProjectsComponent } from './homepage/projects/projects.component';
import { HiremeComponent } from './homepage/hireme/hireme.component';
import { ProjectlistComponent } from './detailpages/projectlist/projectlist.component';
import { ProjectdetailsComponent } from './detailpages/projectdetails/projectdetails.component';
import { ScrollingModule } from '@angular/cdk/scrolling'

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
    ProjectlistComponent,
    ProjectdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [ApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
