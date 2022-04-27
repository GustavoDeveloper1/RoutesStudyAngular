import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosservisesService {

  teachers = [{
    id: 1,
    name: "Michael Jordan",

  },
  {

    id: 2,
    name: 'Jorge Paulo Leman'
  }
  ]

  constructor() { }

  getCursos() {
    return this.teachers
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
}
