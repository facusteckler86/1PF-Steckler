import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
  imports: [ CommonModule,
              LoginRoutingModule,
              MatCardModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule
  ]
})
export class LoginModule { }
