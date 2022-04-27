import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeDetalhePageRoutingModule } from './poke-detalhe-routing.module';

import { PokeDetalhePage } from './poke-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeDetalhePageRoutingModule
  ],
  declarations: [PokeDetalhePage]
})
export class PokeDetalhePageModule {}
