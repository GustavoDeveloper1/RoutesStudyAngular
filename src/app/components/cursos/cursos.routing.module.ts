import { CursosFormComponent } from './cursos-form/cursos-form.component';

import { RouterModule, CanDeactivate } from '@angular/router';
import { NgModule } from "@angular/core";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosDeactivate } from './cursoDeactivated.guard';

const cursos_Routes = [
    {
        path: '', component: CursosComponent, children: [
            {
                path: ':id',
                component: CursoDetalheComponent
            },
            {
                path: ':id/editar',
                component: CursosFormComponent,
                CanDeactivate: [CursosDeactivate]
            },
            {
                path: 'create',
                component: CursosFormComponent
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(cursos_Routes)],
    exports: [RouterModule]
})

export class CursosRoutingModule { }