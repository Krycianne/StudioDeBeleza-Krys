
  
  export interface IProdutoCarrinho extends IMaquiagem{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//
  
      quantidade: number;    // quantidade selecioanda na hora da compra//
    
  }
  export interface IMaquiagem {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }
  
  
  export const maquiagem: IMaquiagem[] = [
     
      { id: 1, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/maquiagem/1.jpg", quantidadeEstoque: 1000},
      { id: 2, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/maquiagem/2.jpg", quantidadeEstoque: 1000},
      { id: 3, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/maquiagem/3.jpg", quantidadeEstoque: 1000},
      { id: 4, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/maquiagem/4.jpg", quantidadeEstoque: 1000},
      { id: 5, descricao: "Maquiagem", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/maquiagem/5.jpg", quantidadeEstoque: 1000},

  ]
 
  