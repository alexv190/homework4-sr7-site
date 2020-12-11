import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LessonRecord, Student, StudyData } from '../common/model';

@Component({
  selector: 'app-study-table',
  templateUrl: './study-table.component.html',
  styleUrls: ['./study-table.component.css'],
})
export class StudyTableComponent {
  inputForm: FormGroup;

  @Input() studyData: StudyData;
  editingLesson: LessonRecord; //объект Занятие, отображенный в форме для добавления

  constructor(private fb: FormBuilder) {
    this.inputForm = fb.group({
      number: '',
      date: '',
      topic: '',
      hometask: '',
      additional: '',
    });
  }

  ngOnInit(): void {
    this.editingLesson = this.studyData.createBlankLesson();
    this.updateFormFromEditingLesson();
  }

  private updateFormFromEditingLesson() {
    this.inputForm.patchValue({
      id: this.editingLesson.id,
      number: this.editingLesson.number,
      date: this.dateToYMD(this.editingLesson.date),
      topic: this.editingLesson.topic,
      hometask: this.editingLesson.hometask,
      additional: this.editingLesson.additional,
    });
  }

  dateToYMD(date:Date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

  addNewLesson() {
    const formValues = this.inputForm.getRawValue();
    this.editingLesson.number = +formValues.number; //convert to int
    this.editingLesson.date = formValues.date; 
    this.editingLesson.topic = formValues.topic;
    this.editingLesson.hometask = formValues.hometask; 
    this.editingLesson.additional = formValues.additional;

    const addingResult = this.studyData.addLesson(this.editingLesson);
    if (addingResult != null) {
      //error
      alert(addingResult);
      return;
    }

    this.editingLesson = this.studyData.createBlankLesson();
    this.updateFormFromEditingLesson();
  }

  deleteLesson(lessonId: number) {
    const lessonToDelete = this.studyData.lessonRecords.find((lesson) => {
      return lesson.id == lessonId;
    });
    if (lessonToDelete != null) {
      const deleteIndex = this.studyData.lessonRecords.indexOf(lessonToDelete);
      this.studyData.lessonRecords.splice(deleteIndex, 1);
      for (let student of this.studyData.students) {
        student.grades.splice(deleteIndex, 1);
      }
      console.log('удален ', lessonToDelete);
    } else {
      alert('Ошибка');
    }
  }
}
