// 1.Criação de tabela de pixels.
function createBoard() {
  const quadro = document.getElementById('pixel-board');

  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('div');
    linha.className = ('linha');

    for (let j = 0; j < 5; j += 1) {
      const quad = document.createElement('div');
      quad.className = 'pixel';
      linha.appendChild(quad);
    }
    quadro.appendChild(linha);
  }
}

createBoard();
// 2.Criação da nova tabela de pixels personalizada.
// 2.1 Função para apagar tabela original.
function apagarBoard() {
  const linhas = document.getElementsByClassName('linha');
  const quadro = document.getElementById('pixel-board');

  for (let i = linhas.length - 1; i >= 0; i -= 1) {
    quadro.removeChild(linhas[i]);
  }
}

function boardPersol(tamanho) {
  const quadro = document.getElementById('pixel-board');

  for (let i = 0; i < tamanho; i += 1) {
    const linha = document.createElement('div');
    linha.className = ('linha');

    for (let j = 0; j < tamanho; j += 1) {
      const quad = document.createElement('div');
      quad.className = 'pixel';
      linha.appendChild(quad);
    }
    quadro.appendChild(linha);
  }
}

function gerarBoard() {
  const tamanho = document.getElementById('board-size').value;
  if (tamanho === '') {
    return alert('Board inválido!');
  }
  apagarBoard();
  if (tamanho < 5) {
    boardPersol(5);
  } else if (tamanho > 50) {
    boardPersol(50);
  } else {
    boardPersol(tamanho);
  }
}

function createBoardN() {
  const click = document.getElementById('generate-board');
  click.addEventListener('click', gerarBoard);
}

createBoardN();
// 3.Selecionando cor da paleta de cores
function selecionarCor() {
  function recebeClick(eventoDeOrigem) {
    const cor = (eventoDeOrigem.target);
    const anterior = document.getElementsByClassName('selected');
    anterior[0].className = 'color';
    cor.className = 'color selected';
  }

  const click = document.getElementsByClassName('color');

  for (let i = 0; i < click.length; i += 1) {
    click[i].addEventListener('click', recebeClick);
  }
}

selecionarCor();
// 4.Adicionar cor selecionada, na paleta de cores, na tabela de pixels.
function adicionaCor() {
  function clicado(eventoDeOrigem) {
    const quadradinho = (eventoDeOrigem.target);
    const cor = document.getElementsByClassName('color selected')[0].id;
    quadradinho.style.backgroundColor = cor;
  }

  const quadradinhos = document.getElementsByClassName('pixel');

  for (let i = 0; i < quadradinhos.length; i += 1) {
    quadradinhos[i].addEventListener('click', clicado);
  }
}

adicionaCor();

// 5.Função Limpar tabela de pixels
function limpar() {
  function limparPixels() {
    const quadradinhos = document.getElementsByClassName('pixel');

    for (let i = 0; i < quadradinhos.length; i += 1) {
      quadradinhos[i].style.backgroundColor = 'white';
    }
  }

  const cls = document.getElementById('clear-board');
  cls.addEventListener('click', limparPixels);
}

limpar();
