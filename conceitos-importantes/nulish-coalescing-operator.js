/**
 * OPERADOR DE COALESCÊNCIA NULA: ??
 * 
 * Oporador lógico que retorna o valor do seu lado direito, 
 * caso o valor do lado esquerdo seja null ou undefined.
 * 
 * OBS: A lógica é parecida, mas não igual ao operador OR "||". 
 * O operador OR retorna o valor do lado direito, caso o valor
 * do lado esquerdo seja falsy.
*/

// Exemplo Null Coalescing:
console.log(0 ?? ''); // 0 

// Utilizando o operador OR, o resultado será diferente
console.log(0 || ''); // undefined -> Resultado inesperado, pois os dois valores são falsy 
