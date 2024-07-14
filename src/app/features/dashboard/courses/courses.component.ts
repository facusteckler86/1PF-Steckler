import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

export interface PeriodicElement {
  Nombre: string;
  position: number;
  Apellido: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Nombre: 'Lionel', Apellido:" Steckler"},
  {position: 2, Nombre: 'Josefina', Apellido: "Steckler"},
  {position: 3, Nombre: 'Emma', Apellido:"Steckler"},
  {position: 4, Nombre: 'Facundo', Apellido: "Steckler"},

];
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  nombreCurso: "{{nombreCurso}}" | undefined;

  displayedColumns: string[] = ['position', 'Nombre', 'Apellido'];

  dataSource = ELEMENT_DATA;

    constructor(private matDialog: MatDialog){ }

    openDialog(): void {
      this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
        next:(value) => {
          console.log("Este es el curso que eligio: ", value);
        }
      });
    }

}


