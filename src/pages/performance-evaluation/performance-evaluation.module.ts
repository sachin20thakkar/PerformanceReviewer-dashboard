import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceEvaluationComponent } from './performance-evaluation.component';
import { PerformanceEvaluationRoutingModule } from './performance-evaluation-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AgGridModule } from 'ag-grid-angular';
import { ActionCell } from './components/custom-cell/action.cell/action.cell.renderer';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionListSectionComponent } from './components/question-list-section/question-list-section.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';


@NgModule({
  declarations: [
    PerformanceEvaluationComponent,
    UserDetailComponent,
    QuestionListSectionComponent,
    StarRatingComponent,    
  ],
  imports: [
    CommonModule,
    PerformanceEvaluationRoutingModule,
    AgGridModule,
    NgbModalModule,
    AgGridModule.withComponents(),
  ],
  bootstrap: [PerformanceEvaluationComponent]
})
export class PerformanceEvaluationModule { }
