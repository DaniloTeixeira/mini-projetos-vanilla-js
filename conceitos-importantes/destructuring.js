
/**
 * DESTRUCTURING ASSIGNMENT
 * 
 * A sintaxe de desestruturação, permite a extração de dados de um objeto para uma variável
 * 
 */

const user = {
    name: 'Danilo',
    age: 36,
    profession: 'Desenvolvedor',
    gender: 'Masculino'
};



// Exemplo sem o uso do destructuring
const nome = user.name;
console.log(nome); // Danilo

// Exemplo usando o destructuring
const { name } = user;
console.log(name); // Danilo

// Atribuindo dois valores a duas variaveis
const { age, profession } = user;
console.log(`${age} - ${profession}`); // 36 - Desenvolvedor

// Renomeando variáveis do objeto ao atribuir a variável (Não altera o nome da propriedade do objeto)
const { gender: genero } = user;
console.log(genero); // Masculino

console.log(user);