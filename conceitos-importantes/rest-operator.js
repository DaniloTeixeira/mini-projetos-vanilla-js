/**
 * OPERADOR REST: ...
 * 
 * Permite representar o um número indefinido de argumentos. 
 */

const user = {
    name: 'Danilo',
    age: 36,
    profession: 'Desenvolvedor',
    gender: 'Masculino'
};

// Neste caso, name representa a propriedade name do objeto e rest representa o resto das propriedades do objeto.
const { name, ...rest } = user;

console.log(name); // Danilo
console.log(rest); // { age: 36, profession: 'Desenvolvedor, gender: 'Masculino' }

// Utilizando o rest com array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilizando a desestruturação, junto com o operador rest em array
// O underline, indica que o índice representado deve ser ignorado
const [first, _, third, ...elements] = array;
console.log(first, third);// 1 3
console.log(elements); // [4, 5, 6, 7, 8, 9, 10];



