/**
 * MÉTODOS DE ARRAYS
 * 
 * São métodos utilizados para percorrer arrays e executar alguma ação com seus elementos
 */

const array = [1, 2, 3, 4, 5];


// for in - retorna os índices do array
for (let i in array) {
    console.log(i); // 0, 1, 2, 3, 4
}


// for of - retorna os valores dos índices do array
for (let i of array) {
    console.log(i); // 1, 2, 3, 4
}


/* 
  forEach()
  Pode receber até três parâmetros, (item, index, array), e é usado para executar alguma ação com os elementos
  Este método não tem retorno
*/
array.forEach((item, index, array) => {
    console.log(item, index, array);
    // item - imprime o valor dos itens
    // index - imprime o valor dos indexes
    // array - imprime o array
});


/* 
  map()
  O map retorna um novo array, com a mesma quantidade de elementos, porém transformados
  No caso abaixo, os valores foram todos dobrados
*/
const mappedArray = array.map(item => item * 2);
console.log(mappedArray); // [2, 4, 6, 8, 10]


/* 
  filter()
  Filtra um array de acordo com a condição aplicada
  Retorna os itens pares do array (% - significa resto. O resto da divisão do item por dois é igual a zero)
*/
const filteredArray = array.filter(item => item % 2 === 0);
console.log(filteredArray); // [2 ,4]

/* 
  every()
  Retorna true ou false, se todos os elementos atendem a condição
*/
const everyArray = array.every(item => typeof item === 'number');
console.log(everyArray); // true


/* 
  some()
  Retorna true ou false, se ao menos os elementos atendem a condição
*/
const someArray = array.some(item => item > 4);
console.log(everyArray); // true


/* 
  find()
  Retorna o primeiro item que satisfaça a condição
*/
const findArray = array.find(item => item > 0);
console.log(findArray); // 1
/* 
  findIndex()
  Retorna o index do primeiro item que satisfaça a condição
*/
const findIndexArray = array.find(item => item > 1);
console.log(findIndexArray); // 2

/* 
  reduce()
  Recebe dois parâmetros, uma função e o valor inicial do que será retornado pelo método
  Usado para retornar um único valor, a partir de alguma condição a ser executada em cada elemento do array
  Neste caso, irá retornar a soma de todos os elementos do array
*/
const reduceArray = array.reduce((acc, item) => acc + item, 0);
console.log(reduceArray); // 15