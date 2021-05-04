import { Component, OnInit } from '@angular/core';
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

  constructor(private activeRoute : ActivatedRoute, private api : ApiServices) { }

  ngOnInit(){
    let serviceId = this.activeRoute.snapshot.paramMap.get('serviceid')
    this.invokeParticles();
  }

  public invokeParticles(): void {
      particlesJS('particles-js', ParticlesConfig, function() {});
    }
}