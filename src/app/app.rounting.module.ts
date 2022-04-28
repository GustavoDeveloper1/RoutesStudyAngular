import { TeachersGuard } from './components/teacher/teachers.guard';
import { TeacherModule } from './components/teacher/teacher.module';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { Page404Component } from "./components/page404/page404.component"
import { LoginComponent } from "./components/login/login.component"
import { ProfessoresComponent } from "./components/teacher/professores/professores.component"
import { AuthGuard } from './_guards/auth.guard';
import { CursosGuard } from './components/cursos/cursos.guard';


const app_ROUTES: Routes = [

    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'cursos',
        loadChildren: () => import('./components/cursos/cursos.module').then(m => m.CursosModules),
        canActivate: [AuthGuard], canActivateChild: [CursosGuard]
    },
    {
        path: 'teacher',
        loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule),
        canActivate: [AuthGuard], canActivateChild: [TeachersGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'page404',
        component: Page404Component
    }
]



@NgModule({
    imports: [RouterModule.forRoot(app_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }