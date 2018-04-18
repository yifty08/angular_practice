import { Component, OnInit } from '@angular/core';
import  { Joke } from '../joke';



@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

	joke: Joke;

  constructor() { 

    this.joke = new Joke (
      "What did cheese say when it looked in mirror?",
      "halloumi"
    );






  	// this.joke = {
  	// 	setup: 'What did the cheese say when it looked in the mirror?',
  	// 	punchline: 'halloumi'
  	// };

  }

  ngOnInit() {
  }

}
