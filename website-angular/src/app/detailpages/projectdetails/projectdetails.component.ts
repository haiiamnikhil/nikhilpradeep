import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServices } from 'src/app/Api/api.service';
import { ParticlesConfig } from '../../particles-config';

declare let particlesJS:any; 

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  
  data:any = []
  heading:string
  tagline:string
  tech:any =[]

  constructor(private api:ApiServices, private activeRouter: ActivatedRoute) { }

  ngOnInit(){
    let projectName = this.activeRouter.snapshot.paramMap.get('projectid');
    console.log(projectName)
    this.api.getProject(projectName).subscribe(response => {
      if (response.status){
        this.heading = response.data[0].projectHeading
        this.tagline = response.data[0].projectTagline
        this.data.push(response.data[0])
        this.tech.push(response.tech)
        console.log(this.tech[0])
      }
    },err => console.log(err));
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
