import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedProject(project:any){
    this.router.navigate(['/projects',project])
  }

}
