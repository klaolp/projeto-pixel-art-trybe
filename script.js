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