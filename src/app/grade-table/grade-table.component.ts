import { Component, Input, OnInit } from '@angular/core';
import { LessonRecord, Student, StudyData } from '../common/model';

@Component({
  selector: 'app-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.css'],
})
export class GradeTableComponent implements OnInit {
  @Input() studyData: StudyData
  
  constructor() { }

  ngOnInit(): void {
  }

  updateGradeForStudent(student:Student, index:number, grade:any) {
    let gradeAsInt = parseInt(grade, 10);
    if (gradeAsInt == NaN) {
      gradeAsInt = 0;
    }
    student.updateGrade(index, gradeAsInt)
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }
}
