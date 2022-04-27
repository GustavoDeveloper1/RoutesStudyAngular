import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosservisesService } from 'src/app/cursosservises.service';

@Component({
  selector: 'app-teacher-detalhe',
  templateUrl: './teacher-detalhe.component.html',
  styleUrls: ['./teacher-detalhe.component.scss']
})
export class TeacherDetalheComponent implements OnInit {

  id: any;
  inscricao: Subscription | any;
  teacher: any
  pagina!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosservisesService
  ) {




  }

  ngOnInit(): void {



    this.inscricao = this.route.params.subscribe(

      (params: any,) => {
        this.id = params['id']
        this.teacher = this.cursosService.getCurso(this.id)

        if(this.teacher == null) {
          this.router.navigate(['page404'])
        }


        this.pagina = params['pagina'];
      }

    )

  }

  // ngOnDestroy() {
  //   this.inscricao.unsubribe();
  // }

}
