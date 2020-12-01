import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAndLessonsComponent } from './students-and-lessons.component';

describe('StudentsAndLessonsComponent', () => {
  let component: StudentsAndLessonsComponent;
  let fixture: ComponentFixture<StudentsAndLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAndLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAndLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
