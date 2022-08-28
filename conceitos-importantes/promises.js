/**
 * PROMISES
 * 
 * São requisições que não possuem retorno imediato, mas demoram algum tempo para ter a resposta
 */

// Exemplo 1
const sumNumbers = (num1, num2) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 2000);
    });

sumNumbers(5, 50)
    .then(result => console.log(result))
    .catch(err => console.log(err));


// Exemplo 2
// fetch() - API que permite disparar uma requisição para o navegador
// then() - Executado quando há sucesso na requisição
// catch() - captura erros na requisição e executa alguma ação se existir
// finally() - Executado ao final da requisição, seja com sucesso ou erro
fetch('http://api.github.com/users/DaniloTeixeira')
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.log(err))
    .finally(() => console.log('Requisição 1 finalizada'));

// Exemplo 3 (sintaxe async await)
async function getGithubUser() {
    try {
        const response = await fetch('http://api.github.com/users/DaniloTeixeira');

        return await response.json();

    } catch (error) {
        console.log(error);

    } finally {
        console.log('Requisição 2 finalizada');
    };
}

getGithubUser().then(body => console.log(body.name));