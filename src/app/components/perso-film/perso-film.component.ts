import { Subject } from 'rxjs';
import { Homeword } from './../../models/homeworld';
import { Character } from './../../models/character';
import { StarWarsApiService } from './../../services/star-wars-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perso-film',
  templateUrl: './perso-film.component.html',
  styleUrls: ['./perso-film.component.scss']
})
export class PersoFilmComponent implements OnInit {

  people: Character = new Character({});

  homePlanet: Homeword = new Homeword({});

  constructor(private StarWarsService: StarWarsApiService) { }

  ngOnInit(): void {
  }

  getPessoas(event:any){
    const numeroPessoa = (event.target as HTMLInputElement)?.value;

    if (numeroPessoa) {
    this.StarWarsService
    .getPeople(numeroPessoa)
    .subscribe(
      (response) => {
        //Next é um metodo do objeto do tipo Subject
        // this.listFilmes$.next(response.results);
        this.people = response;
        console.log(response)
        this.getPlanet(this.people.homeworld)
        // console.log(this.people.homeworld)
      }
    )
  }
}

  getPlanet(linkPlanet: any){
    this.StarWarsService
    .readUrlApi(linkPlanet)
    .subscribe(
      (response) => {
        // this.peoplePlanet$.next(response);
        this.homePlanet = response;
        console.log(response)
      }
     )
  }
}
