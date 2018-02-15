/**
 * Created by ketangote on 1/3/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'project', loadChildren: './wrapper-modules/project-ms/project.creation.module#ProjectMSWrapperModule'
  },
  {
    path: 'dna', loadChildren: './wrapper-modules/dna-ms/dna.wrapper.module#DNAWrapperModule'
  },
  {
    path : 'auth', loadChildren: './wrapper-modules/auth-ms/auth.wrapper.module#AuthWrapperModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash : true}) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
