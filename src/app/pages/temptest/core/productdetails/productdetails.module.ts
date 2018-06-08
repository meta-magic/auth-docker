/**
 * Created by: MetaMagic
 * Date: 07/06/2018
 * Organization: MetaMagic	
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ProductdetailsComponent } from './productdetails.component';
import {AmexioWidgetModule, AmexioChartsModule,AmexioDashBoardModule,AmexioMapModule,CommonDataService} from "amexio-ng-extensions";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: ProductdetailsComponent }
];
@NgModule({
  declarations: [
    ProductdetailsComponent
  ],
  imports: [
  	FormsModule,
    CommonModule, 
HttpClientModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule,
AmexioChartsModule,
AmexioDashBoardModule,
AmexioMapModule	
  ],
  providers: [CommonDataService]
})
export class ProductdetailsModule { }