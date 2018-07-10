import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Login","routerLink":"core/login","selected":false},{"text":"Tempcheck","routerLink":"core/tempcheck","selected":false},{"text":"Ver","routerLink":"core/ver","selected":false},{"text":"Blankui","routerLink":"core/blankui","selected":false},{"text":"TEST","routerLink":"core/test","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
