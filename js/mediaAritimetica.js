function mediaAritmetica() {
  let soma = 0;
  let contador = 0;
  let entrada = '';

  while (entrada !== 'fim') {
    entrada = prompt("Digite um número ou 'fim' para terminar:");
    
    if (entrada === 'fim') {
      break;
    }

    const numero = parseFloat(entrada);
    
    if (!isNaN(numero)) {
      soma += numero;
      contador++;
    }
  }

  if (contador > 0) {
    const media = soma / contador;
    document.writeln(`Média dos números: ${media.toFixed(2)}`);
  } else {
    document.writeln("Nenhum número válido foi inserido.");
  }
}

