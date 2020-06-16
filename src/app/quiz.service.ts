import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Question } from './question';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private total_questions: number;
  private subject = new Subject<any>();
  private current_question: number;
  private questions: Question []=[
  {
    question_string: "How much is 1+1?",
    answers: ["4","2","6","7"],
    correct_answer: "2",
    explenation: "Simple addition",
    qid: 55,
    choice: "",
    result: ""
  },
  {
    question_string: "How many days in a year?",
    answers: ["365","100","1000","1"],
    correct_answer: "365",
    explenation: "Takes a while to go around the sun",
    qid: 51,
    choice: "",
    result: ""
  },
  {
    question_string: "How old are you?",
    answers: ["100","fdijtmxzfdlfa;as","2","not born yet"],
    correct_answer: "100",
    explenation: "You should know this",
    qid: 71,
    choice: "",
    result: ""
  }

];
constructor() {
 this.total_questions = this.questions.length;
 this.current_question = 0;
 this.subject.next({text:"load_question", question: this.questions[this.current_question]})
}

  nextQuestion(){
    if (this.current_question === this.total_questions - 1) {
      this.nextOnLast();
    }
    else {
      this.current_question++;
      this.currentQuestion();
    }
  }

  nextOnLast() {
    console.log ("Nowhere to go, boss");
  }

  prevOnFirst(){
    console.log("Backed to the wall here, boss");
  }

  prevQuestion(){
    if (this.current_question > 0) {
      this.current_question--;
      this.currentQuestion();
    }
  }

  currentQuestion() {
    this.subject.next({text:"load_question", question:this.questions[this.current_question]});
  }

  choose(choice: string) {
    this.questions[this.current_question].choice = choice;
    if (choice === this.questions[this.current_question].correct_answer) {
      this.questions[this.current_question].result = "Correct";
    }
    else {
      this.questions[this.current_question].result = "Incorrect";
    }
    this.currentQuestion();
  }


  onMessage(): Observable<any> {
    // return new Observable ((observer => {
    // }))
    // this.subject.next({text:"load_question", question: this.q1})
    // const quiz = new Observable((observer) => {
    //   observer.next({text:"load_question", 
    //                  question: this.questions[this.current_question]}) 
    // });

    // return quiz;
    return this.subject.asObservable();
  }

}
