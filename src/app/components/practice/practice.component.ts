import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  public exam: String;

  constructor(private actRoute: ActivatedRoute, private questionService: QuestionService) { 
    var question_bank = this.actRoute.snapshot.params.question_bank; 
    var quiz_type  = this.actRoute.snapshot.params.quiz_type; 
    var quiz_id = this.actRoute.snapshot.params.quiz_id; 
    this.questionService.load_quiz(question_bank, quiz_type, quiz_id);
  }

  ngOnInit(): void {
  }

}
