import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-buttons',
  templateUrl: './joke-buttons.component.html',
  styleUrls: ['./joke-buttons.component.css']
})
export class JokeButtonsComponent implements OnInit {
  inactive: boolean = false;
  position: string = "";

  constructor() { }

  ngOnInit() {
  }

  movePosition() {
    if(this.position === "containerRight"){
      this.position = "containerLeft";
    } else {
      this.position = "containerRight"
    }
  }

}
