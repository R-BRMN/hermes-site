import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/question.service';
import { Subscription } from 'rxjs';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private subscription: Subscription;
  @Input() sidenav;
  @Input() title;

  constructor(private quizService: QuestionService) { 
    this.subscription = this.quizService.onMessage().subscribe(message => {
      this.title = message.stats.title
    });
    this.quizService.pushStats();
    console.log(this.sidenav);
    }

  @Output() navToggleEvent = new EventEmitter<string>();

  public toggle() {
    this.sidenav.toggle();
  }

  ngOnInit(): void {
  }

}
