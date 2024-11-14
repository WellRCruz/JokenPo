/**
 * JokenPo
 * @author Wellington R. Cruz
*/

function jogar() {
    // Validação da obrigatoriedade da escolha do jogador.
    // Usamos o argumento checked para validar radion buttons e checkbox.
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção")
    } else {
        // Lógica principal
        // Sorteio da opção do computador 
        let sorteio = Math.floor(Math.random() * 3) // Sorteia -> 0 1 2
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }
    }

}