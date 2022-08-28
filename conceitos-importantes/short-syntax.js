/**
 * SHORT SINTAX
 * 
 * Quando a propriedade e o valor tem o mesmo nome, a sintaxe pode ser reduzida,
 * declarando apenas uma vez o nome, conforme abaixo
 */


const nome = 'Danilo';
const idade = 36;

/* 
Sem Short Sintax

const pessoa = {
    nome: nome,
    idade: idade
};
*/

// Com Short Sintax
const pessoa = {
    nome,
    idade
};


console.log(pessoa); // { nome: 'Danilo', idade: 36 }