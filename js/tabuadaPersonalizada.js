function tabuadaPersonalizada() {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
    let limite = parseInt(prompt("Digite o limite da tabuada:"));
    let resultado = "";

    for (let i = 1; i <= limite; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    document.writeln(`Tabuada do ${numero} até ${limite}:\n${resultado}`);
}   