export class StudyData {
  public students: Array<Student>;
  public lessonRecords: Array<LessonRecord>;
  public lastUsedLessonId: number = 0;

  addLesson(lesson: LessonRecord):string | null {
    const editingLessonDesiredNumber = lesson.number;
    const lessonNumberAlreadyAdded = this.lessonRecords.find((lesson) => {
      return lesson.number == editingLessonDesiredNumber;
    });
    if (lessonNumberAlreadyAdded) {
      return 'Ошибка. Такой номер урока уже используется';
    }
    this.lessonRecords.push(lesson);
    //соритруем после каждого добавления по номеру урока
    this.lessonRecords.sort((lesson1, lesson2) => {
      return lesson1.number < lesson2.number
        ? -1
        : lesson1.number == lesson2.number
        ? 0
        : 1;
    });
    this.updateStudentsData();
    return null;
  }

  private updateStudentsData() {
    const lessonsCount = this.lessonRecords.length;
    for (let student of this.students) {
      while (student.grades.length < lessonsCount) {
        student.grades.push(0);
      }
      student.calcAvgGrades();
    }
  }

  createBlankLesson(): LessonRecord {
    const number = this.determineNextNumber();
    const newLesson = new LessonRecord(
      this.lastUsedLessonId + 1,
      number,
      new Date(),
      'Урок ' + number,
      '',
      ''
    );
    this.lastUsedLessonId++;
    return newLesson;
  }

  private determineNextNumber() {
    if (this.lessonRecords == null || this.lessonRecords.length == 0) {
      return 1;
    }
    const lastElement = this.lessonRecords[this.lessonRecords.length - 1];//already sorted
    return lastElement.number + 1;
  }
}

export class LessonRecord {
  constructor(
    public id: number,
    public number: number,
    public date: Date,
    public topic: string,
    public hometask: string,
    public additional: string
  ) {}
}

export class Student {
  constructor(
    public name: string,
    public grades: Array<number>,
    public average: Number = 0,
    public rounded: Number = 0,
    public additional: string
  ) {}

  calcAvgGrades() {
    let sum: number = 0;
    let gradeCount = 0;
    for (let grade of this.grades) {
      sum += grade;
      if (grade > 0) {
        gradeCount++;
      }
    }
    if (gradeCount == 0) {
      this.average = 0;
      this.rounded = 0;
      return;
    }
    this.average = sum / gradeCount;
    this.rounded = Math.round(sum / gradeCount);
  }

  updateGrade(gradeIndex: number, grade: number) {
    this.grades[gradeIndex] = grade;
    this.calcAvgGrades();
  }
}
