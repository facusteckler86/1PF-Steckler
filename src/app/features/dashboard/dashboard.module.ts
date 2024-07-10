import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,MatSidenavModule,MatButtonModule,MatIconModule,MatToolbarModule,MatInputModule
  ]
})
export class DashboardModule { }
