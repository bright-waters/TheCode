import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';
import { ViewmanuComponent } from './viewmanu/viewmanu.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';


const routes: Routes = [
  { path: 'Home', component: GreetingsComponent },
  { path: 'Home/Options', component: ViewmanuComponent },
  { path: 'Home/Options/Subjects', component: ListSubjectsComponent }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [ RouterModule ],
  declarations: []


})
export class AppRoutingModule { }
