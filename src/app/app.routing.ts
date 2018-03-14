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
    path : 'login', loadChildren: './wrapper-modules/auth-ms/auth.wrapper.module#AuthWrapperModule'
  },
  {
    path:'home',loadChildren:'./home/home.module#HomeRouting'
  },
  {
    path: 'user' , loadChildren : './wrapper-modules/user-ms/use.ms.module#UserMSWrapperModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash : true}) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
