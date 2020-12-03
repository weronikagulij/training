import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // pokemons: // Pokemon[];

  constructor(
    // private service: PokeService
  ) { }

  ngOnInit(): void {
    // this.service.getAllPokemons()
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     // this.pokemons = res.results;
    //     console.log(this.pokemons)
    //   });

    // console.log('2');
  }

}

// interface Pokemon {
//   name: string;
//   url: string; // number, boolean
// }
