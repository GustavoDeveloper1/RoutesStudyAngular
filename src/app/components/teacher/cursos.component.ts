import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosservisesService } from 'src/app/cursosservises.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  teachers: any[] = []
  pagina!: number;
  inscricao: Subscription = new Subscription;

  constructor(
    private cursosService: CursosservisesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teachers = this.cursosService.getCursos()
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];

        console.log(this.route)
      }
    );
  }

  // ngOndestroy() {
  //   this.inscricao.unsubscribe()
  // }

}
