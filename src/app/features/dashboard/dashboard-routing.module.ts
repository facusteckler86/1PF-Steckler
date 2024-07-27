import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [


// Iba a implementar el lazy-loading en estos modulos pero me largo un error de compilacion, como
// un bucle, por eso dejo el codigo que iba a implementar, pero comentado.



{
  path: "courses",
  component: CoursesComponent
  //loadChildren: () => import ("./courses/courses.module").then((refArhivo) => refArhivo.CoursesModule)
},
{
  path: "home",
  component: HomeComponent
  //loadChildren: () => import ("./home/home.module").then((refArhivo) => refArhivo.HomeModule)
},
{
  path: "student",
  component: StudentComponent
  // loadChildren: () => import ("./student/student.module").then((refArhivo) => refArhivo.StudentModule)

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
