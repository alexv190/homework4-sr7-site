import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../common/data-provider.service';
import { LessonRecord, Student, StudyData } from '../common/model';

@Component({
  selector: 'app-students-and-lessons',
  templateUrl: './students-and-lessons.component.html',
  styleUrls: ['./students-and-lessons.component.css']
})
export class StudentsAndLessonsComponent implements OnInit {

  studyData:StudyData;

  constructor(private dataProvider: DataProviderService) {
    this.studyData = this.dataProvider.loadStudyData();
  }

  ngOnInit(): void {
   
  }

  saveData() {
    this.dataProvider.saveData(this.studyData);
  }
}
