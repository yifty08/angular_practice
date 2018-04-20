import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  { Joke } from '../joke';



@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

	@Input() joke: Joke;
  @Output() doDeleteJoke = new EventEmitter<Joke>();
  answerHidden: boolean;

  constructor() { 

    this.answerHidden = true; 



    // this.joke = new Joke (
    //   "What did cheese say when it looked in mirror?",
    //   "halloumi"
    // );






  	// this.joke = {
  	// 	setup: 'What did the cheese say when it looked in the mirror?',
  	// 	punchline: 'halloumi'
  	// };

  }

  ngOnInit() {
  }

  toggle() {
    this.answerHidden = !this.answerHidden;
  }

  deleteJoke() {
    console.log('emitting doDeleteJoke for', this.joke.setup);
    this.doDeleteJoke.emit(this.joke);
  }

}













