import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsersModule {
  id: string;
  isActive:boolean;
  username: string;
  email: string;
  mobile:number;
}
