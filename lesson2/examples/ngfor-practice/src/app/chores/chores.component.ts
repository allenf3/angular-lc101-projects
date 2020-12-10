import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   todoTitles = [
      {
         name: "Yesterday's Chores",
         todos: [ "Empty dishwasher", "Start LaunchCode prep work", "Buy Groceries" ]
      },
      {
         name: "Today's Chores",
         todos: [ "Load dishwasher", "Finish LaunchCode prep work", "Buy the groceries you forgot" ]
      },
      {
         name: "Tomorrow's Chores",
         todos: [ "Empty dishwasher AGAIN", "Play with LaunchCode practice code", "Groceries, AGAIN" ]
      }];

   constructor() { }

   ngOnInit() {
   }

}
