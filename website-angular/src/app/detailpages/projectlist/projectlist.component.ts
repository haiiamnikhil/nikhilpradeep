import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/Api/api.service';
import { ParticlesConfig } from '../../particles-config';

declare let particlesJS:any

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projects:any=[];
  constructor(private router: Router, private api: ApiServices, private title : Title) { }

  ngOnInit(){
    this.api.listProjects().subscribe(response => {
      if (response.status){
        this.projects.push(response.data)
        this.title.setTitle('Projects')
      }
    },err => console.log(err))
    this.invokeParticles();
  }

  selectedProject(project:any){
    this.router.navigate(['/projects',project])
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
