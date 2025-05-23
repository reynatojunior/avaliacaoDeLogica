function validaSenha(){
    let senha = prompt("digite a senha");
    let senhaCorreta = "senai123";
    let tentativas = 0;
    let maxTentativas = 3;


    if(senha === senhaCorreta){
        document.writeln("senha correta");
    } else

    while (senha !== senhaCorreta && tentativas < maxTentativas) {
        tentativas++;
        if (tentativas < maxTentativas) {
            senha = prompt("senha incorreta, tente novamente");
        }
        else{
            document.writeln("senha incorreta, número máximo de tentativas atingido");
        }
    }
   
}