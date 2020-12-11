import { Attribute, Component } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3';
  ready: boolean = false;
  confirmAbort: boolean = false;
  takeOffEnabled: boolean = true;

  color: string = 'green';
  height: number = 0;
  width: number = 0;
  message: string = 'Space shuttle ready for takeoff!';
  upButton: boolean = true;
  downButton: boolean = true;
  leftButton: boolean = true;
  rightButton: boolean = true;



  fly() {
    this.ready = confirm("Confirm that the shuttle is ready for takeoff.")
    if(this.ready) {
      this.message = "Shuttle in flight";
      this.color = "blue";
      this.height += 10000;
      this.takeOffEnabled = false;
    }
  }

  land(rocketImage: HTMLElement) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled = true;
  }

  abort(rocketImage: HTMLElement) {
    this.confirmAbort = confirm("Are you sure you want to abort the mission?");
    if(this.confirmAbort) {
      this.message = "Mission aborted."
      this.color = "red";
      this.height = 0;
      rocketImage.style.bottom = '0px';
      this.confirmAbort = false;
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage: HTMLElement, direction: string) {
    if(direction === 'right') {
      this.leftButton = true;
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.tooClose();
      if(this.width > 460000) {
        this.rightButton = false;
      }
    } else if (direction === 'left') {
      this.rightButton = true;
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.tooClose();
      if(this.width < -10000) {
        this.leftButton = false;
      }
    } else if (direction === 'up') {
      this.downButton = true;
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.tooClose();
      if(this.height > 330000) {
        this.upButton = false;
      }
    } else if (direction ==='down') {
      this.upButton = true;
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height - 10000;
        this.tooClose();
        if(this.height < 20000) {
          this.downButton = false;
        }
    }
    
  }
  tooClose() {
    if(this.height > 320000 || this.height < 30000 || this.width < 0 || this.width > 450000) {
      this.color = "black";
    } else {
      this.color = "blue";
    }
  }
}