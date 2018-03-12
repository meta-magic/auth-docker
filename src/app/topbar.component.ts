import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {CookieService} from 'platform-commons';

@Component({
  selector: 'top-bar',
  templateUrl : './topbar.component.html'
})
export class TopBarComponent implements OnInit{

  projectname : string;

  stopListening: Function;

  isExpandSideNav:boolean;
  menus: any[] =[];
  projectmenus:any[]=[];
  projectList:any;
  confirmdialogue:boolean;
  msgData:any[]=[];
    validationMsgArray: any = [];
  isValidateForm: boolean = false;
  constructor(private _route: Router,private cookieService:CookieService, private renderer: Renderer2,private http:HttpClient){
    this.stopListening =
    renderer.listen('window', 'message', this.handleMessage.bind(this));
   this.getAppMenus();
   this.getProjectList();
   this.projectmenus=[];
   
//  this.setMenus(this.menus);



   }
okErrorBtnClick(){
      this.isValidateForm = false;
    this.validationMsgArray = [];

}

  // THIS CODE USED FOR EXPAND AND COLLAPSED THE SIDE BAR
  onExpandIconClick(data:any){
   this.isExpandSideNav= !this.isExpandSideNav;
  }
  //THIS IS USED FOR ROUTE THE ACTUAL MODULES
  nodeClick(data:any){
    if(data.routerLink){
      this._route.navigate[data.routerLink];
    }
  }

  ngOnInit(){
  }
  getAppMenus(){
   let appData:any;
    this.http.get('/api/ide/ApplicationMenu/findApplicationMenus').subscribe(
      response=>{
        appData=response;
      //  console.log('data',appData)
      },
      error=>{

      },
      ()=>{

      this.setMenus(appData);
      }
    );
  }
  getProjectList() {
    let projectDataList: any;
    
    this.http.get('/api/project/project/findByProjectOwner').subscribe(
      response => {
        projectDataList = response;
      },
      error => {

      },
      () => {
        let projectName;
        let mainProjectList=[
       {
     "text": "Project",
     "childrens": [
       {
          "routerLink": "home/project/create",
          "text": "Create"
       }
     ]
   }
 ]
        if(projectDataList && projectDataList.response){
          projectDataList.response.forEach((obj)=>{
             let obj1={
               'text':obj.projectName,
               'projectUUID':obj.projectUUID,
                "routerLink": ""
             };
          mainProjectList[0].childrens.push(obj1);
          });
        }
        this.projectmenus = mainProjectList;

      }
    );

  }

  onNavLinkclick(data:any){
    console.log('itmData',data);
  }
   setMenus(appData: any) {
     this.menus =[];
     appData.response.forEach((opt: any)=>{
     if(!opt.isDisable){
      this.menus.push(opt);
     }
     });
   
    
  }
 
  externalLink(event:any){
    debugger;
    console.log('linkdata',event.data.node);
    if(event.data.node.text=="Model Definition" || event.data.node.text=="Service Definition" || 
event.data.node.text=="Bounded Context and Domain" || event.data.node.text=="Amexio Canvas" ||
event.data.node.text=="Code Explorer" || event.data.node.text=="Task Details") {
      if(this.projectname){
       this._route.navigate([event.data.node.routerLink]);
      }else{
        this.validationMsgArray.push('Please Select Project First ')
         this.isValidateForm=true;
      }
      }
   else if(event.data.node.routerLink && event.data.node.text!=="Logout" ){
     this._route.navigate([event.data.node.routerLink]);
    }
    if(event.data.node.text=="Logout"){
     
      this.logout();
    }
  }
  logout(){
    this.confirmdialogue=!this.confirmdialogue
  }
  checkStatus(data:any){
    console.log('statusdata',data)
    let LogoutMsg:any
   if (data === 'ok') {
        let response: any;
      const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
      this.http.post('/api/auth/login/logout',headers).subscribe(res => {
        response = res;
      }, err => {
        console.log('Error occured');
      }, () => {
        if (response.success) {
           this._route.navigate(['login']);
            this.cookieService.delete('tokenid');
           
        }
         console.log('errormsg',LogoutMsg);
      });

       }

  }
    projectLinkClick(event:any){
      if(!event.data.node.projectUUID){
     
      this._route.navigate([event.data.node.routerLink]);
      }else if(event.data.node.projectUUID && event.data.node.routerLink==""){
        this.projectname=event.data.node.text;
       
        this.onProjectSelect(event.data.node.projectUUID);
      }
     
    }
      onProjectSelect(projectUUID: any) {
        let selectProject: any;
    this.http.get('/api/project/project/selectProject?projectUUID=' + projectUUID)
      .subscribe(response => {
        selectProject = response;
    }, err => {
      console.log('Error occured');
    }, () => {
      // console.log('projid',selectProject.response);
        let newTokenid = selectProject.response.newtokenId;
       this.cookieService.set('tokenid', newTokenid);

      
    });




      }
   
  handleMessage(event: Event) {
    let message = event as MessageEvent;
    let messagePayLoad = message.data;
    // console.log(messagePayLoad);
    // let msgPayLoadObj = messagePayLoad != null ? JSON.parse(messagePayLoad) : null;
    // if(msgPayLoadObj != null && msgPayLoadObj.hasOwnProperty('ms_id')){
    //   console.log(msgPayLoadObj);
    //   console.log(JSON.parse(msgPayLoadObj));
    // }
   /* if(message.data && message.data !=undefined){
      let messagePayload = JSON.parse(message.data);

      if(messagePayload.ms_id == "project_ms")
      {
        this.projectname =  messagePayload.data.name;
        console.log(messagePayload);
      }

    }*/
  }

}
