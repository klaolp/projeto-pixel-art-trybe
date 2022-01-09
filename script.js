function createBoard () {

    let quadro = document.getElementById("pixel-board");

    for(let i = 0; i < 5; i += 1)
    {
        let linha = document.createElement("div");
        linha.className = ("linha");

        for(let j = 0; j < 5; j += 1)
        {
            let quad = document.createElement("div");
            quad.className = "pixel";
            linha.appendChild(quad);
        }
        quadro.appendChild(linha);
    }
}

createBoard();

function selecionarCor()
{
    let click = document.getElementsByClassName("color");
    
    
    for(let i = 0; i < click.length; i += 1) {
        click[i].addEventListener("click", recebeClick);
    }
    
    function recebeClick(eventoDeOrigem) {
       let cor = (eventoDeOrigem.target);
       let anterior = document.getElementsByClassName("selected");
       anterior[0].className = "color";
       cor.className = "color selected";
    }
}

selecionarCor();