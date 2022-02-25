import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireStackComponent } from './hire-stack.component';
import { HireStackRoutingModule } from './hire-stack-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HireStackComponent
  ],
  imports: [
    CommonModule,
    HireStackRoutingModule,
    AgGridModule,
    FormsModule

  ]
})
export class HireStackModule { }
