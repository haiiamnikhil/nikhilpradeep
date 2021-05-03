import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/Api/api.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  
  viewMode:string = "Skills"
  aboutDescription:any
  experience:any = []
  certifications:any = []
  educations:any = []
  skills:any = []

  // public now = new Date()

  constructor(private api:ApiServices) { }

  ngOnInit(){
    this.api.aboutme().subscribe(response => {
      if (response.status){
        this.aboutDescription = response.about[0].description
        this.certifications.push(response.certification)
        this.skills.push(response.skills)
        this.experience.push(response.experience)
        this.educations.push(response.education)
        console.log(this.certifications)
        console.log(response)
      }
    },err=> console.log(err))
  }

}
