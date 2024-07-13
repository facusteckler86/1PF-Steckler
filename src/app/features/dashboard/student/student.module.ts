import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [StudentComponent],

    imports: [
    CommonModule,
    StudentRoutingModule,
    MatTableModule
  ],

})
export class StudentModule { }
