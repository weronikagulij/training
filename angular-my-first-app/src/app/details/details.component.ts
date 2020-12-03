import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  // pokemon: any;

  constructor(
    // private service: PokeService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const params = this.route.snapshot.params;
    // console.log(params)

    // this.service.getPokemon(params.id)
    //   .subscribe(res => {
    //     console.log(res);
    //     // this.pokemon = res;
    //   });
  }

}
