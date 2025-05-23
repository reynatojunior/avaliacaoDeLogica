function verificaMultiplos() {
  const inicio = parseInt(prompt("Digite o número inicial:"));
  const fim = parseInt(prompt("Digite o número final:"));
  
  if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
    document.write("Intervalo inválido. Digite números válidos onde o início seja menor ou igual ao fim.");
    return;
  }

  let encontrados = [];
  
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      encontrados.push(i);
    }
  }

  if (encontrados.length > 0) {
    document.write("Números pares e múltiplos de 3: " + encontrados.join(", "));
  } else {
    document.write("Nenhum número no intervalo satisfaz as condições (par e múltiplo de 3).");
  }
}

