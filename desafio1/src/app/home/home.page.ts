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
  this.pokeService.getListPoke().subscribe(data=>{
    this.listaPoke = data['results'];
  })
}
abriDetalhePoke(poke:any){
  let url = poke.url;
  let navigationPokeParam: NavigationExtras = {
    queryParams: {
      url:url,
    }
}
this.navPoke.navigateForward(['poke-detalhe'],navigationPokeParam)

}

}