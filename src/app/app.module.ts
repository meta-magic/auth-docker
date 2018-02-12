import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {ProjectMsUIModule} from 'projectmsui';
import { AppRouting } from './app.routing';
import { TopBarComponent } from './topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    ProjectMsUIModule,
    AppRouting,
    AmexioWidgetModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent,TopBarComponent]
})
export class AppModule { }
