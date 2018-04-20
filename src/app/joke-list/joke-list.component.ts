import { Component, OnInit } from '@angular/core';
import  { Joke } from '../joke';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

	jokes: Joke[];

  constructor() { 

  	this.jokes = [

  		new Joke (
  			"Joke 1",
  			"answer 1"
  		),

  		new Joke (
  			"Joke 2",
  			"answer 2"
  		),

  		new Joke (
  			"Joke 3",
  			"answer 3"
  		)



  	];

  }

  ngOnInit() {
  }

  addJoke(joke: Joke) {
    // console.log('addJoke', joke);
    this.jokes.unshift(joke);
  }

  deleteJoke(joke: Joke) {
    console.log(joke)
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

}













