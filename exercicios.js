// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const button = document.querySelector('#btnCep');
const input = document.querySelector('#cep');
const resultadoCep = document.querySelector('.resultadoCep');

button.addEventListener('click', handleClick);

function handleClick(event) {
  //Tratando o clique e previnindo o padrão que é enviar
  event.preventDefault();
  const cep = input.value; //Pegando o valor digitado no input
  buscarCep(cep); //Passando esse valor digitado para a função
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`) //Passei o cep dentro da requisição
    .then((response) => response.text()) //Pegando a resposta da requisição e transformando em texto
    .then((body) => {
      //Pegando a requisição em texto e atribuindo a Div
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then((resolve) => resolve.json())
    .then((json) => {
      btcDisplay.innerText = 'R$' + json.BRL.buy;
    });
}
//setInterval(fetchBtc, 100 * 30);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function fetchPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((resolve) => resolve.json())
    .then((piada) => {
      paragrafoPiada.innerText = piada.value;
    });
}
btnProxima.addEventListener('click', fetchPiada);
