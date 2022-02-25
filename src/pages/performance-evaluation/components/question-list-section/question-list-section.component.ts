import { Component, OnInit } from '@angular/core';
import { Section } from 'src/models/section.model';
import { SECTIONS } from './question-list.constant';

@Component({
  selector: 'app-question-list-section',
  templateUrl: './question-list-section.component.html',
  styleUrls: ['./question-list-section.component.sass']
})
export class QuestionListSectionComponent implements OnInit {
  public sectionList: Section[]= SECTIONS;
  constructor() { }

  ngOnInit(): void {
  }

  applyRatingToQuestion(rating:number, question?:any) {
    question.rating = rating;
  }
}
