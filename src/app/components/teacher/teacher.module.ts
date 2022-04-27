// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosservisesService } from "src/app/cursosservises.service";
import { CursosComponent } from "./cursos.component";
import { TeacherDetalheComponent } from "./teacher-detalhe/teacher-detalhe.component";
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teacher.routing.module';


@NgModule({
    declarations: [
        CursosComponent,
        TeacherDetalheComponent,
        // CursosservisesService
      ],
      imports: [
        // RouterModule,
        TeachersRoutingModule,
        CommonModule
      ],
      providers: [CursosservisesService],
      bootstrap: []
  })

export class TeacherModule{}