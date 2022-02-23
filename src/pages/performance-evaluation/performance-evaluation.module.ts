import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceEvaluationComponent } from './performance-evaluation.component';
import { PerformanceEvaluationRoutingModule } from './performance-evaluation-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    PerformanceEvaluationComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    PerformanceEvaluationRoutingModule,
    AgGridModule
  ],
  bootstrap: [PerformanceEvaluationComponent]
})
export class PerformanceEvaluationModule { }
