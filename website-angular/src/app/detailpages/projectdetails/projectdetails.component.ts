import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../particles-config';

declare let particlesJS:any; 

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    this.invokeParticles()
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
