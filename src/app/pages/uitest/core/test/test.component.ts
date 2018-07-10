/**
 * Created by: deepali arvind
 * Date: 10/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'test',
	templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit
{
	testModel:TestModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testModel=new TestModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestModel
{
}
