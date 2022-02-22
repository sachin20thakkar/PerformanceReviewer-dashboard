import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireStackComponent } from './hire-stack.component';
import { HireStackRoutingModule } from './hire-stack-routing.module';



@NgModule({
  declarations: [
    HireStackComponent
  ],
  imports: [
    CommonModule,
    HireStackRoutingModule
  ]
})
export class HireStackModule { }
