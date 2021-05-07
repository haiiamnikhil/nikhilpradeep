import { ApiServices } from 'src/app/Api/api.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  resume:File

  constructor(private api :ApiServices) { }

  ngOnInit(): void {
    this.api.getResume().subscribe(response => {
      if (response.status){
        this.resume = response.data[0].resume
      }
    },err => console.log(err))
  }

}
