import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListSectionComponent } from './question-list-section.component';

describe('QuestionListSectionComponent', () => {
  let component: QuestionListSectionComponent;
  let fixture: ComponentFixture<QuestionListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionListSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
