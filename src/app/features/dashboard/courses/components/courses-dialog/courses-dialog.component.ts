import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrl: './courses-dialog.component.css'
})
export class CoursesDialogComponent {

  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef : MatDialogRef<CoursesDialogComponent>) {

    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      starDate: [],
      endDate: [],
    })
  }
    onSubmit(): void {
      console.log(this.courseForm.value);

      this.matDialogRef.close(this.courseForm.value);
    }
}
