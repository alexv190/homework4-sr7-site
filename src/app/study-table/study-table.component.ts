import { Component, Input, OnInit } from '@angular/core';
import { LessonRecord, Student, StudyData } from '../common/model';

@Component({
  selector: 'app-study-table',
  templateUrl: './study-table.component.html',
  styleUrls: ['./study-table.component.css'],
})
export class StudyTableComponent {

  @Input() studyData: StudyData;
  editingLesson: LessonRecord;//объект Занятие, отображенный в форме для добавления

  constructor() {}

  ngOnInit(): void {
    this.editingLesson = this.studyData.createBlankLesson();
  }

  addNewLesson() {
    this.editingLesson.number = +this.editingLesson.number; //convert to int
   
    const addingResult = this.studyData.addLesson(this.editingLesson);
    if (addingResult != null) {//error
      alert(addingResult);
      return;
    }

    this.editingLesson = this.studyData.createBlankLesson();
  }

  deleteLesson(lessonId: number) {
    const lessonToDelete = this.studyData.lessonRecords.find((lesson) => {
      return lesson.id == lessonId;
    });
    if (lessonToDelete != null) {
      const deleteIndex = this.studyData.lessonRecords.indexOf(lessonToDelete)
      this.studyData.lessonRecords.splice(deleteIndex, 1);
      for (let student of this.studyData.students) {
        student.grades.splice(deleteIndex, 1)
      }
      console.log('удален ', lessonToDelete);
    } else {
      alert('Ошибка');
    }
  }

}
