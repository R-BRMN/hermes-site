import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';
import { Subscription } from 'rxjs';
import { Question } from '../../question';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  subscription: Subscription;
  message: string;
  public current_question;
  public correct_answers;
  public score;
  public total_questions;
  public qid;

  constructor(private quizService: QuizService) { 
    this.subscription = this.quizService.onMessage().subscribe(message => {
      if (message.text === "new_stats") {
        this.total_questions = message.stats.total_questions;
        this.current_question = message.stats.current_question,
        this.correct_answers = message.stats.correct_answers,
        this.score = message.stats.score
      }
      if (message.text === "load_question") {
        this.qid = message.question.qid;
      }
    });
    this.quizService.currentQuestion();
    this.quizService.pushStats();
  }

  ngOnInit(): void {
  }


  // correct = 2;
  // total_questions = 12;
  // total_answered = 4;
  // question_index = this.total_answered+1;

}
