import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { NavHeaderComponent } from './layout/nav-header/nav-header.component';
import { NavFooterComponent } from './layout/nav-footer/nav-footer.component';

@NgModule({
  declarations: [
    UsersComponent,
    NavHeaderComponent,
    NavFooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[]
})
export class UserModule { }
