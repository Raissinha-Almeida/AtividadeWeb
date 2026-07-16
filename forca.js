function jogar(){

    let palavras = [
        "computador",
        "javascript",
        "programacao",
        "internet",
        "algoritmo",
        "teclado",
        "monitor",
        "celular",
        "desenvolvimento",
        "python",
        "html",
        "css",
        "banco",
        "sistema",
        "notebook"
    ];

    let palavra = palavras[Math.floor(Math.random() * palavras.length)];


    let letras = palavra.split("");


    let tabuleiro = [];

    for(let i = 0; i < letras.length; i++){
        tabuleiro.push("_");
    }

    let tentativas = 6;

    while(tentativas > 0 && tabuleiro.join("") != palavra){

        let letra = prompt(
            "Tentativas restantes: " + tentativas +
            "\n\nPalavra: " + tabuleiro.join(" ") +
            "\n\nDigite uma letra:"
        );

        if(letra == null){
            alert("Jogo encerrado.");
            return;
        }

        letra = letra.toLowerCase();

        if(letra.length != 1){
            alert("Digite apenas UMA letra.");
            continue;
        }

        if(palavra.includes(letra)){

            for(let i = 0; i < letras.length; i++){

                if(letras[i] == letra){
                    tabuleiro[i] = letra;
                }

            }

        }else{

            tentativas--;
            alert("Essa letra não existe!");

        }

    }

    if(tabuleiro.join("") == palavra){

        alert("🎉 Parabéns!\nVocê descobriu a palavra: " + palavra);

    }else{

        alert("😢 Você perdeu!\nA palavra era: " + palavra);

    }

}