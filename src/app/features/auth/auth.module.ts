import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,LoginModule,MatCardModule,MatIconModule
  ]
})
export class AuthModule { }
