import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

import { CommonModule } from '@angular/common';
import { UnhaEmGelComponent } from '../unha-em-gel/unha-em-gel.component';
import { PenteadoComponent } from '../penteado/penteado.component';
import { MaquiagemComponent } from '../maquiagem/maquiagem.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: "produtos", component:ProdutosComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//

  { path: "unha", component:UnhaEmGelComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "penteado", component:PenteadoComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "maquiagem", component:MaquiagemComponent} // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//




];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  
  
  ],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
