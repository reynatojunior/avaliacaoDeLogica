function calcularFatorial() {
  const input = prompt(
    "Digite um número inteiro positivo para calcular o fatorial:"
  );

  const numero = Number(input);

  if (isNaN(numero)) {
    console.log("Erro: Por favor, digite um número válido.");
    return;
  }

  if (numero < 0) {
    console.log(
      "Erro: O fatorial só está definido para números não negativos."
    );
    return;
  }

  if (!Number.isInteger(numero)) {
    console.log(
      "Erro: Por favor, digite um número inteiro (sem casas decimais)."
    );
    return;
  }

  let resultado = 1;

  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  document.writeln(`O fatorial de ${numero} é: ${resultado}`);
}

