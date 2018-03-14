/**
 * Created by pratik on 14/2/18.
 */
import { NgModule } from '@angular/core';
import {UserMsUiModule, SignupService} from "usermsui";

@NgModule({
  imports: [UserMsUiModule],
  providers :[SignupService]
})
export class UserMSWrapperModule { }
