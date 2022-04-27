import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetalheComponent } from './teacher-detalhe.component';

describe('TeacherDetalheComponent', () => {
  let component: TeacherDetalheComponent;
  let fixture: ComponentFixture<TeacherDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
