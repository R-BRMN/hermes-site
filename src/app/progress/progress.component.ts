import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizService } from '../quiz.service';
import { Question } from '../question';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  subscription: Subscription;
  private message: string;
  public total_answered: number;
  public total_questions = 10;

  constructor(private quizService: QuizService) {
    this.subscription = this.quizService.onMessage().subscribe(message => {
      if (message.text === "new_question") {
        this.total_answered++;
      }
    });
  } 

  ngOnInit(): void {
    this.total_questions = 10;
    this.total_answered = 4;
  }

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }
  

  prevQuestion(): void {
    this.quizService.prevQuestion();
  }

}
