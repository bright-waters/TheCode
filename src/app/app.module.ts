import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';
import { ViewmanuComponent } from './viewmanu/viewmanu.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    ViewmanuComponent,
    ListSubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSnackBarModule
   
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  exports:[MatCardModule]
})
export class AppModule { }
