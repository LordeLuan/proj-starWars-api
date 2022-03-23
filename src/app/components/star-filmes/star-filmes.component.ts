import { Films } from './../../models/films';
import { StarWarsApiService } from './../../services/star-wars-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-star-filmes',
  templateUrl: './star-filmes.component.html',
  styleUrls: ['./star-filmes.component.scss']
})
export class StarFilmesComponent implements OnInit {

  filme: Films = new Films({});
  // listFilmes$ = new Subject<ResultFilms[]>();

  constructor(private filmesApiService: StarWarsApiService) { }

  ngOnInit(): void {
  }

  getFilmsSW(event:any){
    const numerofilme = (event.target as HTMLInputElement)?.value;

    if (numerofilme) {
    this.filmesApiService
    .getFilms(numerofilme)
    .subscribe(
      (response) => {
        //Next é um metodo do objeto do tipo Subject
        // this.listFilmes$.next(response.results);
        this.filme = response;
        console.log(response)
        this.filme.idFilme = numerofilme;
        // console.log(this.filme.idFilme)
      }
    )
  }
}


}
