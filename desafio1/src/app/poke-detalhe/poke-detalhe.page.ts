import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeService } from '../api/poke.service';

@Component({
  selector: 'app-poke-detalhe',
  templateUrl: './poke-detalhe.page.html',
  styleUrls: ['./poke-detalhe.page.scss'],
})
export class PokeDetalhePage implements OnInit {
  pokeUrl:any
  pokeDetalhe:any
  pokeHabilidades: any
  pokeName:any
  arrayHabilidade:any ;
  constructor(public navCtrl: NavController, private route: ActivatedRoute, private getPoke: PokeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => { this.pokeUrl=params["url"]});
  this.getDetalhe();
  
  
  }
  getDetalhe(){
    this.getPoke.getPokeDetalhe(this.pokeUrl).subscribe(data =>{
      console.log(data);
      this.arrayHabilidade=[]
      this.pokeDetalhe = data['sprites']['other']['home']['front_default'];
      for(let i =0;i<data['abilities']['length'];i++){

      this.arrayHabilidade.push(data['abilities'][i]['ability']['name'])
      }
      this.pokeHabilidades =  this.arrayHabilidade.sort()
      this.pokeName = data['name']
    })
  }

  voltaPagina(){
    this.navCtrl.navigateForward(['home']);
  }
}