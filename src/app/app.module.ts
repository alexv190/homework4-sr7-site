import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudyTableComponent } from './study-table/study-table.component';
import { FormsModule } from '@angular/forms';
import { GradeTableComponent } from './grade-table/grade-table.component';
import { StudentsAndLessonsComponent } from './students-and-lessons/students-and-lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyTableComponent,
    GradeTableComponent,
    StudentsAndLessonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
