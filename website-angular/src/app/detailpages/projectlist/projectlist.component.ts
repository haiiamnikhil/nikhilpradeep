import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/Api/api.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  projects:any=[];
  constructor(private router: Router, private api: ApiServices) { }

  ngOnInit(){
    this.api.listProjects().subscribe(response => {
      if (response.status){
        this.projects.push(response.data)
        console.log(this.projects)
      }
    },err => console.log(err))
  }

  selectedProject(project:any){
    this.router.navigate(['/projects',project])
  }

}
