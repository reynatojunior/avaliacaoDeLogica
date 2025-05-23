//calculadora avançada

function calculadora(){

let num1 = Number(prompt("digite um valor"));
let num2 = Number(prompt("digite um valor"));
let operacao = prompt("digite a operação desejada: +, -, *, /, **, %");
let resultado;

if(operacao == "+"){
    resultado = num1 + num2;
    document.writeln(`a somda de ${num1} + ${num2} é igual a ${resultado}`);
    
}else if(operacao == "-"){
    resultado = num1 - num2;
    document.writeln(`a subtração de ${num1} - ${num2} é igual a ${resultado}`);
}else if(operacao == "*"){
    resultado = num1 * num2;
    document.writeln(`a multiplicação de ${num1} * ${num2} é igual a ${resultado}`);
}else if(operacao == "/"){
    if(num2 == 0){
        document.writeln("não é possível dividir por zero");
    }else{
        resultado = num1 / num2;
        document.writeln(`a divisão de ${num1} / ${num2} é igual a ${resultado}`);
    }
}else if(operacao == "**"){
    resultado = num1 ** num2;
    document.writeln(`a potenciação de ${num1} ** ${num2} é igual a ${resultado}`); 
}
else if(operacao == "%"){
    resultado = num1 % num2;
    document.writeln(`o resto da divisão de ${num1} % ${num2} é igual a ${resultado}`); 
}
else{
    document.writeln("operação inválida");
}

}

