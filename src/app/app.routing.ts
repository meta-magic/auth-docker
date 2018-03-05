/**
 * Created by ketangote on 1/3/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'dna' , loadChildren : './wrapper-modules/dna-ms/dna.wrapper.module#DNAWrapperModule'
  },
  {
    path : 'login', loadChildren: './wrapper-modules/auth-ms/auth.wrapper.module#AuthWrapperModule'
  },
  {
    path:'home',loadChildren:'./home/home.module#HomeRouting'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash : true}) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
