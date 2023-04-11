import { Injectable } from '@angular/core';
import { IUnha, unha } from './unha';

@Injectable({
  providedIn: 'root'
})
export class UnhaService {

  unha: IUnha[] = unha;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
                                       //tem acesso direto aos produtos//
  constructor() { }

  //2 metodos abaixo//

  getAll(){      //retorna a lista de produtos//
    return this.unha;
  }

  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(unhaId: number){
    return this.unha.find(unha => unha.id == unhaId);
                        //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//

  
}
