/**
 * Created by: MetaMagic
 * Date: 08/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'uichart',
  templateUrl: 'uichart.component.html'
})
export class UichartComponent implements OnInit{
  uichartModel:UichartModel;
 
  constructor(private http: HttpClient) {
    this.uichartModel=new UichartModel();
       }
  ngOnInit(){
  }
 

   
}
export class UichartModel{
 }
