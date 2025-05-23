function contadorRegressivo() {
  let numero = parseInt(prompt("Digite um número maior que zero:"));
  
  if (isNaN(numero) || numero <= 0) {
    document.writeln("Por favor, digite um número válido maior que zero.");
    return;
  }

  const numeroInicial = numero;
  
  while (numero >= 0) {
    document.writeln(numero + "<br>");
    numero--;
  }

  document.writeln(`O número ${numeroInicial} foi digitado e a contagem regressiva foi concluída.`);
}