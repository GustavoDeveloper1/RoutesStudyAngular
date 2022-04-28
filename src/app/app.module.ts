import { TeachersGuard } from './components/teacher/teachers.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './components/page404/page404.component';
import { AppRoutingModule } from './app.rounting.module';
import { LoginService } from './components/login/login.service';
import { AuthGuard } from './_guards/auth.guard';
import { CursosGuard } from './components/cursos/cursos.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    // TeacherModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
    // CursosModules
  ],
  providers:[LoginService,AuthGuard,TeachersGuard, CursosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
