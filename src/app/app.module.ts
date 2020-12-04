import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudyTableComponent } from './study-table/study-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GradeTableComponent } from './grade-table/grade-table.component';
import { StudentsAndLessonsComponent } from './students-and-lessons/students-and-lessons.component';
import { ValidateNumberDirective } from './study-table/validate-number.directive';
import { ValidateMandatoryDirective } from './study-table/validate-mandatory.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudyTableComponent,
    GradeTableComponent,
    StudentsAndLessonsComponent,
    ValidateNumberDirective,
    ValidateMandatoryDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
