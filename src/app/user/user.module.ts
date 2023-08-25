import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
/*--This log will will be visible only when this module is called, which shows that this lazy loading is working. i.e, this module is loading when any route of this module is called--*/
console.log("---user module loaded---")

@NgModule({
  declarations: [
    ListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
