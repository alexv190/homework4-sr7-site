import { Injectable } from '@angular/core';
import { LessonRecord, Student, StudyData } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}

  loadStudyData(): StudyData {
    let loadedStudyData = JSON.parse(
      localStorage.getItem('study')
    ) as StudyData;
    if (loadedStudyData == null || loadedStudyData == undefined) {
      loadedStudyData = new StudyData();
      loadedStudyData.lessonRecords = [];
      loadedStudyData.students = this.generateDummyData();
      console.log('не загружены studyData, тестовые данные:', loadedStudyData);
      return loadedStudyData;
    }

    const result = new StudyData();
    result.lessonRecords = loadedStudyData.lessonRecords.map(
      (x: LessonRecord) =>
        Object.assign(
          new LessonRecord(
            x.id,
            x.number,
            x.date,
            x.topic,
            x.hometask,
            x.additional
          ),
          x
        )
    );

    result.students = loadedStudyData.students.map((x: Student) =>
      Object.assign(
        new Student(x.name, x.grades, x.average, x.rounded, x.additional)
      )
    );
    result.lastUsedLessonId = loadedStudyData.lastUsedLessonId;

    return result;
  }

  saveData(studyData: StudyData) {
    localStorage.setItem('study', JSON.stringify(studyData));
  }

  private generateDummyData() {
    const students = new Array<Student>();
    students.push(this.generateNewStudent('Петров', 'Отличник'));
    students.push(this.generateNewStudent('Иванов', 'Хорошист'));
    students.push(this.generateNewStudent('Сидоров', 'Отличник'));
    return students;
  }

  private generateNewStudent(name: string, additional: string): Student {
    return new Student(name, new Array<number>(), 0, 0, additional);
  }
}
