// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosservisesService } from "src/app/teacherservises.service";
import { TeacherComponent } from "./teacher.component";
import { TeacherDetalheComponent } from "./teacher-detalhe/teacher-detalhe.component";
import { CommonModule } from '@angular/common';
import { TeachersRoutingModule } from './teacher.routing.module';


@NgModule({
    declarations: [
      TeacherComponent,
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