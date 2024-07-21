import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {MatTableModule} from '@angular/material/table';
import { StudentComponent } from './student.component';




@NgModule({
  declarations: [StudentComponent],

    imports: [StudentComponent,
    CommonModule,
    StudentRoutingModule,
    MatTableModule
  ],

})
export class StudentModule { }
