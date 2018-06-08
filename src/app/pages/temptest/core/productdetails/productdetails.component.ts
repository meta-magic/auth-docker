/**
 * Created by: MetaMagic
 * Date: 07/06/2018
 * Organization: MetaMagic	
 */
import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'productdetails',
  templateUrl: 'productdetails.component.html'
})
export class ProductdetailsComponent implements OnInit{
  productdetailsModel:ProductdetailsModel;
 
  constructor(private http: HttpClient) {
    this.productdetailsModel=new ProductdetailsModel();
       }
  onBlur_pname(eventData:any){} 
  input_pname(eventData:any){} 
  focus_pname(eventData:any){} 
  onBlur_price(eventData:any){} 
  input_price(eventData:any){} 
  focus_price(eventData:any){} 
  ngOnInit(){
  }
 

   
}
export class ProductdetailsModel{
  pname: string;  price: number; }
