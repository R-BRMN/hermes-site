import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturesComponent } from './components/lectures/lectures.component';
import { StudyPlanComponent } from './components/study-plan/study-plan.component';
import { LibraryComponent } from './components/library/library.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PracticeMenuComponent } from './components/practice-menu/practice-menu.component';


const routes: Routes = [
  { path: 'practice', component: PracticeMenuComponent },
  { path: 'lectures', component: LecturesComponent },
  { path: 'study-plan', component: StudyPlanComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', redirectTo: '/practice', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
