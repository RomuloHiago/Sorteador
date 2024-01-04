// Função para gerar um número aleatório dentro de um intervalo definido
function generateNumber() {
    // Obtem o valor do campo de entrada com a classe 'input-min'
    const min = Math.ceil(document.querySelector('.input-min').value);

    // Obtem o valor do campo de entrada com a classe 'input-max'
    const max = Math.floor(document.querySelector('.input-max').value);

    // Gera um número aleatório no intervalo definido pelos valores de 'min' e 'max'
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibi o número aleatório em um alerta
    alert(result);
}


