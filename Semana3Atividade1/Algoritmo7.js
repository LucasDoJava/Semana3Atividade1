//Algoritmo 7

//criado uma lista com 6 objetos
let estudantes =[
    {nome:"João", idade:15},
    {nome:"Maria", idade:20},
    {nome:"Felipe", idade:22},
    {nome:"Pedro", idade:12},
    {nome:"Joana", idade:18},
   ];

//é feito um filter para pegar apenas os estudantes maiores de 18 anos
   const details = estudantes.filter((x)=> x.idade >= 18);
   //pega o tamanho da lista e mostra no console
   console.log(details.length);
   
   //nesse código, ele pega os 6 elementos criados da lista e faz um filter para passar apenas os maiores de 18 anos e é mostrado no console o tamnanho dessa lista.