/**
 * Created by ketangote on 1/3/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent, CreateProjectComponent } from 'projectmsui';
 

const routes: Routes = [
  { 
    path: 'create', component: CreateProjectComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
