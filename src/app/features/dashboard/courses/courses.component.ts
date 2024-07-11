import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  nombreCurso: "" | undefined;


    constructor(private matDialog: MatDialog){ }

    openDialog(): void {
      this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
        next:(value) => {
          console.log("Este es el curso que eligio: ", value);
        }
      });
    }

}


