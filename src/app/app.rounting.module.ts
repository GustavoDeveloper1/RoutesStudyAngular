import { NgModule } from "@angular/core";



import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { Page404Component } from "./components/page404/page404.component"
import { CursosComponent } from "./components/teacher/cursos.component"
import { LoginComponent } from "./components/login/login.component"
import { ProfessoresComponent } from "./components/teacher/professores/professores.component"
import { TeacherDetalheComponent } from "./components/teacher/teacher-detalhe/teacher-detalhe.component"

const app_ROUTES: Routes = [ 
    {path : '',component: CursosComponent},
    {path : 'login', component: LoginComponent },
    {path : 'teacher', component: ProfessoresComponent }, 
    {path : 'teacher/:id', component: TeacherDetalheComponent } ,
    {path:'page404', component: Page404Component}
]



@NgModule ({
    imports:[RouterModule.forRoot(app_ROUTES)],
    exports:[RouterModule]
})

export class AppRoutingModule {}