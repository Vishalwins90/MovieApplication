import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailePageComponent } from './movie-detaile-page/movie-detaile-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'detail/:id',
    component:MovieDetailePageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
