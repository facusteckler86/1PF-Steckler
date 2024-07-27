import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    AuthComponent
  ],
  exports: [AuthComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
