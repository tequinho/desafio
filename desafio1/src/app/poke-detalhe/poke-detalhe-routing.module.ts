import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeDetalhePage } from './poke-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: PokeDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeDetalhePageRoutingModule {}
