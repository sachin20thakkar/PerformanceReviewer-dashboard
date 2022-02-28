import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs.component';
import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphSidebarComponent } from './components/graph-sidebar/graph-sidebar.component';
import { ChartComponent } from './components/chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    GraphsComponent,
    GraphSidebarComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    HighchartsChartModule
  ]
})
export class GraphsModule { }
