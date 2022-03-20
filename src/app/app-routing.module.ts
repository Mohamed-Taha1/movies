import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthonGuard } from './authon.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersondetailComponent } from './persondetail/persondetail.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailComponent } from './tvdetail/tvdetail.component';

const routes: Routes = [
  // {path:'', redirectTo:"/login", pathMatch :"full" },
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent , canActivate:[AuthonGuard]},
  {path:"about", component:AboutComponent, canActivate: [AuthonGuard]},
  {path:"movies", component:MoviesComponent , canActivate:[AuthonGuard]},
  {path:"tv", component:TvComponent ,canActivate:[AuthonGuard]},
  {path:"contact", component:ContactComponent,canActivate:[AuthonGuard]},
  {path:"moviedetail/:id", component:MoviedetailComponent,canActivate:[AuthonGuard]},
  {path:"tvdetail/:id", component:TvdetailComponent,canActivate:[AuthonGuard]},
  {path:"persondetail/:id", component:PersondetailComponent,canActivate:[AuthonGuard]},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
