import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CursosservisesService } from 'src/app/teacherservises.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

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

}
