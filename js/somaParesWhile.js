
function somaParesWhile() {
    let n = parseInt(prompt("Digite o número limite:"));
    let soma = 0;
    let i = 0;
    while (i <= n) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;

    }
    document.writeln(`A soma dos números pares de 1 a ${n} é: ${soma}`);
}