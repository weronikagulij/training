import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  
  constructor(
    // private http: HttpClient
  ) { }

  // getAllPokemons() {
  //   return this.http.get(`${environment.pokeapi}pokemon`);
  // }

  // getPokemon(id: string) {
  //   return this.http.get(`${environment.pokeapi}pokemon/${id}`);
  // }
}
