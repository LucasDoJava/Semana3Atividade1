//Algoritmo 3

//crinado uma lista de 5 elementos
const numbers = [1,2,3,4,5];
//criando uma função que irá retornar valores ímpares 
const isOdd = (x) => { return x % 2; 
}

//usando o filter, chamamos a função para filtrar que só irão passar os com valores ímpares
const output = numbers.filter(isOdd); 

console.log(output);

//nesse código, é criado uma lista de 5 elementos, onde é feita uma função que irá receber a lista e retornar os resto da divisão por 2, após isso é feito uma filtragem para ser colocado a lista apenas os valores ímpares.