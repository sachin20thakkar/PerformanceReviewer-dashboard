import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/models/section.model';
import { SECTIONS } from './question-list.constant';

@Component({
  selector: 'app-question-list-section',
  templateUrl: './question-list-section.component.html',
  styleUrls: ['./question-list-section.component.sass']
})
export class QuestionListSectionComponent implements OnInit {
  public sectionList: Section[]= [...SECTIONS];
  @Input() appliedRating:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  applyRatingToQuestion(rating:number, question?:any, sectionID?:string) {
    if(sectionID) {
      this.appliedRating[sectionID][question.id]=rating;
    }   
  }

  getRating(sectionId:string, questionId:string) {
    if(this.appliedRating[sectionId]) {
      return this.appliedRating[sectionId][questionId] || 0
    }
    return 0
  }
}
