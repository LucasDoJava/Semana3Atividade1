//Algoritmo 5

//criado uma lista com 4 objetos
const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ];
//foi usado o map para iterar os elementos e assim pegar o primeiro nome e unir ao sobrenome
  const output = users.map((x)=> x.firstName+" "+x.lastName);
  console.log(output);

//nesse código, temos uma lista de 4 objetos, e é usado o map para iterar a lista e assim ser possível pegar o primeiro nome e sobrenome para uní-los na nova lista.
  