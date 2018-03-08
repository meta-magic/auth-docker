import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
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
  constructor(private _route: Router, private renderer: Renderer2,private http:HttpClient){
    this.stopListening =
    renderer.listen('window', 'message', this.handleMessage.bind(this));
  //  this.getAppMenus();
   this.getProjectList();
   this.projectmenus=[];
 this.setMenus(this.menus);
this.menus= [
    {
      "featureData": null,
      "isDisable": false,
      "routerLink": "\"\"",
      "childrens": [
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/dna/boundedcontextDefinition",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "1.1",
          "text": "Bounded Context and Domain",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/dna/data-model",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "1.2",
          "text": "Model Definition",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/dna/service-integration",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "1.3",
          "text": "Service Definition",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/dna/canvas",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "1.4",
          "text": "Amexio Canvas",
          "isLeaf": true
        }
      ],
      "isHeader": true,
      "icon": "color_lens",
      "menuId": "1.",
      "text": "Dna",
      "isLeaf": false
    },
    {
      "featureData": null,
      "isDisable": false,
      "routerLink": "\"\"",
      "childrens": [
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/codepipeline/task-ui",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "2.1",
          "text": "Task Details",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/codepipeline/instance-manager",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "2.2",
          "text": "Instance Management",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/project/code-explorer",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "2.3",
          "text": "Code Explorer",
          "isLeaf": true
        }
      ],
      "isHeader": true,
      "icon": "color_lens",
      "menuId": "2.",
      "text": "Code Pipeline",
      "isLeaf": false
    },
    {
      "featureData": null,
      "isDisable": false,
      "routerLink": "\"\"",
      "childrens": [
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/user/usercreation",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "3.1",
          "text": "User Creation",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/user/approval",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "3.2",
          "text": "Approval",
          "isLeaf": true
        }
      ],
      "isHeader": true,
      "icon": "color_lens",
      "menuId": "3.",
      "text": "Admin",
      "isLeaf": false
    },
    {
      "featureData": null,
      "isDisable": false,
      "routerLink": "\"\"",
      "childrens": [
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/user/userprofile",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "4.1",
          "text": "Profile",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "home/user/password",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "4.2",
          "text": "Password Management",
          "isLeaf": true
        },
        {
          "featureData": null,
          "isDisable": false,
          "routerLink": "\"\"",
          "isHeader": false,
          "icon": "color_lens",
          "menuId": "4.3",
          "text": "Logout",
          "isLeaf": true
        }
      ],
      "isHeader": true,
      "icon": "color_lens",
      "menuId": "4.",
      "text": "Setting",
      "isLeaf": false
    }
  ]


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
        console.log('data',appData)
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
    // console.log('linkdata',event)
  //   console.log('nodelink',event.data.node);
  // console.log('nodelink1',event.data.node.routerLink);
    debugger;
     this._route.navigate([event.data.node.routerLink]);
  }
    projectLinkClick(event:any){
      if(!event.data.node.projectUUID){
      console.log('linkdata',event.data.node)
      this._route.navigate([event.data.node.routerLink]);
      }else if(event.data.node.projectUUID && event.data.node.routerLink==""){
        this.projectname=event.data.node.text;
      }

    }
    onProjectSelect(data:any){
   console.log('projdata',data);
    }
  handleMessage(event: Event) {
    let message = event as MessageEvent;
    let messagePayLoad = message.data;
    console.log(messagePayLoad);
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
