import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  curso: any;
  inscricao!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cursosService: CursosService


  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {

        let id = params['id']
        this.curso = this.cursosService.getCurso(id)
      }
    );


  }


}
