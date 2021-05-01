import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/Api/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:any = []

  constructor(private router: Router, private api:ApiServices) { }

  ngOnInit(){
    
    this.api.latestProjects().subscribe(response => {
      if (response.status){
        this.projects.push(response.data)
      }
    }, err => console.log(err))
  }

  selectedProject(project:any){
    this.router.navigate(['/projects',project])
  }

}
