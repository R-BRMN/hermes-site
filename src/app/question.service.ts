import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Question } from './question';
import { ObserversModule } from '@angular/cdk/observers';
// import { QUESTIONS } from './questions'
import   QUESTIONS  from './questionss.json'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private total_questions: number;
  private subject = new Subject<any>();
  private current_question: number;
  private correct_answers: number;
  private answered_questions: number;
  private score: number;
  private questions: Question []= QUESTIONS;
//   [
//   {
//     question_string: "What is 1+1?",
//     answers: ["4","2","6","7"],
//     correct_answer: "2",
//     explenation: "Simple addition",
//     qid: 55,
//     choice: "",
//     result: ""
//   },
//   {
//     question_string: "How many days in a year?",
//     answers: ["365","100","1000","1"],
//     correct_answer: "365",
//     explenation: "Takes a while to go around the sun",
//     qid: 51,
//     choice: "",
//     result: ""
//   },
//   {
//     question_string: "How old are you?",
//     answers: ["100","fdijtmxzfdlfa;as","2","not born yet"],
//     correct_answer: "100",
//     explenation: "You should know this",
//     qid: 71,
//     choice: "",
//     result: ""
//   }

// ];
constructor() {
 this.total_questions = this.questions.length;
 this.current_question = 0;
 this.correct_answers = 0;
 this.answered_questions = 0;
 this.score = 0;
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
    this.pushStats();
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
    else{
      this.prevOnFirst();
    }
    this.pushStats();
  }

  currentQuestion() {
    this.subject.next({text:"load_question", question:this.questions[this.current_question]});
  }

  advanceStats(answered_correctly) {
    this.answered_questions++;
    if (answered_correctly === true) {
      this.correct_answers++;
    }
    this.score = Math.floor(this.correct_answers / this.answered_questions * 100);
    this.pushStats();
  }

  choose(choice: string) {
    if (this.questions[this.current_question].result != "" ){
      return
    }
    this.questions[this.current_question].choice = choice;
    if (choice === this.questions[this.current_question].correct_answer) {
      this.questions[this.current_question].result = "Correct";
      this.advanceStats(true);
    }
    else {
      this.questions[this.current_question].result = "Incorrect";
      this.advanceStats(false);
    }
    this.currentQuestion();
  }

  pushStats() {
    this.subject.next({text: "new_stats",
                       stats: {
                        total_questions: this.total_questions,
                        current_question: this.current_question,
                        correct_answers: this.correct_answers,
                        answered_questions: this.answered_questions,
                        score: this.score
                       }})
  }


  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
