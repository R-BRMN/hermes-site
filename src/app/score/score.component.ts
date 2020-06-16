import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Subscription } from 'rxjs';
import { Question } from '../question';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  subscription: Subscription;
  message: string;

  constructor(private quizService: QuizService) { 
    this.subscription = this.quizService.onMessage().subscribe(message => {
      if (message.text === "next_question") {
        this.total_answered++;
      }
      console.log(message);
    });
  }

  ngOnInit(): void {
  }


  correct = 2;
  total_questions = 12;
  total_answered = 4;
  score = Math.floor(this.correct/this.total_answered*100);
  question_index = this.total_answered+1;

}
