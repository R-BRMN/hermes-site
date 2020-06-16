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
  public correct_answer: string;
  public qid: number;
  public question_string: string;
  public answers: string [];
  public answered: boolean = false;
  public choice: string;

  constructor(private quizService: QuizService) { 
   this.subscription = this.quizService.onMessage().subscribe(message => {
    if (message.text === "load_question") {
      this.qid = message.question.qid;
      this.correct_answer = message.question.correct_answer;
      this.question_string = message.question.question_string;
      this.answers = message.question.answers;
      this.choice = message.question.choice;
      if (message.question.result != "") {
        this.answered = true;
      }
      else {
        this.answered = false;
      }
    }
   });
   this.quizService.currentQuestion();
  }

  userChoice(choice) {
    this.quizService.choose(choice)
  }

  ngOnInit(): void {
  }
}
