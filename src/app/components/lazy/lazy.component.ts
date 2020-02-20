import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialog(): void {
    console.log('lazy one button');

  }
}
