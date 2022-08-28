/**
 *  OPTIONAL CHAINING - ENCADEAMENTO OPCIONAL: ?
 * 
 * Deve ser usado quando há a possibilidade de acessar uma propriedade 
 * de um objeto que pode não existir ou ter o valor null/undefined
 */


const user = {
    name: 'Danilo',
    age: 36,
    profession: 'Desenvolvedor',
    gender: 'Masculino'
};

// Aqui, é retornado um erro, pois estamos tentando ler a propriedade  de address, porém esse atributo não existe
console.log(user.address.zipCode); // Cannot read properties of undefined (reading 'zipCode')

// Com o uso do optional chaining, apenas é retornado undefined
console.log(user.address?.zipCode); // undefined
