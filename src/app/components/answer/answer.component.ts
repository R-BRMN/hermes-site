import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  private subscription: Subscription;
  public explenation: string;
  public result: string;
  public answered: boolean;

  constructor(private quizService: QuestionService) { 
    this.subscription = this.quizService.onMessage().subscribe(message => {
      if (message.text === "load_question") {
        this.explenation = message.question.explenation;
        this.result = message.question.result;
        if (this.result != ""){
          this.answered = true;
        }
        else {
          this.answered = false;
        }
      }
    })
    this.quizService.currentQuestion();
  }



  ngOnInit(): void {
  }
}
