import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CursosFormComponent } from './cursos-form/cursos-form.component';

@Injectable({ providedIn: 'root' })
export class CursosDeactivate implements CanDeactivate<CursosFormComponent> {
    canDeactivate(
        component: CursosFormComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("deactivate run")
        return true;
    }
}