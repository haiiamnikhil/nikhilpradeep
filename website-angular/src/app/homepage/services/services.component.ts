import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/Api/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services:any = []

  constructor( private api: ApiServices, private router: Router) { }

  ngOnInit() {
    this.api.listServices().subscribe(response => {
      if (response.status){
        this.services.push(response.data)
      }
    }, err => console.log(err))
  }

  selectedService(serviceId:any){
    this.router.navigate(['/service',serviceId])
  }

}
