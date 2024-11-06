//Algoritmo 2

//criando uma lista de 5 elementos
const numbers = [1,2,3,4,5];
//usando map para iterar a lista e colocar os elementos com seu valor dobrado
const output = numbers.map((number)=>{
  return number * 2;  
});

//retorna a lista sem seus valores dobrados
console.log(numbers);
//retorna a nova lista com seus valores dobrados
console.log(output);

//nesse código, possui uma lista que é iterada pelo map e assim é criado uma nova lista com os valores dobrados, após isso, é dado um console na lista que não foi alterada e a lista que foi alterada.
