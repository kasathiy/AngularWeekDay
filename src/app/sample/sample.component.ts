import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  static name1: string = "Hello";
  name: string = "Hello";
  blueStylePresent: boolean = false;
  showDirective: boolean = true;
  inputColor: string = "yellow";

  arrayElements: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f'];



  constructor() { }

  ngOnInit() {

  }

  getName() {
    let b: number = 20;
    return b;
  }

  setName(event) {
    console.log("Event", event);
    this.name = event.target.value;
  }



}


