function cadastro(nome,idade) {
    if(nome == undefined & idade == undefined) {
        console.log("Preencha o nome e a idade");
    }else if (idade == undefined) {
        console.log("Olá " + nome + " Bem Vindo!");
    }else {
        console.log("Olá " + nome + " Bem Vindo! Você tem " + idade + " anos")
    }
}
cadastro("Alan",5);
cadastro("Alan")