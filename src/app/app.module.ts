
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import {PlatformCommmonsModule} from "platform-commons";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRouting,
    PlatformCommmonsModule,
    AmexioWidgetModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
