import { DetailFilmsComponent } from './components/detail-films/detail-films.component';
import { PersoFilmComponent } from './components/perso-film/perso-film.component';
import { StarFilmesComponent } from './components/star-filmes/star-filmes.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'filmes' , component: StarFilmesComponent },
  { path: 'personagens' , component: PersoFilmComponent },
  { path: 'films/:id' , component: DetailFilmsComponent },
  { path: '' , redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
