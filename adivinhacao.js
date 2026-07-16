function iniciarJogo() {

    let numeroSecreto = Math.floor(Math.random() * 50) + 1;

    let palpite = 0;
    let tentativas = 0;

    while (palpite !== numeroSecreto) {

        palpite = parseInt(prompt("Digite um número entre 1 e 50:"));

        tentativas++;

        if (isNaN(palpite)) {
            alert("Digite um número válido!");
        }
        else if (palpite === numeroSecreto) {
            alert("🎉 Parabéns! Você acertou o número " + numeroSecreto +
                  " em " + tentativas + " tentativa(s).");
        }
        else if (palpite < numeroSecreto) {
            alert("O número secreto é MAIOR!");
        }
        else {
            alert("O número secreto é MENOR!");
        }
    }
}