import { Injectable } from '@angular/core';
import { IPenteado, penteado } from './penteado';

@Injectable({
  providedIn: 'root'
})
export class PenteadoService {

  penteado: IPenteado[] = penteado;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
                                       //tem acesso direto aos produtos//
  constructor() { }

  //2 metodos abaixo//

  getAll(){      //retorna a lista de produtos//
    return this.penteado;
  }

  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(penteadoId: number){
    return this.penteado.find(penteado => penteado.id == penteadoId);
                        //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//

  
}

