import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{t
  title = 'app';

  constructor(private route: Router){
  }

  ngOnInit(){

  } 

  newProjectEventTesting(event:any){
    debugger;
    this.route.navigate(['create'])
  }
}
