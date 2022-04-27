import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeService } from '../api/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listaPoke:any;
  constructor(
    private pokeService: PokeService,
    private navPoke: NavController
  )
   {}
 ngOnInit(): void {
   this.getAllPoke();
 }
getAllPoke(){

  this.pokeService.getTeste().subscribe(data=>{
    this.listaPoke  = data['results'];
  })
}
abriDetalhePoke(poke:any){
// debugger;
  let url = new URL( poke.url).pathname;
  let parts = url.split("/");
  let navigationPokeParam: NavigationExtras = {
    queryParams: {
      id:parts[4],
    }
}
this.navPoke.navigateForward(['poke-detalhe'],navigationPokeParam)

}

}