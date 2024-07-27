import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { AuthComponent } from './features/auth/auth.component';

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("./features/dashboard/dashboard.module").then((refArchivo)=> refArchivo.DashboardModule)

  },
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then((refArhivo)=> refArhivo.AuthModule)
  },
  {
    path: "login",
    loadChildren: () => import("./features/auth/login/login.module").then((refArchivo)=> refArchivo.LoginModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
