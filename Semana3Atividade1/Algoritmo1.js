//Algotitmo 1

//criando uma lista com 5 elementos
const numeros = [1,2,3,4,5];
//criando uma função que recebe a lista e retorna os valores da lista com seus valores dobrados
let calcularDobro = ((numero) =>{
{
  return numero*2;  
}
});
//agora os elementos da lista numeros estão sendo iterados pelo callback e sendo criando uma nova lista com a mesma quantidade de elementos
const numerosDobro = numeros.map(calcularDobro);
console.log(numerosDobro);

//nesse código, possui uma lista de 5 elementos que chamado numa função para dobrar o valor dos elementos e após isso é usado o map para iterar a lista com a mesma quantidade de elementos.
