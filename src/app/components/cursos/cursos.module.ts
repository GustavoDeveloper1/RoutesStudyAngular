import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosComponent } from './cursos.component'
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';
import { FormsModule } from '@angular/forms';

@NgModule({

    imports: [
        CommonModule,
        CursosRoutingModule,
        RouterModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursosFormComponent,
        CursoDetalheComponent,
    ],
    providers: [CursosService],

})

export class CursosModules { }