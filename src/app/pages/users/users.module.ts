import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';



@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
