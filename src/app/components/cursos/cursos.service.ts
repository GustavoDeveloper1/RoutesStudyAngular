import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: any[] = [
    { id: 2, name: 'Nodejs', teacher: 'jordan' },
    { id: 5, name: 'basket', teacher: 'paulo leman' }
  ]

  getCursos() {
    return this.cursos
  }

  getCurso(id: number) {

    let cursos = this.getCursos();

    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }

    }
    return null;

    
  }
  constructor() { }


}
