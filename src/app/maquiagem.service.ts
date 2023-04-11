import { Injectable } from '@angular/core';
import { IMaquiagem, maquiagem } from './maquiagem';

@Injectable({
  providedIn: 'root'
})
export class MaquiagemService {

  maquiagem: IMaquiagem[] = maquiagem;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
                                       //tem acesso direto aos produtos//
  constructor() { }

  //2 metodos abaixo//

  getAll(){      //retorna a lista de produtos//
    return this.maquiagem;
  }

  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(maquiagemId: number){
    return this.maquiagem.find(maquiagem => maquiagem.id == maquiagemId);
                        //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//

  
}
