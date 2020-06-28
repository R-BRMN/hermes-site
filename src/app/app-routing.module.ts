import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturesComponent } from './components/lectures/lectures.component';
import { StudyPlanComponent } from './components/study-plan/study-plan.component';
import { LibraryComponent } from './components/library/library.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PracticeMenuComponent } from './components/practice-menu/practice-menu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChapterSelectionComponent } from './components/chapter-selection/chapter-selection.component';
import { PracticeComponent } from './components/practice/practice.component';


const routes: Routes = [
  { path: 'practice', component: PracticeMenuComponent },
  { path: 'practice/:question_bank/:quiz_type/:quiz_id', component: PracticeComponent},
  { path: 'lectures', component: LecturesComponent },
  { path: 'study-plan', component: StudyPlanComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'chapter-select', component: ChapterSelectionComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
