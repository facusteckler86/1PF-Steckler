import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';

const routes: Routes = [
  {
    path: "auth",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "courses",
        component: CoursesComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
