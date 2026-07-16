function jogar(){

    let jogador = prompt("Digite: Pedra, Papel ou Tesoura");

    if(jogador == null){
        alert("Jogo cancelado!");
        return;
    }

    jogador = jogador.toLowerCase();

  
    if(jogador != "pedra" && jogador != "papel" && jogador != "tesoura"){
        alert("Opção inválida! Digite apenas Pedra, Papel ou Tesoura.");
        return;
    }

  
    let numero = Math.floor(Math.random() * 3);

    let computador;

    if(numero == 0){
        computador = "pedra";
    }
    else if(numero == 1){
        computador = "papel";
    }
    else{
        computador = "tesoura";
    }

    
    if(jogador == computador){
        alert("Computador: " + computador +
              "\nResultado: Empate!");
    }
    else if(
        (jogador == "pedra" && computador == "tesoura") ||
        (jogador == "papel" && computador == "pedra") ||
        (jogador == "tesoura" && computador == "papel")
    ){
        alert("Computador: " + computador +
              "\nResultado: Você venceu!");
    }
    else{
        alert("Computador: " + computador +
              "\nResultado: Você perdeu!");
    }

}