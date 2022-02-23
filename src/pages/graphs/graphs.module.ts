import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsComponent } from './graphs.component';
import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphSidebarComponent } from './components/graph-sidebar/graph-sidebar.component';



@NgModule({
  declarations: [
    GraphsComponent,
    GraphSidebarComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule
  ]
})
export class GraphsModule { }
