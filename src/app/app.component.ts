import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from 'platform-commons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private route: Router,private http : HttpClient,private ls : LocalStorageService){

  }

  ngOnInit(){

  }
}
