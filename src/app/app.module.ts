import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './components/page404/page404.component';
import { AppRoutingModule } from './app.rounting.module';
import { TeacherModule } from './components/teacher/teacher.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    TeacherModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
