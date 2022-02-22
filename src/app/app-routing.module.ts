import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'pe',  loadChildren: () => import('../pages/performance-evaluation/performance-evaluation.module').then(m => m.PerformanceEvaluationModule)},
  {path:'dashboard',  loadChildren: () => import('../pages/graphs/graphs.module').then(m => m.GraphsModule)},
  {path:'hire-stack',  loadChildren: () => import('../pages/hire-stack/hire-stack.module').then(m => m.HireStackModule)},
  {path:'**', redirectTo:'pe'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
