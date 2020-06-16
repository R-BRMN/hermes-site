import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  private subscription: Subscription;
  public explenation: string;
  public result: string;

  constructor(private quizService: QuizService) { 
    this.subscription = this.quizService.onMessage().subscribe(message => {
      if (message.text === "load_question") {
        this.explenation = message.question.explenation;
        this.result = message.question.result;
      }
    })
    this.quizService.currentQuestion();
  }



  ngOnInit(): void {
  }
}
