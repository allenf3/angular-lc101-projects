import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies: string[] = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   validEntry: boolean = true;
   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string) {
      if(!this.movies.includes(newTitle) && newTitle) {
         this.validEntry = true;
         this.movies.push(newTitle);
      } else {
         this.validEntry = false;
      }
   }
}