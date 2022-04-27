import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(public http: HttpClient) { }

  getListPoke(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?offset=5&limit=5');  }
getPokeDetalhe(id:any){
  return this.http.get('/apiphp/mid/detalhePoke.php?id='+id);
}

getTeste(){
  return this.http.get('/apiphp/mid/');
}
  }
  
