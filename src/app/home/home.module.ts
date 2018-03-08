import { HomeComponent } from './home.component';
/**
 * Created by pratik on 22/2/18.
 */
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from '../topbar.component';
import { CommonModule } from '@angular/common/';
import { PlatformCommmonsModule } from 'platform-commons';
const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
       {
        // path:'project',component: HomeComponent
     path: 'project', loadChildren : './../wrapper-modules/project-ms/project.creation.module#ProjectMSWrapperModule'
      }, {
    path: 'dna' , loadChildren : './../wrapper-modules/dna-ms/dna.wrapper.module#DNAWrapperModule'
  },
   {
    path: 'user' , loadChildren : './../wrapper-modules/user-ms/use.ms.module#UserMSWrapperModule'
  },
   {
    path: 'codepipeline' , loadChildren : './../wrapper-modules/codepipeline-ms/codepipeline.wrapper.module#CodePipeLineWrapperModule'
  }
     
    ]
  }
];


@NgModule({
  imports: [AmexioWidgetModule,CommonModule,PlatformCommmonsModule,
 RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  declarations:[HomeComponent,TopBarComponent]
})
export class HomeRouting {}
