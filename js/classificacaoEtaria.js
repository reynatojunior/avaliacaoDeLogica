function classificarIdade(){
    let idade = prompt("digite a sua idade");
    let classificacao;
    if(idade < 0){
        document.writeln("idade inválida");
    } else if(idade <= 12){
        classificacao = "criança";
        document.writeln(`a classificação etária é ${classificacao}`);
    } else if(idade >12 && idade <= 17){
        classificacao = "adolescente";
        document.writeln(`a classificação etária é ${classificacao}`);
    } else if(idade > 17 && idade <= 59){
        classificacao = "adulto";
        document.writeln(`a classificação etária é ${classificacao}`);
    } else if(idade > 59){
        classificacao = "idoso";
        document.writeln(`a classificação etária é ${classificacao}`);
    }
    else{
        document.writeln("idade inválida");
    }
    
    



}