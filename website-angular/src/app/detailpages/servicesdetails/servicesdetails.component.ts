import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from 'src/app/Api/api.service';
import { ParticlesConfig } from '../../particles-config';

declare let particlesJS:any

@Component({
  selector: 'app-servicesdetails',
  templateUrl: './servicesdetails.component.html',
  styleUrls: ['./servicesdetails.component.css']
})
export class ServicesdetailsComponent implements OnInit {

  safeHtml:SafeHtml
  serviceDetails:any = []
  serviceHeading:string

  constructor(private activeRoute : ActivatedRoute, private api : ApiServices, private domSanitizer : DomSanitizer) { }

  ngOnInit(){
    let serviceId = this.activeRoute.snapshot.paramMap.get('serviceid')
    this.invokeParticles();
    this.api.serviceDetails(serviceId).subscribe(response => {
      if (response.status){
        this.serviceDetails.push(response.data[0].description)
        this.serviceHeading = response.data[0].detailedHeading
        this.safeHtml = this.domSanitizer.bypassSecurityTrustHtml(this.serviceDetails)
      }
    },err => console.log(err))
  }

  public invokeParticles(): void {
      particlesJS('particles-js', ParticlesConfig, function() {});
    }
}