//Algoritmo 8

//cria um lista de 4 elementos
const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},  
  ];

  //é usado um filter para pegar apenas o que menores de 30 anos, e junto ao filter, é usado um map para pegar o primeiro nome dessa pessoas que passaram pelo filter.
  const output=users.filter((x)=>x.age<30).map((x)=>x.firstName);
  console.log(output);
  
  //nesse código é criado uma lista com 4 elementos, onde é usado um filter para passar apenas os que são menores de 30 anos e o map pega o primeiro nome e adiciona a uma nova lista dos que passaram pelo filter.
  