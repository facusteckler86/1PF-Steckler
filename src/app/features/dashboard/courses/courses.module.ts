import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDialogComponent
  ],
  exports: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIcon,
    MatDialogModule,
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule
  ]
})
export class CoursesModule { }
