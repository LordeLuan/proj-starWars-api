import { Homeword } from './../models/homeworld';
import { Character } from './../models/character';
import { Films } from './../models/films';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {

  constructor(private http:HttpClient) { }

  getFilms(filme:string){
    const urlGet = `${environment.urlAPI}/films/${filme}`;
    return this.http.get<Films>(urlGet);
  }

  getPeople(pessoa:string){
    const urlGet = `${environment.urlAPI}/people/${pessoa}`;
    return this.http.get<Character>(urlGet);
  }

  readUrlApi(link:string){
    // const urlGet = `${link}`;
    return this.http.get<Homeword>(link);
  }
  readUrlApiDetail(link:string){
    // const urlGet = `${link}`;
    return this.http.get<Character>(link);
  }

}


