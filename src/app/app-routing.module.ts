import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { UnhaEmGelComponent } from './unha-em-gel/unha-em-gel.component';
import { PenteadoComponent } from './penteado/penteado.component';
import { MaquiagemComponent } from './maquiagem/maquiagem.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "", redirectTo:"produtos", pathMatch: "full"},  // vai redirecionar a pagina de produtos para a pagina principal//
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)},
  { path: "**", component:NaoEncontradaComponent},// quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "unha", component:UnhaEmGelComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "penteado", component:PenteadoComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "maquiagem", component:MaquiagemComponent} // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//

];

  
@NgModule({
  declarations: [],
  imports: [                          //tem que fazer o importe do RouterModule lá encima
     RouterModule.forRoot(routes)     //adiciona aqui o RouterModule para recebes as rotas das variaveis//
  
    ],
  exports: [
    RouterModule         // do mesmo jeito que fez o import acima, deve exportar o RouterModule//
  ]
   
  })
export class AppRoutingModule { }
