/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/login', loadChildren: './../pages/uitest/core/login/login.module#LoginModule'
     	},	
	     	{
     	path: 'core/tempcheck', loadChildren: './../pages/uitest/core/tempcheck/tempcheck.module#TempcheckModule'
     	},	
	     	{
     	path: 'core/ver', loadChildren: './../pages/uitest/core/ver/ver.module#VerModule'
     	},	
	     	{
     	path: 'core/blankui', loadChildren: './../pages/uitest/core/blankui/blankui.module#BlankuiModule'
     	},	
	     	{
     	path: 'core/test', loadChildren: './../pages/uitest/core/test/test.module#TestModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}