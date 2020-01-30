import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './public/inicio/inicio.component';
import { PageNotFoundComponent } from './public/master-page/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'home',
    component:InicioComponent

  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'security',
    loadChildren:'./modules/security/security.module#SecurityModule'
  },

  {
    path:'**',
    component:PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
