import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailePageComponent } from './movie-detaile-page/movie-detaile-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { unauthguard } from './core/unauth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path:'login',
  component:LoginComponent,
  canActivate:[unauthguard]
 
  },
{
  path:'dashboard',
  component:HomepageComponent,
   canActivate: [AuthGuard]
},

  {
    path:'detail/:id',
    component:MovieDetailePageComponent

  },
  {
    path:"signup",
    component:SignUpComponent,
    canActivate: [unauthguard]
   },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: '**', component:PagenotfoundComponent},
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
