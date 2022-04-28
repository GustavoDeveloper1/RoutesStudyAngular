import { NgModule } from '@angular/core';


import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TeacherComponent } from "./teacher.component"
import { ProfessoresComponent } from "./professores/professores.component"
import { TeacherDetalheComponent } from "./teacher-detalhe/teacher-detalhe.component"

const teacher_ROUTES: Routes = [ 
    {path : '',component: TeacherComponent},
    {path : 'teacher', component: ProfessoresComponent }, 
    {path : 'teacher/:id', component: TeacherDetalheComponent } ,

]

@NgModule({
    imports:[
        RouterModule.forChild(teacher_ROUTES),
        RouterModule,
    ],
        
    exports :[RouterModule]
  })

export class TeachersRoutingModule {}