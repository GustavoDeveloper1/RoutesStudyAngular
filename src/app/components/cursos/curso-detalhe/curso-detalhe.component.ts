import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  curso: any;
  inscricao!: Subscription;

  constructor(
    private router:Router,
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

  editarContato(){
    this.router.navigate(['/cursos',this.curso.id, 'editar'])
  }


}
