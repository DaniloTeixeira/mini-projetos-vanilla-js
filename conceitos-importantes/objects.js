/**
 * OBJETOS: {}
 * 
 * Estrutura de dados que armazenam conjuntos de chave e valor
 * 
 */

// Exemplo de criação de objeto:

const user = {
    name: 'Danilo',
    age: 36,
    profession: 'Desenvolvedor',
    gender: 'Masculino'
};

// Alguns métodos/expressões de objetos

// in -> Retorna true ou false, se a propriedade existe no objeto
console.log('age' in user); // true
console.log('address' in user); // false

// Object.keys() -> Retorna um array com as chaves do objeto
console.log(Object.keys(user)); // ['name', 'age', 'profession', 'gender']

// Object.values() -> Retorna um array com os valores das chaves do objeto
console.log(Object.values(user)); // ['Danilo', 36, 'Desenvolvedor', 'Masculino']

// Object.entries() -> Retorna um array com vários arrays dentro, cada array interno, possui duas posições,
// a primeira é a chave do objeto, e a segunda é o valor
console.log(Object.entries(user)); // [ ['name','Danilo'], ['age', '36'], ['profession', 'Desenvolvedor'], ['gender', 'Masculino'] ]


