import { HomeComponent } from './home.component';
/**
 * Created by pratik on 22/2/18.
 */
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from '../topbar.component';
import { CommonModule } from '@angular/common/';
import { PlatformCommmonsModule } from 'platform-commons';

@NgModule({
  imports: [AmexioWidgetModule,CommonModule,PlatformCommmonsModule, RouterModule.forChild([{path: '', component:HomeComponent,pathMatch: 'full'}]) ],
  exports: [ RouterModule ],
  declarations:[HomeComponent,TopBarComponent]
})
export class HomeRouting {}
