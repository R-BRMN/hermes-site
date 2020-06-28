import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturesComponent } from './components/lectures/lectures.component';
import { StudyPlanComponent } from './components/study-plan/study-plan.component';
import { LibraryComponent } from './components/library/library.component';
import { PracticeComponent } from './components/practice/practice.component';


const routes: Routes = [
  { path: 'practice', component: PracticeComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'study-plan', component: StudyPlanComponent },
  { path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
