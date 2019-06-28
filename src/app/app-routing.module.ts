import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Combo1Component } from './components/animated-lists/combo1/combo1.component';
import { Combo2Component } from './components/animated-lists/combo2/combo2.component';
import { Combo3Component } from './components/animated-lists/combo3/combo3.component';

const routes: Routes = [
  {
    path: 'combo/1',
    component: Combo1Component,
    data: { animation: 1 }
  },
  {
    path: 'combo/2',
    component: Combo2Component,
    data: { animation: 2 }
  },
  {
    path: 'combo/3',
    component: Combo3Component,
    data: { animation: 3 }
  },
  {
    path: '',
    redirectTo: 'combo/1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
