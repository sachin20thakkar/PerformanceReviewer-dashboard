import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireStackComponent } from './hire-stack.component';

const routes: Routes = [
  {path:'', component: HireStackComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireStackRoutingModule { }
