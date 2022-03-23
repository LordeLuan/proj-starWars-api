import { Subject } from 'rxjs';
import { Character } from './../../models/character';
import { Films } from './../../models/films';
import { StarWarsApiService } from './../../services/star-wars-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-films',
  templateUrl: './detail-films.component.html',
  styleUrls: ['./detail-films.component.scss']
})
export class DetailFilmsComponent implements OnInit {

  detailFilme: Films = new Films({});

  listURLCharacter$ = new Subject<string[]>();

  // instância de arrays para salvar informações para printar na tela.
  people: Character[] = [];

  planets: Character[] = [];

  starships: Character[] = [];

  // characters

  constructor(
    private route: ActivatedRoute,
    private DetailfilmesApiService: StarWarsApiService,
  ) {}

  ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        // this.getDetailFilms(id);
        this.getFilmsSW(id);
  }

// Métodos para buscar o URL que consta no array retornado na requisiçao da API
getDetailFilmsPeople(link: any){
  this.DetailfilmesApiService
  .readUrlApiDetail(link)
  .subscribe(
    (response) => {
      // this.people$.next(response);
      this.people.push(response);
      console.log(response)
    }
   )
}
getDetailFilmsPlanets(link: any){
  this.DetailfilmesApiService
  .readUrlApiDetail(link)
  .subscribe(
    (response) => {
      // this.people$.next(response);
      this.planets.push(response);
      console.log(response)
    }
   )
}
getDetailFilmsStarships(link: any){
  this.DetailfilmesApiService
  .readUrlApiDetail(link)
  .subscribe(
    (response) => {
      // this.people$.next(response);
      this.starships.push(response);
      console.log(response)
    }
   )
}

// Método para buscar as informações dos filmes com o id passado na URL
getFilmsSW(id:any){
  if (id) {
  this.DetailfilmesApiService
  .getFilms(id)
  .subscribe(
    (response) => {

      this.detailFilme = response;
      // console.log(this.detailFilme.characters)

      // For para varrer o array e para cada item/link do array chama o método para consultar o link da api e inserir a informação em outro array especifico para o metodo.
      this.detailFilme.characters.forEach(
        linkPeople => {
          this.getDetailFilmsPeople(linkPeople);
        }
      );
      this.detailFilme.planets.forEach(
        linkPlanets => {
          this.getDetailFilmsPlanets(linkPlanets);
          console.log(this.detailFilme.planets)
        }
      );

      this.detailFilme.starships.forEach(
        linkStarships => {
          this.getDetailFilmsStarships(linkStarships);
        }
      );

    }
  )
}
}

}
