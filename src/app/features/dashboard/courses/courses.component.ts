import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Course } from './models';
import { generateId } from '../../../shared/utils';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  nombreCurso: "{{nombreCurso}}" | undefined;

  displayedColumns: string[] = ['id', 'name', 'starDate', "endDate", "actions"];

  dataSource : Course [] = [
    {
      id: "01",
      name: 'Angular',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: "02",
      name: 'JavaScript',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: "03",
      name: 'Java',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: "04",
      name: 'Python',
      startDate: new Date(),
      endDate: new Date(),
    }

  ];


    constructor(private matDialog: MatDialog){ }

    openDialog(): void {
      this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
        next:(value) => {
          console.log("Este es el curso que eligio: ", value);
            this.nombreCurso = value.name;

            value["id"] = generateId(4);

            this.dataSource = [...this.dataSource, value]
        }
      });
    }

    deleteCourseById(id: string){
      this.dataSource = this.dataSource.filter((el)=>el.id != id)
    }

}


