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
  public answered_questions: number;
  public total_questions;

  constructor(private quizService: QuizService) {
    this.subscription = this.quizService.onMessage().subscribe(message => {
      if (message.text === "new_stats") {
        this.answered_questions = message.stats.answered_questions;
        this.total_questions = message.stats.total_questions;
      }
    });
  } 

  ngOnInit(): void {
  }

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }
  

  prevQuestion(): void {
    this.quizService.prevQuestion();
  }

}
