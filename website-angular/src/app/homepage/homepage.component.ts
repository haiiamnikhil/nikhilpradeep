import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isActive:boolean = false;
  constructor(private scroll: ScrollDispatcher) { }

  ngOnInit(): void {
    this.isActive = true;
    // this.scroll.scrolled().subscribe(response => console.log('scrolled'))
  }

}
