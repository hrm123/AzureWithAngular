import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) }, 
  { path: 'career', loadChildren: () => import('./career/career.module').then(m => m.CareerModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
