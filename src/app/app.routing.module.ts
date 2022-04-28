import { NgModule } from '@angular/core';


import { ModuleWithProviders } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { Page404Component } from "./components/page404/page404.component"
import { LoginComponent } from "./components/login/login.component"

const app_ROUTES: Routes = [ 

    {path : 'login', component: LoginComponent },
    {path:'page404', component: Page404Component}

]






@NgModule({
    imports:[
        RouterModule.forRoot(app_ROUTES)],
    exports :[RouterModule]
  })

export class AppRoutingModule {}