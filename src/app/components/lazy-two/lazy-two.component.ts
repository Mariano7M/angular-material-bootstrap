import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-two',
  templateUrl: './lazy-two.component.html',
  styleUrls: ['./lazy-two.component.css']
})
export class LazyTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('lazy two button');
  }
}
