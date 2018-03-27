import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { MessagingService } from 'platform-commons';
/**
 * Created by pratik on 22/2/18.
 */
@Component({
selector:'home',
template:`
  <top-bar [ngStyle]="{'display' : isFullScreen ? 'none' : 'block'}"></top-bar>
  <amexio-row>
   <amexio-column  [size]="12"  [ngStyle]="{'padding-top' : isFullScreen ? '0%' : '5.7%'}">
        <div class="route-container">
          <div class="route">
    <router-outlet></router-outlet>
</div>
</div>
</amexio-column>
</amexio-row>

 
`
})
export class HomeComponent{
  isFullScreen : boolean;
  fullscreenCheck : any;
  constructor(public msgService : MessagingService){
    this.fullscreenCheck = this.checkFullScreen.bind(this);
    this.msgService.getMessage(this.fullscreenCheck);
  }


  checkFullScreen(data : any){
    if(data.data.hasOwnProperty('fullscreen')){
      debugger;
      this.isFullScreen = data.data.fullscreen;
    }
  }
}
