import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private subscription: Subscription;
  private correct_answer: string;
  public qid: number;
  public explenation: string;
  public question_string: string;
  public answers: string [];
  public answered: boolean;
  public choice: string;

  constructor(private quizService: QuizService) { 
   this.subscription = this.quizService.onMessage().subscribe(message => {
     console.log(message);
    if (message.text === "load_question") {
      this.qid = message.question.qid;
      this.explenation = message.question.explenation;
      this.correct_answer = message.question.correct_answer;
      this.question_string = message.question.question_string;
      this.answers = message.question.answers;
      this.choice = message.question.choice;
      if (this.choice === this.correct_answer) {
        this.answered = true;
      }
    }
   });
   console.log("nice");
   this.quizService.currentQuestion();
  }

  userChoice(choice) {
    this.quizService.choose(choice)
  }

  ngOnInit(): void {
  }
}
