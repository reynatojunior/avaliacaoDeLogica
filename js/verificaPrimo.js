function verificaPrimo() {
  const numero = parseInt(prompt("Digite um número inteiro:"));

  if (isNaN(numero) || numero < 2) {
    document.writeln("Número inválido. Digite um número inteiro maior ou igual a 2.");
    return;
  }

  let numPrimo = true;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      numPrimo = false;
      break;
    }
  }

  if (numPrimo) {
    document.writeln(`${numero} é um número primo.`);
  } else {
    document.writeln(`${numero} não é um número primo.`);
  }
}