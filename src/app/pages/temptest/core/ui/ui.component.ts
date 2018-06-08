/**
 * Created by: MetaMagic
 * Date: 07/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ui',
  templateUrl: 'ui.component.html'
})
export class UiComponent implements OnInit{
  uiModel:UiModel;
 
  constructor(private http: HttpClient) {
    this.uiModel=new UiModel();
       }
  ngOnInit(){
  }
 

   
}
export class UiModel{
 }
