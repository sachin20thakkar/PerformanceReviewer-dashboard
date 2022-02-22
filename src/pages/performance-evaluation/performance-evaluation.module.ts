import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceEvaluationComponent } from './performance-evaluation.component';
import { PerformanceEvaluationRoutingModule } from './performance-evaluation-routing.module';



@NgModule({
  declarations: [
    PerformanceEvaluationComponent
  ],
  imports: [
    CommonModule,
    PerformanceEvaluationRoutingModule
  ],
  bootstrap: [PerformanceEvaluationComponent]
})
export class PerformanceEvaluationModule { }
